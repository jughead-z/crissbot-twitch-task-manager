import * as dotenv from "dotenv";
import { CrissBot } from "./CrissBot";
import { BotConfig } from "./types";

// Load environment variables
dotenv.config();

// Validate required environment variables
function validateEnvironment(): BotConfig {
  const requiredEnvVars = [
    "BOT_USERNAME",
    "BOT_OAUTH_TOKEN",
    "CHANNEL_NAME",
    "API_BASE_URL",
  ];
  const missingVars: string[] = [];

  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      missingVars.push(envVar);
    }
  }

  if (missingVars.length > 0) {
    console.error("❌ Missing required environment variables:");
    missingVars.forEach((envVar) => console.error(`   - ${envVar}`));
    console.error(
      "\n💡 Please check your .env file and ensure all variables are set."
    );
    console.error("📖 See .env.example for reference.");
    process.exit(1);
  }

  // Validate OAuth token format
  const oauthToken = process.env.BOT_OAUTH_TOKEN!;
  if (!oauthToken.startsWith("oauth:")) {
    console.error('❌ BOT_OAUTH_TOKEN must start with "oauth:"');
    console.error("💡 Example: oauth:your_token_here");
    process.exit(1);
  }

  // Validate API URL format
  const apiUrl = process.env.API_BASE_URL!;
  if (!apiUrl.startsWith("http://") && !apiUrl.startsWith("https://")) {
    console.error("❌ API_BASE_URL must be a valid URL");
    console.error("💡 Example: http://localhost:3000/api");
    process.exit(1);
  }

  return {
    botUsername: process.env.BOT_USERNAME!,
    oauthToken: oauthToken,
    channelName: process.env.CHANNEL_NAME!,
    apiBaseUrl: apiUrl,
  };
}

// Main application function
async function main(): Promise<void> {
  try {
    console.log("🚀 Initializing CrissBot...");

    // Validate environment and get config
    const config = validateEnvironment();

    // Create bot instance
    const bot = new CrissBot(config);

    // Test API connection before starting
    console.log("🔍 Testing API connection...");
    const apiHealthy = await bot.healthCheck();

    if (!apiHealthy) {
      console.error("❌ API health check failed!");
      console.error(
        "💡 Make sure your Next.js app is running on the correct URL."
      );
      console.error(`📍 Expected API at: ${config.apiBaseUrl}`);
      process.exit(1);
    }

    console.log("✅ API connection successful!");

    // Connect to Twitch
    await bot.connect();

    // Graceful shutdown handlers
    process.on("SIGINT", async () => {
      console.log("\n🛑 Received SIGINT. Gracefully shutting down...");
      await bot.disconnect();
      process.exit(0);
    });

    process.on("SIGTERM", async () => {
      console.log("\n🛑 Received SIGTERM. Gracefully shutting down...");
      await bot.disconnect();
      process.exit(0);
    });

    // Keep the process alive
    process.on("uncaughtException", (error) => {
      console.error("💥 Uncaught Exception:", error);
      process.exit(1);
    });

    process.on("unhandledRejection", (reason, promise) => {
      console.error("💥 Unhandled Rejection at:", promise, "reason:", reason);
      process.exit(1);
    });
  } catch (error) {
    console.error("💥 Failed to start CrissBot:", error);
    process.exit(1);
  }
}

// Start the bot
main().catch((error) => {
  console.error("💥 Fatal error:", error);
  process.exit(1);
});
