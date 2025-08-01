import {
  Command,
  CommandContext,
  CommandHandler,
  CooldownEntry,
  PermissionLevel,
} from "../types";

export class CommandRegistry {
  private commands: Map<string, Command> = new Map();
  private aliases: Map<string, string> = new Map();
  private cooldowns: Map<string, number> = new Map();

  register(command: Command): void {
    this.commands.set(command.name, command);

    if (command.aliases) {
      command.aliases.forEach((alias) => {
        this.aliases.set(alias, command.name);
      });
    }
  }

  async execute(commandName: string, context: CommandContext): Promise<void> {
    // Resolve alias to actual command name
    const actualCommandName = this.aliases.get(commandName) || commandName;
    const command = this.commands.get(actualCommandName);

    if (!command) {
      return; // Command not found, silently ignore
    }

    // Check permissions
    if (
      command.moderatorOnly &&
      !context.isModerator &&
      !context.isBroadcaster
    ) {
      context.replyFn("❌ This command requires moderator permissions.");
      return;
    }

    // Check cooldown
    const cooldownKey = `${actualCommandName}:${context.username}`;
    const now = Date.now();
    const cooldownEnd = this.cooldowns.get(cooldownKey) || 0;

    if (now < cooldownEnd) {
      const remainingSeconds = Math.ceil((cooldownEnd - now) / 1000);
      context.replyFn(
        `⏰ Command on cooldown. Try again in ${remainingSeconds}s.`
      );
      return;
    }

    try {
      // Execute command
      await command.execute(context);

      // Set cooldown
      if (command.cooldown > 0) {
        this.cooldowns.set(cooldownKey, now + command.cooldown * 1000);
      }
    } catch (error) {
      console.error(`❌ Error executing command ${actualCommandName}:`, error);
      context.replyFn("❌ Command failed. Please try again.");
    }
  }

  getCommands(): Command[] {
    return Array.from(this.commands.values());
  }

  getCommandsByCategory(category: string): Command[] {
    return Array.from(this.commands.values()).filter(
      (cmd) =>
        cmd.name.includes(category) ||
        cmd.description.toLowerCase().includes(category)
    );
  }

  clearCooldowns(userId?: string): void {
    if (userId) {
      // Clear cooldowns for specific user
      for (const [key] of this.cooldowns) {
        if (key.endsWith(`:${userId}`)) {
          this.cooldowns.delete(key);
        }
      }
    } else {
      // Clear all cooldowns
      this.cooldowns.clear();
    }
  }

  getStats(): { totalCommands: number; totalAliases: number } {
    return {
      totalCommands: this.commands.size,
      totalAliases: this.aliases.size,
    };
  }
}
