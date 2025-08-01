module.exports = {

"[project]/.next-internal/server/app/api/pomodoro/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/pomodoro/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GET": ()=>GET,
    "POST": ()=>POST,
    "handleTimerComplete": ()=>handleTimerComplete,
    "pomodoroState": ()=>pomodoroState,
    "startPomodoroInterval": ()=>startPomodoroInterval
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// In-memory Pomodoro state (in production, use a database)
let pomodoroState = {
    timeLeft: 1500,
    isActive: false,
    mode: "work",
    session: 1,
    initiatedBy: null,
    nextBreakType: "short",
    startTime: null,
    pausedAt: null,
    totalPausedTime: 0
};
// Timer interval
let pomodoroInterval = null;
// Socket.io instance (if needed for real-time updates)
let io = null;
async function GET() {
    try {
        // If timer is active, calculate current time left based on elapsed time
        if (pomodoroState.isActive && pomodoroState.startTime) {
            const now = Date.now();
            const totalPausedTime = pomodoroState.totalPausedTime + (pomodoroState.pausedAt ? now - pomodoroState.pausedAt : 0);
            const elapsed = Math.floor((now - pomodoroState.startTime - totalPausedTime) / 1000);
            // Get original duration based on mode
            let originalDuration;
            switch(pomodoroState.mode){
                case "work":
                    originalDuration = 25 * 60; // 25 minutes
                    break;
                case "shortBreak":
                    originalDuration = 10 * 60; // 10 minutes
                    break;
                case "longBreak":
                    originalDuration = 15 * 60; // 15 minutes
                    break;
                default:
                    originalDuration = 25 * 60;
            }
            pomodoroState.timeLeft = Math.max(0, originalDuration - elapsed);
            // Check if timer finished
            if (pomodoroState.timeLeft <= 0) {
                await handleTimerComplete();
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: {
                ...pomodoroState,
                timeLeft: Math.max(0, Math.floor(pomodoroState.timeLeft))
            }
        });
    } catch (error) {
        console.error("Error getting Pomodoro status:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Failed to get Pomodoro status"
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        const { username, duration = 25 } = body;
        if (!username) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Username is required"
            }, {
                status: 400
            });
        }
        // Validate duration (1-120 minutes)
        if (duration < 1 || duration > 120) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: "Duration must be between 1-120 minutes"
            }, {
                status: 400
            });
        }
        // Stop existing timer
        if (pomodoroInterval) {
            clearInterval(pomodoroInterval);
        }
        // Set new timer state
        const durationInSeconds = duration * 60;
        pomodoroState = {
            timeLeft: durationInSeconds,
            isActive: true,
            mode: "work",
            session: pomodoroState.session,
            initiatedBy: username,
            nextBreakType: pomodoroState.session % 4 === 0 ? "long" : "short",
            startTime: Date.now(),
            pausedAt: null,
            totalPausedTime: 0
        };
        // Start countdown interval (updates every second)
        startPomodoroInterval();
        // Emit update via Socket.io if available
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        console.log(`🍅 Pomodoro started by ${username}: ${duration} minutes`);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: pomodoroState,
            message: `Pomodoro started for ${duration} minutes`
        });
    } catch (error) {
        console.error("Error starting Pomodoro:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: "Failed to start Pomodoro"
        }, {
            status: 500
        });
    }
}
// Start the countdown interval
function startPomodoroInterval() {
    if (pomodoroInterval) {
        clearInterval(pomodoroInterval);
    }
    pomodoroInterval = setInterval(()=>{
        if (!pomodoroState.isActive || !pomodoroState.startTime) {
            return;
        }
        const now = Date.now();
        const elapsed = Math.floor((now - pomodoroState.startTime - pomodoroState.totalPausedTime) / 1000);
        const originalDuration = pomodoroState.mode === "work" ? 25 * 60 : pomodoroState.mode === "shortBreak" ? 10 * 60 : 15 * 60;
        pomodoroState.timeLeft = Math.max(0, originalDuration - elapsed);
        // Emit real-time update
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Check if timer completed
        if (pomodoroState.timeLeft <= 0) {
            handleTimerComplete();
        }
    }, 1000); // Update every second for accurate display
}
// Handle timer completion
async function handleTimerComplete() {
    if (pomodoroInterval) {
        clearInterval(pomodoroInterval);
        pomodoroInterval = null;
    }
    const wasWorkSession = pomodoroState.mode === "work";
    if (wasWorkSession) {
        // Work session completed, start break
        const isLongBreak = pomodoroState.session % 4 === 0;
        const breakDuration = isLongBreak ? 15 * 60 : 10 * 60; // 15 or 10 minutes in seconds
        pomodoroState = {
            ...pomodoroState,
            timeLeft: breakDuration,
            mode: isLongBreak ? "longBreak" : "shortBreak",
            isActive: true,
            startTime: Date.now(),
            pausedAt: null,
            totalPausedTime: 0
        };
        console.log(`🎉 Work session ${pomodoroState.session} completed! Starting ${isLongBreak ? "long" : "short"} break.`);
        // Start break timer
        startPomodoroInterval();
    } else {
        // Break completed, stop timer (user decides when to start work)
        pomodoroState = {
            ...pomodoroState,
            timeLeft: 25 * 60,
            mode: "work",
            isActive: false,
            session: pomodoroState.session + 1,
            startTime: null,
            pausedAt: null,
            totalPausedTime: 0,
            nextBreakType: (pomodoroState.session + 1) % 4 === 0 ? "long" : "short"
        };
        console.log(`✨ Break completed! Ready for work session ${pomodoroState.session}.`);
    }
    // Emit completion update
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
;
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__7229c8d7._.js.map