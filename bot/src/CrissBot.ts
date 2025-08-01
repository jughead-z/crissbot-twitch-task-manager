import { Client } from "tmi.js";
import { CommandRegistry } from "./utils/CommandRegistry";
import { ApiService } from "./services/ApiService";
import { StatsManager } from "./utils/StatsManager";
import { ErrorHandler } from "./utils/ErrorHandler";
import { BotConfig, ChatUserstate, CommandContext } from "./types";
import { TaskCommands } from "./commands/TaskCommands";
import { UtilityCommands } from "./commands/UtilityCommands";

export class CrissBot {
  private client: Client;
  private commandRegistry: CommandRegistry;
  private apiService: ApiService;
  private statsManager: StatsManager;
  private config: BotConfig;
  private isConnected: boolean = false;

  constructor(config: BotConfig) {
    this.config = config;
    this.apiService = new ApiService(config.apiBaseUrl);
    this.commandRegistry = new CommandRegistry();
    this.statsManager = new StatsManager();

    // Initialize TMI client
    this.client = new Client({
      options: { debug: false, messagesLogLevel: "info" },
      connection: {
        reconnect: true,
        secure: true,
      },
      identity: {
        username: config.botUsername,
        password: config.oauthToken,
      },
      channels: [config.channelName],
    });

    this.setupEventHandlers();
    this.registerCommands();
  }

  private setupEventHandlers(): void {
    // Connection events
    this.client.on("connected", (addr, port) => {
      this.isConnected = true;
      console.log(`🤖 CrissBot connected to ${addr}:${port}`);
      console.log(`📺 Joined channel: ${this.config.channelName}`);
      console.log(
        `🎮 Bot ready! Available commands: ${this.getAvailableCommands()}`
      );
      console.log(
        `📊 Stats tracking enabled. Uptime: ${this.statsManager.getFormattedUptime()}`
      );
    });

    this.client.on("disconnected", (reason) => {
      this.isConnected = false;
      console.log(`❌ CrissBot disconnected: ${reason}`);
    });

    // Message handling with error protection
    this.client.on("message", async (channel, userstate, message, self) => {
      if (self) return; // Ignore bot's own messages

      const cleanMessage = message.trim();
      if (!cleanMessage.startsWith("!")) return; // Only handle commands

      try {
        await this.handleCommand(channel, userstate, cleanMessage);
      } catch (error) {
        ErrorHandler.logError("Message handling error", error);
        console.error("❌ Error in message handler:", error);
      }
    });

    // Reconnection handling
    this.client.on("reconnect", () => {
      console.log("🔄 CrissBot reconnecting...");
    });

    // Note: Removed problematic TMI.js error event that causes TypeScript issues
    // Error handling is done through try-catch blocks instead
  }

  private registerCommands(): void {
    const sayInChat = (channel: string, message: string) =>
      this.say(channel, message);

    const taskCommands = new TaskCommands(
      this.apiService,
      sayInChat,
      this.statsManager
    );
    const utilityCommands = new UtilityCommands(this.statsManager);

    // Task Management Commands
    this.commandRegistry.register({
      name: "add",
      description: "Add a new task",
      usage: "!add Fix stream audio",
      cooldown: 3,
      execute: taskCommands.addTask.bind(taskCommands),
    });

    this.commandRegistry.register({
      name: "edit",
      description: "Edit your task",
      usage: "!edit 1 Fix microphone audio",
      cooldown: 3,
      execute: taskCommands.editTask.bind(taskCommands),
    });

    this.commandRegistry.register({
      name: "done",
      description: "Mark task as complete",
      usage: "!done 1",
      cooldown: 2,
      execute: taskCommands.markTaskDone.bind(taskCommands),
    });

    this.commandRegistry.register({
      name: "mytasks",
      description: "Show your tasks",
      usage: "!mytasks",
      cooldown: 5,
      execute: taskCommands.showMyTasks.bind(taskCommands),
    });

    this.commandRegistry.register({
      name: "cleardone",
      description: "Clear completed tasks (mods only)",
      usage: "!cleardone",
      cooldown: 10,
      moderatorOnly: true,
      execute: taskCommands.clearCompletedTasks.bind(taskCommands),
    });

    // Utility Commands
    this.commandRegistry.register({
      name: "taskhelp",
      description: "Show task commands help",
      usage: "!taskhelp",
      cooldown: 10,
      execute: utilityCommands.taskHelp.bind(utilityCommands),
    });

    this.commandRegistry.register({
      name: "commands",
      description: "Show all available commands",
      usage: "!commands",
      aliases: ["help"],
      cooldown: 15,
      execute: utilityCommands.showCommands.bind(utilityCommands),
    });

    this.commandRegistry.register({
      name: "ping",
      description: "Check bot status",
      usage: "!ping",
      cooldown: 5,
      execute: utilityCommands.ping.bind(utilityCommands),
    });

    this.commandRegistry.register({
      name: "stats",
      description: "Show bot statistics",
      usage: "!stats",
      cooldown: 10,
      execute: utilityCommands.stats.bind(utilityCommands),
    });

    this.commandRegistry.register({
      name: "version",
      description: "Show bot version",
      usage: "!version",
      cooldown: 30,
      execute: utilityCommands.version.bind(utilityCommands),
    });
  }

