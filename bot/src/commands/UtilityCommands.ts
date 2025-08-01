import { CommandContext } from "../types";
import { StatsManager } from "../utils/StatsManager";

export class UtilityCommands {
  constructor(private statsManager?: StatsManager) {}

  async showCommands(context: CommandContext): Promise<void> {
    const helpMessage =
      "🤖 Criss Bot Commands: !add [task] | !done [id] | !mytasks | !pomodoro [min] | !pstatus | !pause | !resume | !reset | !taskhelp | !pomohelp | !ping";
    context.replyFn(helpMessage);
  }

  async taskHelp(context: CommandContext): Promise<void> {
    const helpMessage =
      "📋 Task Commands: !add [task] (create) | !edit [id] [text] (modify) | !done [id] (complete) | !mytasks (list yours) | !cleardone (clear completed - mods only)";
    context.replyFn(helpMessage);
  }

  async pomodoroHelp(context: CommandContext): Promise<void> {
    const helpMessage =
      "🍅 Pomodoro Commands: !pomodoro [min] (start timer) | !pause (pause) | !resume (continue) | !reset (reset to 25:00) | !pstatus (check time) | Work 25min → Break 10min → repeat!";
    context.replyFn(helpMessage);
  }

  async ping(context: CommandContext): Promise<void> {
    const responses = [
      "🏓 Pong! Bot is online and ready! ✅",
      "🤖 Beep boop! All systems operational! 🚀",
      "💜 CrissBot is alive and kicking! 💪",
      "⚡ Lightning fast response! Bot is healthy! ⚡",
    ];

    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    context.replyFn(randomResponse);
  }

  async stats(context: CommandContext): Promise<void> {
    if (!this.statsManager) {
      context.replyFn("📊 Stats not available.");
      return;
    }

    const stats = this.statsManager.getStats();
    const uptime = this.statsManager.getFormattedUptime();

    const message = `📊 Bot Stats: ⏱️ ${uptime} uptime | 🎮 ${stats.commandsExecuted} commands | 📝 ${stats.tasksCreated} tasks | 👥 ${stats.activeUsers.size} users`;
    context.replyFn(message);
  }

  async version(context: CommandContext): Promise<void> {
    context.replyFn(
      "🤖 CrissBot v2.0.0 - TypeScript Task & Pomodoro System | Built with ❤️ | Next.js + Twitch Integration | Made for productivity! 🚀"
    );
  }
}
