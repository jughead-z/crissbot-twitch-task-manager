import { Server as SocketIOServer } from "socket.io";
import { createServer } from "http";
import { ServerToClientEvents, ClientToServerEvents } from "@/types";

// Global Socket.io instance
let io: SocketIOServer<ClientToServerEvents, ServerToClientEvents> | null =
  null;

export function initializeSocketIO(): SocketIOServer<
  ClientToServerEvents,
  ServerToClientEvents
> {
  if (!io) {
    console.log("🔌 Initializing Socket.io server...");

    const httpServer = createServer();

    io = new SocketIOServer<ClientToServerEvents, ServerToClientEvents>(
      httpServer,
      {
        cors: {
          origin: "*",
          methods: ["GET", "POST"],
        },
        path: "/socket.io",
      }
    );

    // Socket connection handling
    io.on("connection", (socket) => {
      console.log("✅ Client connected:", socket.id);

      socket.on("disconnect", (reason) => {
        console.log("❌ Client disconnected:", socket.id, "Reason:", reason);
      });

      // Handle ping for connection testing
      socket.on("ping", () => {
        socket.emit("tasksLoaded", []); // Example response
      });
    });

    // Start server on port 3001
    const PORT = parseInt(process.env.SOCKET_PORT || "3001");
    httpServer.listen(PORT, () => {
      console.log(`✅ Socket.io server running on port ${PORT}`);
    });

    console.log("✅ Socket.io server initialized");
  }

  return io;
}

export function getSocketIO(): SocketIOServer<
  ClientToServerEvents,
  ServerToClientEvents
> | null {
  return io;
}

// Initialize on module load (server-side only)
if (typeof window === "undefined") {
  // Only run on server side
  initializeSocketIO();
}
