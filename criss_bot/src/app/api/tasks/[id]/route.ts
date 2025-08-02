import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface Task {
  id: number;
  text: string;
  username: string;
  status: "pending" | "done";
  createdAt: string;
  updatedAt: string;
}

const TASKS_FILE = path.join(process.cwd(), "data", "tasks.json");

async function loadTasks(): Promise<Task[]> {
  try {
    const data = await fs.readFile(TASKS_FILE, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveTasks(tasks: Task[]): Promise<void> {
  const dataDir = path.dirname(TASKS_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
  await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

// GET - Get specific task
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const taskId = parseInt(params.id); // Parse as number
    const username = request.nextUrl.searchParams.get("username");

    if (isNaN(taskId)) {
      return NextResponse.json(
        { success: false, error: "Invalid task ID" },
        { status: 400 }
      );
    }

    if (!username) {
      return NextResponse.json(
        { success: false, error: "Username is required" },
        { status: 400 }
      );
    }

    const tasks = await loadTasks();
    const task = tasks.find(
      (t) =>
        t.id === taskId && t.username.toLowerCase() === username.toLowerCase()
    );

    if (!task) {
      return NextResponse.json(
        { success: false, error: "Task not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: task,
    });
  } catch (error) {
    console.error("Error getting task:", error);
    return NextResponse.json(
      { success: false, error: "Failed to get task" },
      { status: 500 }
    );
  }
}

// PUT - Update task
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const taskId = parseInt(params.id); // Parse as number
    const body = await request.json();
    const { text, username } = body;

    if (isNaN(taskId)) {
      return NextResponse.json(
        { success: false, error: "Invalid task ID" },
        { status: 400 }
      );
    }

    const tasks = await loadTasks();
    const taskIndex = tasks.findIndex(
      (t) =>
        t.id === taskId && t.username.toLowerCase() === username.toLowerCase()
    );

    if (taskIndex === -1) {
      return NextResponse.json(
        { success: false, error: "Task not found" },
        { status: 404 }
      );
    }

    const task = tasks[taskIndex];

    // Update task
    if (text) {
      if (text.length > 200) {
        return NextResponse.json(
          { success: false, error: "Task text too long (max 200 characters)" },
          { status: 400 }
        );
      }
      task.text = text.trim();
    }

    task.updatedAt = new Date().toISOString();
    tasks[taskIndex] = task;

    await saveTasks(tasks);

    console.log(`✏️ Task #${taskId} updated by ${username}`);

    return NextResponse.json({
      success: true,
      data: task,
    });
  } catch (error) {
    console.error("Error updating task:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update task" },
      { status: 500 }
    );
  }
}

// DELETE - Delete task
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const taskId = parseInt(params.id); // Parse as number
    const body = await request.json();
    const { username } = body;

    if (isNaN(taskId)) {
      return NextResponse.json(
        { success: false, error: "Invalid task ID" },
        { status: 400 }
      );
    }

    const tasks = await loadTasks();
    const taskIndex = tasks.findIndex(
      (t) =>
        t.id === taskId && t.username.toLowerCase() === username.toLowerCase()
    );

    if (taskIndex === -1) {
      return NextResponse.json(
        { success: false, error: "Task not found" },
        { status: 404 }
      );
    }

    const task = tasks[taskIndex];

    const deletedTask = tasks.splice(taskIndex, 1)[0];
    await saveTasks(tasks);

    console.log(`🗑️ Task #${taskId} deleted by ${username}`);

    return NextResponse.json({
      success: true,
      data: deletedTask,
    });
  } catch (error) {
    console.error("Error deleting task:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete task" },
      { status: 500 }
    );
  }
}
