"use client";

import { useEffect, useState } from "react";
import { TaskDisplay } from "@/components/TaskDisplay";

// Fixed particles to avoid hydration mismatch
const FIXED_PARTICLES = [
  { left: "15%", top: "20%", delay: "0s", duration: "4s" },
  { left: "85%", top: "60%", delay: "1s", duration: "3.5s" },
  { left: "45%", top: "10%", delay: "2s", duration: "4.5s" },
  { left: "75%", top: "80%", delay: "0.5s", duration: "3s" },
  { left: "25%", top: "70%", delay: "1.5s", duration: "4s" },
  { left: "65%", top: "30%", delay: "2.5s", duration: "3.8s" },
  { left: "35%", top: "50%", delay: "0.8s", duration: "4.2s" },
  { left: "10%", top: "90%", delay: "1.8s", duration: "3.3s" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a simple loading state to avoid hydration mismatch
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />

        <div className="relative z-10 p-8 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400 mx-auto"></div>
            <p className="text-purple-300 mt-4">Loading CrissBot...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]" />

      {/* Floating particles with fixed positions */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {FIXED_PARTICLES.map((particle, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 p-8">
        <TaskDisplay />
      </div>

      {/* Additional floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      />
    </main>
  );
}