  private async handleCommand(
    channel: string,
    userstate: ChatUserstate,
    message: string
  ): Promise<void> {
    let commandName = "unknown"; // Initialize with default value

    try {
      const args = message.slice(1).split(" ");
      commandName = args[0]?.toLowerCase() || "unknown";

      if (!commandName || commandName === "unknown") return;

      const context: CommandContext = {
        channel,
        userstate,
        args: args.slice(1),
        message,
        displayName:
          userstate["display-name"] || userstate.username || "Unknown",
        username: userstate.username || "unknown",
        isModerator: userstate.mod || false,
        isBroadcaster: userstate.badges?.broadcaster === "1" || false,
        replyFn: (text: string) =>
          this.reply(
            channel,
            userstate["display-name"] || userstate.username || "Unknown",
            text
          ),
        sayFn: (text: string) => this.say(channel, text),
      };

      await this.commandRegistry.execute(commandName, context);

      // Track command execution
      this.statsManager.commandExecuted(context.username);
    } catch (error) {
      ErrorHandler.logError(`Command execution: ${commandName}`, error);
      this.reply(
        channel,
        userstate["display-name"] || userstate.username || "Unknown",
        ErrorHandler.getUserFriendlyMessage(error)
      );
    }
  }

  private reply(channel: string, username: string, message: string): void {
    if (!this.isConnected) {
      console.log(`Would reply to @${username}: ${message}`);
      return;
    }
    this.client.say(channel, `@${username} ${message}`);
  }

  private say(channel: string, message: string): void {
    if (!this.isConnected) {
      console.log(`Would say: ${message}`);
      return;
    }
    this.client.say(channel, message);
  }

  private getAvailableCommands(): string {
    const taskCommands = ["!add", "!edit", "!done", "!mytasks", "!cleardone"];
    const helpCommands = ["!taskhelp", "!commands", "!ping", "!stats"];

    return [...taskCommands, ...helpCommands].join(", ");
  }

  public async connect(): Promise<void> {
    try {
      console.log("🤖 Starting CrissBot...");
      console.log(`📺 Connecting to channel: ${this.config.channelName}`);
      console.log(`🔗 API Base URL: ${this.config.apiBaseUrl}`);

      await this.client.connect();
    } catch (error) {
      ErrorHandler.logError("Connection failed", error);
      throw error;
    }
  }

  public async disconnect(): Promise<void> {
    try {
      console.log("👋 Disconnecting CrissBot...");
      await this.client.disconnect();
      this.isConnected = false;
    } catch (error) {
      ErrorHandler.logError("Disconnection error", error);
    }
  }

  public getStatus(): {
    connected: boolean;
    channel: string;
    commandCount: number;
  } {
    return {
      connected: this.isConnected,
      channel: this.config.channelName,
      commandCount: this.commandRegistry.getCommands().length,
    };
  }

  public async healthCheck(): Promise<boolean> {
    try {
      const response = await this.apiService.get("/tasks");
      return response.success;
    } catch (error) {
      ErrorHandler.logError("API health check failed", error);
      return false;
    }
  }
}
