import React, { useState, useEffect, useRef } from "react";
import { Task } from "@/types";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  maxVisible?: number;
  autoScrollInterval?: number;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  maxVisible = 2, // Changed to 2 for vertical scrolling
  autoScrollInterval = 3000, // Faster scrolling for vertical
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const pendingTasks = tasks.filter((task) => task.status === "pending");
  const shouldScroll = pendingTasks.length > maxVisible;
  const totalItems = pendingTasks.length;

  // Auto-scroll effect - vertical scrolling
  useEffect(() => {
    if (!shouldScroll) {
      setCurrentIndex(0);
      setIsScrolling(false);
      return;
    }

    setIsScrolling(true);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % totalItems;
        return nextIndex;
      });
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [shouldScroll, totalItems, autoScrollInterval]);

  // Smooth scroll animation
  useEffect(() => {
    if (scrollContainerRef.current && shouldScroll) {
      const container = scrollContainerRef.current;
      const itemHeight = 80; // Approximate height of each task item
      const scrollTop = currentIndex * itemHeight;

      container.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    }
  }, [currentIndex, shouldScroll]);

  if (pendingTasks.length === 0) {
    return (
      <div className="text-center py-8 px-6 bg-gradient-to-r from-purple-500/10 to-purple-600/5 rounded-2xl border-2 border-dashed border-purple-500/30">
        <div className="text-white font-semibold text-lg mb-2">
          No pending tasks
        </div>
        <div className="text-purple-400 text-sm">
          Type{" "}
          <code className="bg-purple-500/20 px-2 py-1 rounded">
            !add [task]
          </code>{" "}
          in chat to add one!
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Scroll indicator */}
      {shouldScroll && (
        <div className="flex justify-between items-center p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
          <span className="text-purple-400 text-sm font-medium">
            Showing {Math.min(maxVisible, pendingTasks.length)} of{" "}
            {pendingTasks.length} tasks
            <span className="text-green-400 ml-2 animate-pulse">
              • Auto-scrolling
            </span>
          </span>

          <div className="flex items-center gap-2">
            <div className="text-xs text-white/60">
              {currentIndex + 1}/{totalItems}
            </div>
            <div className="flex flex-col gap-1">
              {Array.from({ length: Math.min(5, totalItems) }, (_, i) => (
                <div
                  key={i}
                  className={`
                    w-2 h-1 rounded-full transition-all duration-300
                    ${
                      i === currentIndex % Math.min(5, totalItems)
                        ? "bg-purple-500 shadow-lg shadow-purple-500/50"
                        : "bg-purple-500/30"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Task list container */}
      <div
        className={`
        relative transition-all duration-500
        ${shouldScroll ? "overflow-hidden" : ""}
      `}>
        {/* Scrolling container */}
        <div
          ref={scrollContainerRef}
          className={`
            space-y-3 transition-all duration-500
            ${
              shouldScroll
                ? `h-[${maxVisible * 80}px] overflow-hidden relative`
                : "min-h-[160px]"
            }
          `}
          style={{
            height: shouldScroll ? `${maxVisible * 80}px` : "auto",
          }}>
          {/* Scrolling effect overlay */}
          {shouldScroll && isScrolling && (
            <>
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-900/50 to-transparent z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-900/50 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse z-5 pointer-events-none" />
            </>
          )}

          {/* All tasks rendered */}
          <div className="space-y-3">
            {pendingTasks.map((task, index) => (
              <TaskItem
                key={task.id}
                task={task}
                index={index}
                className={`
                  transform transition-all duration-500
                  ${shouldScroll && isScrolling ? "hover:scale-105" : ""}
                `}
              />
            ))}
          </div>
        </div>

        {/* Scroll progress indicator */}
        {shouldScroll && (
          <div className="mt-3">
            <div className="w-full bg-black/20 rounded-full h-1 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500"
                style={{
                  width: `${((currentIndex + 1) / totalItems) * 100}%`,
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Manual scroll controls (optional) */}
      {shouldScroll && (
        <div className="flex justify-center gap-2 mt-3">
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalItems - 1))
            }
            className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 hover:text-purple-300 p-2 rounded-lg transition-all duration-200 border border-purple-500/30"
            title="Previous task">
            ⬆️
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % totalItems)}
            className="bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 hover:text-purple-300 p-2 rounded-lg transition-all duration-200 border border-purple-500/30"
            title="Next task">
            ⬇️
          </button>
        </div>
      )}
    </div>
  );
};
