import { NextRequest, NextResponse } from "next/server";
import { Server as SocketIOServer } from "socket.io";
import { createServer } from "http";
import { ServerToClientEvents, ClientToServerEvents } from "@/types";

// Global variable to store the Socket.io server
let io: SocketIOServer<ClientToServerEvents, ServerToClientEvents> | null =
  null;

export async function GET(request: NextRequest) {
  if (!io) {
    console.log("🔌 Initializing Socket.io server...");

    // Create HTTP server for Socket.io
    const httpServer = createServer();

    io = new SocketIOServer<ClientToServerEvents, ServerToClientEvents>(
      httpServer,
      {
        path: "/api/socket",
        cors: {
          origin: "*",
          methods: ["GET", "POST"],
        },
        addTrailingSlash: false,
      }
    );

    // Socket connection handling
    io.on("connection", (socket) => {
      console.log("✅ Client connected:", socket.id);

      socket.on("disconnect", (reason) => {
        console.log("❌ Client disconnected:", socket.id, "Reason:", reason);
      });
    });

    // Start the server on a different port for Socket.io
    const PORT = parseInt(process.env.SOCKET_PORT || "3001");
    httpServer.listen(PORT, () => {
      console.log(`✅ Socket.io server running on port ${PORT}`);
    });

    console.log("✅ Socket.io server initialized");
  }

  return NextResponse.json({
    success: true,
    message: "Socket.io server initialized",
    socketPath: "/api/socket",
  });
}

// Export the io instance for use in other API routes
export function getSocketIO(): SocketIOServer<
  ClientToServerEvents,
  ServerToClientEvents
> | null {
  return io;
}
