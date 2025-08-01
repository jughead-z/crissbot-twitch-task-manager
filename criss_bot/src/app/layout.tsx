import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/animations.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Criss Bot - Interactive Task & Pomodoro System",
  description:
    "Real-time task management and Pomodoro timer for Twitch streamers",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-black overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
