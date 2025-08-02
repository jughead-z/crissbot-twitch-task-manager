// Re-export TMI.js types
export { ChatUserstate } from "tmi.js";

// Bot Configuration
export interface BotConfig {
  botUsername: string;
  oauthToken: string;
  channelName: string;
  apiBaseUrl: string;
}

// Task Types
export interface Task {
  id: number;
  text: string;
  username: string;
  status: "pending" | "done";
  createdAt: string;
  updatedAt: string;
}

// Pomodoro Types
export interface PomodoroSession {
  timeLeft: number;
  isActive: boolean;
  mode: "work" | "shortBreak" | "longBreak";
  session: number;
  initiatedBy: string | null;
  nextBreakType: "short" | "long";
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Command System Types
export interface CommandContext {
  channel: string;
  userstate: import("tmi.js").ChatUserstate;
  args: string[];
  message: string;
  displayName: string;
  username: string;
  isModerator: boolean;
  isBroadcaster: boolean;
  isSubscriber: boolean;
  isVip: boolean;
  replyFn: (text: string) => void;
  sayFn: (text: string) => void;
}

export interface CommandHandler {
  name: string;
  aliases?: string[];
  description: string;
  usage: string;
  examples?: string[];
  cooldown: number;
  permissions: (
    | "everyone"
    | "subscriber"
    | "moderator"
    | "broadcaster"
    | "vip"
  )[];
  category: "tasks" | "pomodoro" | "utility";
  execute: (context: CommandContext) => Promise<void>;
}

export interface Command {
  name: string;
  description: string;
  usage: string;
  aliases?: string[];
  cooldown: number;
  moderatorOnly?: boolean;
  execute: (context: CommandContext) => Promise<void>;
}

// Bot Statistics
export interface BotStats {
  uptime: number;
  commandsExecuted: number;
  tasksCreated: number;
  pomodorosStarted: number;
  activeUsers: Set<string>;
  startTime: number;
}

// Permission levels
export type PermissionLevel =
  | "everyone"
  | "subscriber"
  | "moderator"
  | "broadcaster"
  | "vip";

// Cooldown tracking
export interface CooldownEntry {
  command: string;
  userId: string;
  expiresAt: number;
}

export interface Cooldown {
  userId: string;
  command: string;
  expiresAt: number;
}

// Bot Error Types
export class BotError extends Error {
  constructor(
    message: string,
    public code: string,
    public isUserFacing: boolean = false
  ) {
    super(message);
    this.name = "BotError";
  }
}
