import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface Task {
  id: number; // Changed to number
  text: string;
  username: string;
  status: "pending" | "done";
  createdAt: string;
  updatedAt: string;
}

const TASKS_FILE = path.join(process.cwd(), "data", "tasks.json");

// Ensure data directory exists
async function ensureDataDirectory() {
  const dataDir = path.dirname(TASKS_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Load tasks from file
async function loadTasks(): Promise<Task[]> {
  try {
    await ensureDataDirectory();
    const data = await fs.readFile(TASKS_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.log("📁 No existing data file, creating with defaults");
    return [];
  }
}

// Save tasks to file
async function saveTasks(tasks: Task[]): Promise<void> {
  await ensureDataDirectory();
  await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

// Generate next numeric ID
function getNextId(tasks: Task[]): number {
  if (tasks.length === 0) return 1;
  const maxId = Math.max(...tasks.map((task) => task.id));
  return maxId + 1;
}

// GET - Get all tasks
export async function GET() {
  try {
    const tasks = await loadTasks();

    return NextResponse.json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    console.error("Error loading tasks:", error);
    return NextResponse.json(
      { success: false, error: "Failed to load tasks" },
      { status: 500 }
    );
  }
}

// POST - Create new task
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, username } = body;

    if (!text || !username) {
      return NextResponse.json(
        { success: false, error: "Text and username are required" },
        { status: 400 }
      );
    }

    if (text.length > 200) {
      return NextResponse.json(
        { success: false, error: "Task text too long (max 200 characters)" },
        { status: 400 }
      );
    }

    const tasks = await loadTasks();
    const newTask: Task = {
      id: getNextId(tasks), // Numeric ID: 1, 2, 3, etc.
      text: text.trim(),
      username: username.toLowerCase(),
      status: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    tasks.push(newTask);
    await saveTasks(tasks);

    console.log(`📝 New task created: #${newTask.id} by ${username}`);

    return NextResponse.json(
      {
        success: true,
        data: newTask,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating task:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create task" },
      { status: 500 }
    );
  }
}
