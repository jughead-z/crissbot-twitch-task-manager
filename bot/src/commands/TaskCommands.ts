import { ApiService } from "../services/ApiService";
import { CommandContext, Task, ApiResponse } from "../types";
import { StatsManager } from "../utils/StatsManager";

export class TaskCommands {
  constructor(
    private apiService: ApiService,
    private sayInChat: (channel: string, message: string) => void,
    private statsManager?: StatsManager
  ) {}

  async addTask(context: CommandContext): Promise<void> {
    const taskText = context.args.join(" ").trim();

    if (!taskText) {
      context.replyFn(
        "❌ Please provide a task description. Usage: !add Fix stream audio"
      );
      return;
    }

    if (taskText.length > 200) {
      context.replyFn("❌ Task description too long. Max 200 characters.");
      return;
    }

    try {
      const response = await this.apiService.post<Task>("/tasks", {
        text: taskText,
        username: context.username,
      });

      if (response.success && response.data) {
        context.replyFn(`✅ Task #${response.data.id} added: "${taskText}"`);
        this.statsManager?.taskCreated(); // Track task creation
      } else {
        context.replyFn("❌ Failed to add task. Please try again.");
      }
    } catch (error) {
      console.error("Error adding task:", error);
      context.replyFn("❌ Error adding task. Please try again.");
    }
  }

  async editTask(context: CommandContext): Promise<void> {
    const taskId = parseInt(context.args[0]);
    const newText = context.args.slice(1).join(" ").trim();

    if (!taskId || isNaN(taskId)) {
      context.replyFn(
        "❌ Please provide a valid task ID. Usage: !edit 1 New task text"
      );
      return;
    }

    if (!newText) {
      context.replyFn(
        "❌ Please provide new task text. Usage: !edit 1 New task text"
      );
      return;
    }

    if (newText.length > 200) {
      context.replyFn("❌ Task description too long. Max 200 characters.");
      return;
    }

    try {
      const response = await this.apiService.put<Task>(`/tasks/${taskId}`, {
        text: newText,
        username: context.username,
      });

      if (response.success && response.data) {
        context.replyFn(`✅ Task #${taskId} updated: "${newText}"`);
      } else {
        context.replyFn(
          "❌ Failed to edit task. Make sure you own this task and it exists."
        );
      }
    } catch (error) {
      console.error("Error editing task:", error);
      context.replyFn("❌ Error editing task. Please try again.");
    }
  }

  async markTaskDone(context: CommandContext): Promise<void> {
    const taskIdArg = context.args[0];

    if (!taskIdArg) {
      context.replyFn(
        "❌ Please provide a task ID. Usage: !done 1 or !done task_1"
      );
      return;
    }

    // Handle both numeric and string IDs
    let taskId: string | number = taskIdArg;

    // If it's a number, convert to number, otherwise keep as string
    if (!isNaN(parseInt(taskIdArg))) {
      taskId = parseInt(taskIdArg);
    }

    console.log(
      `🔍 Debug: User ${
        context.username
      } trying to complete task ${taskId} (type: ${typeof taskId})`
    );

    try {
      const response = await this.apiService.put<Task>(
        `/tasks/${taskId}/done`,
        {
          username: context.username,
        }
      );

      console.log(`🔍 Debug: API response:`, response);

      if (response.success && response.data) {
        context.replyFn(`✅ Task #${taskId} marked as complete! 🎉`);
      } else {
        context.replyFn(
          "❌ Failed to complete task. Make sure you own this task and it exists."
        );
      }
    } catch (error) {
      console.error("Error marking task done:", error);
      context.replyFn("❌ Error completing task. Please try again.");
    }
  }

  async showMyTasks(context: CommandContext): Promise<void> {
    try {
      const response = await this.apiService.get<Task[]>("/tasks");

      if (response.success && response.data) {
        const userTasks = response.data.filter(
          (task) =>
            task.username.toLowerCase() === context.username.toLowerCase()
        );

        if (userTasks.length === 0) {
          context.replyFn("📝 You have no tasks. Use !add to create one!");
          return;
        }

        const pendingTasks = userTasks.filter(
          (task) => task.status === "pending"
        );
        const completedTasks = userTasks.filter(
          (task) => task.status === "done"
        );

        let message = `📋 Your tasks: `;

        if (pendingTasks.length > 0) {
          const taskList = pendingTasks
            .slice(0, 3) // Limit to 3 tasks for chat
            .map((task) => `#${task.id} ${task.text}`)
            .join(" | ");
          message += `Pending: ${taskList}`;

          if (pendingTasks.length > 3) {
            message += ` (+${pendingTasks.length - 3} more)`;
          }
        }

        if (completedTasks.length > 0) {
          message += ` | ✅ Completed: ${completedTasks.length}`;
        }

        context.replyFn(message);
      } else {
        context.replyFn("❌ Failed to get tasks. Please try again.");
      }
    } catch (error) {
      console.error("Error getting tasks:", error);
      context.replyFn("❌ Error getting tasks. Please try again.");
    }
  }

  async clearCompletedTasks(context: CommandContext): Promise<void> {
    try {
      const response = await this.apiService.get<Task[]>("/tasks");

      if (response.success && response.data) {
        const completedTasks = response.data.filter(
          (task) => task.status === "done"
        );

        if (completedTasks.length === 0) {
          context.replyFn("📝 No completed tasks to clear.");
          return;
        }

        // Delete each completed task
        let deletedCount = 0;
        for (const task of completedTasks) {
          try {
            await this.apiService.delete(`/tasks/${task.id}`);
            deletedCount++;
          } catch (error) {
            console.error(`Error deleting task ${task.id}:`, error);
          }
        }

        if (deletedCount > 0) {
          this.sayInChat(
            context.channel,
            `🗑️ Cleared ${deletedCount} completed task(s).`
          );
        } else {
          context.replyFn("❌ Failed to clear completed tasks.");
        }
      } else {
        context.replyFn("❌ Failed to get tasks. Please try again.");
      }
    } catch (error) {
      console.error("Error clearing completed tasks:", error);
      context.replyFn("❌ Error clearing tasks. Please try again.");
    }
  }

  async taskHelp(context: CommandContext): Promise<void> {
    const helpMessage =
      "📋 Task Commands: !add [task] (create) | !edit [id] [text] (modify) | !done [id] (complete) | !mytasks (list yours) | !cleardone (clear completed - mods only)";
    context.replyFn(helpMessage);
  }
}
