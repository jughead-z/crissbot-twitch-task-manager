import { BotStats } from "../types";

export class StatsManager {
  private stats: BotStats;

  constructor() {
    this.stats = {
      uptime: 0,
      commandsExecuted: 0,
      tasksCreated: 0,
      pomodorosStarted: 0, // Keep for compatibility but won't be used
      activeUsers: new Set(),
      startTime: Date.now(),
    };
  }

  // Stat tracking methods
  commandExecuted(username: string): void {
    this.stats.commandsExecuted++;
    this.stats.activeUsers.add(username.toLowerCase());
  }

  taskCreated(): void {
    this.stats.tasksCreated++;
  }

  getStats(): BotStats {
    this.stats.uptime = Date.now() - this.stats.startTime;
    return { ...this.stats };
  }

  getFormattedUptime(): string {
    const totalMs = Date.now() - this.stats.startTime;
    const days = Math.floor(totalMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (totalMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((totalMs % (1000 * 60 * 60)) / (1000 * 60));

    let uptimeText = "";
    if (days > 0) uptimeText += `${days}d `;
    if (hours > 0) uptimeText += `${hours}h `;
    uptimeText += `${minutes}m`;

    return uptimeText;
  }
}
