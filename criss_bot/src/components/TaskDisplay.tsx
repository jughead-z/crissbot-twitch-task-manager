import React, { useState, useEffect } from "react";

interface Task {
  id: number;
  text: string;
  username: string;
  status: "pending" | "done";
  createdAt: string;
  updatedAt: string;
}

export function TaskDisplay() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  // Auto-scroll configuration
  const TASKS_PER_PAGE = 2;
  const AUTO_SCROLL_INTERVAL = 4000; // 4 seconds

  useEffect(() => {
    fetchTasks();

    // Refresh tasks every 10 seconds
    const interval = setInterval(fetchTasks, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Auto-scroll when there are more than TASKS_PER_PAGE tasks
    const pendingTasks = tasks.filter((task) => task.status === "pending");

    if (pendingTasks.length > TASKS_PER_PAGE) {
      const maxPages = Math.ceil(pendingTasks.length / TASKS_PER_PAGE);

      const scrollInterval = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % maxPages);
      }, AUTO_SCROLL_INTERVAL);

      return () => clearInterval(scrollInterval);
    }
  }, [tasks]);

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/tasks");
      const data = await response.json();

      if (data.success) {
        setTasks(data.data || []);
      }
    } catch (error) {
      console.error("Error fetching tasks:", error);
    } finally {
      setLoading(false);
    }
  };

  const pendingTasks = tasks.filter((task) => task.status === "pending");
  const completedTasks = tasks.filter((task) => task.status === "done");
  const totalPages = Math.ceil(pendingTasks.length / TASKS_PER_PAGE);

  // Get current page tasks
  const startIndex = currentPage * TASKS_PER_PAGE;
  const currentTasks = pendingTasks.slice(
    startIndex,
    startIndex + TASKS_PER_PAGE
  );

  if (loading) {
    return (
      <div className="fixed top-4 right-4 w-96 bg-black/90 backdrop-blur-sm border border-purple-500/50 rounded-lg p-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400 mx-auto"></div>
          <p className="text-purple-300 mt-2">Loading tasks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 w-96 bg-black/90 backdrop-blur-sm border border-purple-500/50 rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-bold text-lg flex items-center">
            📋 Stream Tasks
          </h2>
          <div className="text-purple-200 text-sm">
            {pendingTasks.length} pending | {completedTasks.length} done
          </div>
        </div>
      </div>

      {/* Task List */}
      <div className="p-4">
        {pendingTasks.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-gray-400 text-6xl mb-4">📝</div>
            <p className="text-gray-400 text-lg">No pending tasks</p>
            <p className="text-gray-500 text-sm mt-2">
              Add tasks with{" "}
              <code className="bg-gray-800 px-2 py-1 rounded">!add [task]</code>{" "}
              in chat
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {currentTasks.map((task, index) => (
              <div
                key={task.id}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 transition-all duration-300 hover:border-purple-500/50"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: "slideInUp 0.3s ease-out",
                }}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium leading-relaxed">
                      {task.text}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-purple-400 text-xs">
                        by {task.username}
                      </span>
                      <span className="text-gray-500 text-xs">#{task.id}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPage
                    ? "bg-purple-500 w-6"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        )}

        {/* Auto-scroll indicator */}
        {totalPages > 1 && (
          <div className="text-center mt-3">
            <p className="text-gray-500 text-xs">
              Auto-scrolling • Page {currentPage + 1} of {totalPages}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-900/50 px-4 py-3 border-t border-gray-700">
        <p className="text-gray-400 text-xs text-center">
          💬 Commands:{" "}
          <code className="bg-gray-800 px-1 py-0.5 rounded text-purple-300">
            !add
          </code>{" "}
          •
          <code className="bg-gray-800 px-1 py-0.5 rounded text-purple-300 ml-1">
            !done
          </code>{" "}
          •
          <code className="bg-gray-800 px-1 py-0.5 rounded text-purple-300 ml-1">
            !mytasks
          </code>
        </p>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
