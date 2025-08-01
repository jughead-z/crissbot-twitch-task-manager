import fs from "fs/promises";
import path from "path";
import { Task, PomodoroState, StoredData } from "@/types";

const DATA_FILE = path.join(process.cwd(), "data", "criss_bot_data.json");

// Default data structure
const defaultData: StoredData = {
  tasks: [],
  taskCounter: 1,
  pomodoro: {
    isActive: false,
    timeLeft: 25 * 60, // 25 minutes in seconds
    mode: "work",
    session: 1,
    startTime: null,
    initiatedBy: null,
    autoBreaks: true,
  },
};

// Ensure data directory exists
async function ensureDataDirectory(): Promise<void> {
  const dataDir = path.dirname(DATA_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Load data from file
export async function loadData(): Promise<StoredData> {
  try {
    await ensureDataDirectory();
    const fileContent = await fs.readFile(DATA_FILE, "utf-8");
    const data = JSON.parse(fileContent) as StoredData;

    // Merge with defaults to handle missing properties
    return {
      ...defaultData,
      ...data,
      pomodoro: {
        ...defaultData.pomodoro,
        ...data.pomodoro,
      },
    };
  } catch (error) {
    console.log("📁 No existing data file, creating with defaults");
    await saveData(defaultData);
    return defaultData;
  }
}

// Save data to file
export async function saveData(data: StoredData): Promise<void> {
  try {
    await ensureDataDirectory();
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("❌ Error saving data:", error);
    throw new Error("Failed to save data");
  }
}

// Task-specific operations
export async function getAllTasks(): Promise<Task[]> {
  const data = await loadData();
  return data.tasks;
}

export async function addTask(task: Omit<Task, "id">): Promise<Task> {
  const data = await loadData();
  const newTask: Task = {
    ...task,
    id: `task_${data.taskCounter}`,
  };

  data.tasks.push(newTask);
  data.taskCounter += 1;

  await saveData(data);
  return newTask;
}

export async function updateTask(
  id: string,
  updates: Partial<Task>
): Promise<Task | null> {
  const data = await loadData();
  const taskIndex = data.tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return null;
  }

  data.tasks[taskIndex] = {
    ...data.tasks[taskIndex],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  await saveData(data);
  return data.tasks[taskIndex];
}

export async function deleteTask(id: string): Promise<Task | null> {
  const data = await loadData();
  const taskIndex = data.tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return null;
  }

  const deletedTask = data.tasks.splice(taskIndex, 1)[0];
  await saveData(data);
  return deletedTask;
}

export async function clearCompletedTasks(): Promise<Task[]> {
  const data = await loadData();
  const completedTasks = data.tasks.filter((task) => task.status === "done");
  data.tasks = data.tasks.filter((task) => task.status !== "done");

  await saveData(data);
  return completedTasks;
}

// Pomodoro-specific operations
export async function getPomodoroState(): Promise<PomodoroState> {
  const data = await loadData();
  return data.pomodoro;
}

export async function updatePomodoroState(
  updates: Partial<PomodoroState>
): Promise<PomodoroState> {
  const data = await loadData();
  data.pomodoro = {
    ...data.pomodoro,
    ...updates,
  };

  await saveData(data);
  return data.pomodoro;
}
