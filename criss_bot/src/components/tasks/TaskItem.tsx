import React from "react";
import { Task } from "@/types";

interface TaskItemProps {
  task: Task;
  index?: number;
  className?: string;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  index = 0,
  className = "",
}) => {
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const isPending = task.status === "pending";
  const isCompleted = task.status === "done";

  return (
    <div
      className={`
        flex justify-between items-center p-4 rounded-2xl transition-all duration-500 ease-out
        border-2 animate-fade-in-up
        ${
          isPending
            ? "bg-gradient-to-r from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:border-purple-400/50"
            : "bg-gradient-to-r from-green-500/20 to-green-600/10 border-green-500/30 hover:border-green-400/50 opacity-80"
        }
        hover:transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg
        ${className}
      `}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}>
      <div className="flex-1 min-w-0">
        <div
          className={`
          font-semibold mb-2 text-white leading-tight
          ${isCompleted ? "line-through opacity-80" : ""}
        `}>
          {task.text}
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <span
            className="
            text-purple-400 font-bold text-sm bg-purple-500/10 px-2 py-1 rounded-lg
            border border-purple-500/20
          ">
            @{task.username}
          </span>

          <span
            className="
            text-white/60 text-xs bg-white/5 px-2 py-1 rounded-md
            border border-white/10
          ">
            #{task.id.replace("task_", "")}
          </span>

          <span className="text-white/50 text-xs">
            {formatTime(task.createdAt)}
          </span>
        </div>
      </div>

      <div className="ml-4 flex-shrink-0">
        <div
          className={`
          w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold
          border-2 border-white/20
          ${
            isPending
              ? "bg-gradient-to-r from-purple-500 to-purple-600 animate-pulse shadow-purple-500/50 shadow-lg"
              : "bg-gradient-to-r from-green-500 to-green-600 shadow-green-500/50 shadow-lg"
          }
        `}>
          {isCompleted && <span className="text-white text-[10px]">✓</span>}
        </div>
      </div>
    </div>
  );
};
