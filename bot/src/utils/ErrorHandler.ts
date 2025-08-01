export class ErrorHandler {
  static formatError(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }
    if (typeof error === "string") {
      return error;
    }
    return "Unknown error occurred";
  }

  static logError(context: string, error: unknown): void {
    const timestamp = new Date().toISOString();
    const errorMessage = this.formatError(error);

    console.error(`[${timestamp}] ❌ ${context}: ${errorMessage}`);

    if (error instanceof Error && error.stack) {
      console.error(`Stack trace: ${error.stack}`);
    }
  }

  static getUserFriendlyMessage(error: unknown): string {
    const errorMessage = this.formatError(error);

    // Common error patterns and user-friendly messages
    if (errorMessage.includes("timeout")) {
      return "⏱️ Request timed out. Please try again.";
    }

    if (
      errorMessage.includes("network") ||
      errorMessage.includes("ENOTFOUND")
    ) {
      return "🌐 Network error. Check your connection.";
    }

    if (errorMessage.includes("401") || errorMessage.includes("unauthorized")) {
      return "🔐 Authentication failed. Check bot credentials.";
    }

    if (errorMessage.includes("403") || errorMessage.includes("forbidden")) {
      return "🚫 Permission denied.";
    }

    if (errorMessage.includes("404") || errorMessage.includes("not found")) {
      return "📂 Resource not found.";
    }

    if (
      errorMessage.includes("500") ||
      errorMessage.includes("internal server")
    ) {
      return "🔧 Server error. Please try again later.";
    }

    // Default generic message
    return "❌ Something went wrong. Please try again.";
  }
}
