import { CommandHandler, CommandContext, Cooldown, BotError } from "../types";

export class CommandRegistry {
  private commands = new Map<string, CommandHandler>();
  private aliases = new Map<string, string>();
  private cooldowns = new Map<string, Cooldown>();

  registerCommand(command: CommandHandler): void {
    // Register main command name
    this.commands.set(command.name.toLowerCase(), command);

    // Register aliases
    if (command.aliases) {
      command.aliases.forEach((alias) => {
        this.aliases.set(alias.toLowerCase(), command.name.toLowerCase());
      });
    }

    console.log(
      `📝 Registered command: ${command.name}${
        command.aliases ? ` (aliases: ${command.aliases.join(", ")})` : ""
      }`
    );
  }

  getCommand(name: string): CommandHandler | undefined {
    const commandName = name.toLowerCase();

    // Try direct command lookup
    let command = this.commands.get(commandName);

    // Try alias lookup
    if (!command) {
      const aliasTarget = this.aliases.get(commandName);
      if (aliasTarget) {
        command = this.commands.get(aliasTarget);
      }
    }

    return command;
  }

  getAllCommands(): CommandHandler[] {
    return Array.from(this.commands.values());
  }

  getCommandsByCategory(category: string): CommandHandler[] {
    return this.getAllCommands().filter((cmd) => cmd.category === category);
  }

  async executeCommand(
    commandName: string,
    context: CommandContext
  ): Promise<void> {
    const command = this.getCommand(commandName);

    if (!command) {
      throw new BotError(
        `Command "${commandName}" not found`,
        "COMMAND_NOT_FOUND",
        true
      );
    }

    // Check permissions
    if (!this.hasPermission(command, context)) {
      throw new BotError(
        `You don't have permission to use the ${command.name} command`,
        "INSUFFICIENT_PERMISSIONS",
        true
      );
    }

    // Check cooldown
    if (this.isOnCooldown(command, context)) {
      const remainingTime = this.getRemainingCooldown(command, context);
      throw new BotError(
        `Command is on cooldown. Try again in ${remainingTime} seconds`,
        "COMMAND_COOLDOWN",
        true
      );
    }

    try {
      // Apply cooldown
      this.applyCooldown(command, context);

      // Execute command
      await command.execute(context);

      console.log(
        `✅ Command executed: ${command.name} by ${context.username}`
      );
    } catch (error) {
      console.error(`❌ Command execution failed: ${command.name}`, error);
      throw error;
    }
  }

  private hasPermission(
    command: CommandHandler,
    context: CommandContext
  ): boolean {
    if (!command.permissions || command.permissions.includes("everyone")) {
      return true;
    }

    for (const permission of command.permissions) {
      switch (permission) {
        case "broadcaster":
          if (context.isBroadcaster) return true;
          break;
        case "moderator":
          if (context.isModerator || context.isBroadcaster) return true;
          break;
        case "subscriber":
          if (
            context.isSubscriber ||
            context.isModerator ||
            context.isBroadcaster
          )
            return true;
          break;
        case "vip":
          if (context.isVip || context.isModerator || context.isBroadcaster)
            return true;
          break;
      }
    }

    return false;
  }

  private isOnCooldown(
    command: CommandHandler,
    context: CommandContext
  ): boolean {
    if (!command.cooldown || context.isBroadcaster || context.isModerator) {
      return false;
    }

    const cooldownKey = `${command.name}:${context.username}`;
    const cooldown = this.cooldowns.get(cooldownKey);

    if (!cooldown) {
      return false;
    }

    return Date.now() < cooldown.expiresAt;
  }

  private getRemainingCooldown(
    command: CommandHandler,
    context: CommandContext
  ): number {
    const cooldownKey = `${command.name}:${context.username}`;
    const cooldown = this.cooldowns.get(cooldownKey);

    if (!cooldown) {
      return 0;
    }

    return Math.ceil((cooldown.expiresAt - Date.now()) / 1000);
  }

  private applyCooldown(
    command: CommandHandler,
    context: CommandContext
  ): void {
    if (!command.cooldown || context.isBroadcaster || context.isModerator) {
      return;
    }

    const cooldownKey = `${command.name}:${context.username}`;
    const expiresAt = Date.now() + command.cooldown * 1000;

    this.cooldowns.set(cooldownKey, {
      userId: context.username,
      command: command.name,
      expiresAt,
    });

    // Clean up expired cooldowns periodically
    setTimeout(() => {
      this.cooldowns.delete(cooldownKey);
    }, command.cooldown * 1000);
  }

  // Admin methods
  clearCooldowns(username?: string): void {
    if (username) {
      // Clear cooldowns for specific user
      for (const [key, cooldown] of this.cooldowns.entries()) {
        if (cooldown.userId === username) {
          this.cooldowns.delete(key);
        }
      }
    } else {
      // Clear all cooldowns
      this.cooldowns.clear();
    }
  }

  getStats(): {
    totalCommands: number;
    categoryCounts: Record<string, number>;
  } {
    const commands = this.getAllCommands();
    const categoryCounts: Record<string, number> = {};

    commands.forEach((cmd) => {
      categoryCounts[cmd.category] = (categoryCounts[cmd.category] || 0) + 1;
    });

    return {
      totalCommands: commands.length,
      categoryCounts,
    };
  }
}
