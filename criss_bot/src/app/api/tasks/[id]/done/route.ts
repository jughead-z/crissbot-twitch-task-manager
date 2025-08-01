// criss_bot/src/app/api/tasks/[id]/done/route.ts
import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import path from "path";

interface Task {
  id: number;
  text: string;
  username: string;
  status: "pending" | "done";
  createdAt: string;
  updatedAt: string;
  completed?: boolean;
  completedAt?: string;
}

const TASKS_FILE = path.join(process.cwd(), "data", "tasks.json");

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.dirname(TASKS_FILE);
  if (!existsSync(dataDir)) {
    mkdirSync(dataDir, { recursive: true });
  }
}

// Read tasks from file
function readTasks(): Task[] {
  ensureDataDirectory();

  if (!existsSync(TASKS_FILE)) {
    return [];
  }

  try {
    const data = readFileSync(TASKS_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading tasks file:", error);
    return [];
  }
}

// Write tasks to file
function writeTasks(tasks: Task[]) {
  ensureDataDirectory();

  try {
    writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error("Error writing tasks file:", error);
    throw error;
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const taskId = parseInt(params.id);
    const body = await request.json();
    const { username } = body;

    if (!username) {
      return NextResponse.json(
        { success: false, error: "Username is required" },
        { status: 400 }
      );
    }

    const tasks = readTasks();
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) {
      return NextResponse.json(
        { success: false, error: "Task not found" },
        { status: 404 }
      );
    }

    const task = tasks[taskIndex];

    // Check if user owns the task
    if (task.username !== username) {
      return NextResponse.json(
        { success: false, error: "You can only complete your own tasks" },
        { status: 403 }
      );
    }

    // Mark task as completed
    tasks[taskIndex] = {
      ...task,
      status: "done",
      completed: true,
      completedAt: new Date().toISOString(),
    };

    writeTasks(tasks);

    return NextResponse.json({
      success: true,
      data: tasks[taskIndex],
    });
  } catch (error) {
    console.error("Error marking task as done:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
