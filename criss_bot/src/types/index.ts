// Task Management Types
export interface Task {
  id: string;
  text: string;
  username: string;
  status: "pending" | "done";
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskRequest {
  text: string;
  username: string;
}

export interface UpdateTaskRequest {
  text?: string;
  username: string;
}

export interface TaskApiResponse {
  success: boolean;
  data?: Task | Task[];
  message?: string;
  error?: string;
}

// Pomodoro Types
export interface PomodoroState {
  isActive: boolean;
  timeLeft: number; // seconds
  mode: "work" | "break";
  session: number;
  startTime: number | null;
  initiatedBy: string | null;
  autoBreaks: boolean;
}

export interface PomodoroStartRequest {
  username: string;
  duration?: number; // minutes
}

export interface PomodoroControlRequest {
  username: string;
}

export interface PomodoroApiResponse {
  success: boolean;
  data?: PomodoroState;
  message?: string;
  error?: string;
}

// Socket.io Event Types - FIXED
export interface ServerToClientEvents {
  // Task events
  tasksLoaded: (tasks: Task[]) => void;
  taskAdded: (task: Task) => void;
  taskUpdated: (task: Task) => void;
  taskCompleted: (task: Task) => void;
  taskDeleted: (task: Task) => void;
  completedTasksCleared: (clearedTasks: Task[]) => void;

  // Pomodoro events
  pomodoroStateLoaded: (state: PomodoroState) => void;
  pomodoroStarted: (state: PomodoroState) => void;
  pomodoroPaused: (state: PomodoroState) => void;
  pomodoroResumed: (state: PomodoroState) => void;
  pomodoroReset: (state: PomodoroState) => void;
  pomodoroTick: (state: PomodoroState) => void;
  pomodoroWorkCompleted: (data: {
    message: string;
    pomodoro: PomodoroState;
    breakType: "short" | "long";
  }) => void;
  pomodoroBreakCompleted: (data: {
    message: string;
    pomodoro: PomodoroState;
  }) => void;
}

// Client to server events (currently none, but keeping for future use)
export interface ClientToServerEvents {
  // Future client events can be added here
  ping: () => void;
}

// Component Props Types
export interface TaskItemProps {
  task: Task;
  className?: string;
}

export interface TaskListProps {
  tasks: Task[];
  currentIndex?: number;
  isScrolling?: boolean;
}

export interface PomodoroTimerProps {
  state: PomodoroState;
  onStart?: () => void;
  onPause?: () => void;
  onReset?: () => void;
}

// Utility Types
export interface ApiError {
  message: string;
  status: number;
}

export interface AppConfig {
  api: {
    baseUrl: string;
  };
  pomodoro: {
    workDuration: number; // minutes
    shortBreakDuration: number; // minutes
    longBreakDuration: number; // minutes
    longBreakInterval: number; // every X sessions
  };
  tasks: {
    maxVisibleTasks: number;
    autoScrollInterval: number; // milliseconds
  };
}

// Storage Types
export interface StoredData {
  tasks: Task[];
  taskCounter: number;
  pomodoro: PomodoroState;
}

// Bot Communication Types (for future bot integration)
export interface BotCommand {
  command: string;
  args: string[];
  username: string;
  userRoles: string[];
  timestamp: number;
}

export interface BotResponse {
  message: string;
  success: boolean;
}
