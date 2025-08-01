module.exports = {

"[project]/.next-internal/server/app/api/pomodoro/control/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

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
"[externals]/fs/promises [external] (fs/promises, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/src/lib/storage.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "addTask": ()=>addTask,
    "clearCompletedTasks": ()=>clearCompletedTasks,
    "deleteTask": ()=>deleteTask,
    "getAllTasks": ()=>getAllTasks,
    "getPomodoroState": ()=>getPomodoroState,
    "loadData": ()=>loadData,
    "saveData": ()=>saveData,
    "updatePomodoroState": ()=>updatePomodoroState,
    "updateTask": ()=>updateTask
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const DATA_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "data", "criss_bot_data.json");
// Default data structure
const defaultData = {
    tasks: [],
    taskCounter: 1,
    pomodoro: {
        isActive: false,
        timeLeft: 25 * 60,
        mode: "work",
        session: 1,
        startTime: null,
        initiatedBy: null,
        autoBreaks: true
    }
};
// Ensure data directory exists
async function ensureDataDirectory() {
    const dataDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(DATA_FILE);
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].access(dataDir);
    } catch  {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(dataDir, {
            recursive: true
        });
    }
}
async function loadData() {
    try {
        await ensureDataDirectory();
        const fileContent = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(DATA_FILE, "utf-8");
        const data = JSON.parse(fileContent);
        // Merge with defaults to handle missing properties
        return {
            ...defaultData,
            ...data,
            pomodoro: {
                ...defaultData.pomodoro,
                ...data.pomodoro
            }
        };
    } catch (error) {
        console.log("📁 No existing data file, creating with defaults");
        await saveData(defaultData);
        return defaultData;
    }
}
async function saveData(data) {
    try {
        await ensureDataDirectory();
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
    } catch (error) {
        console.error("❌ Error saving data:", error);
        throw new Error("Failed to save data");
    }
}
async function getAllTasks() {
    const data = await loadData();
    return data.tasks;
}
async function addTask(task) {
    const data = await loadData();
    const newTask = {
        ...task,
        id: `task_${data.taskCounter}`
    };
    data.tasks.push(newTask);
    data.taskCounter += 1;
    await saveData(data);
    return newTask;
}
async function updateTask(id, updates) {
    const data = await loadData();
    const taskIndex = data.tasks.findIndex((task)=>task.id === id);
    if (taskIndex === -1) {
        return null;
    }
    data.tasks[taskIndex] = {
        ...data.tasks[taskIndex],
        ...updates,
        updatedAt: new Date().toISOString()
    };
    await saveData(data);
    return data.tasks[taskIndex];
}
async function deleteTask(id) {
    const data = await loadData();
    const taskIndex = data.tasks.findIndex((task)=>task.id === id);
    if (taskIndex === -1) {
        return null;
    }
    const deletedTask = data.tasks.splice(taskIndex, 1)[0];
    await saveData(data);
    return deletedTask;
}
async function clearCompletedTasks() {
    const data = await loadData();
    const completedTasks = data.tasks.filter((task)=>task.status === "done");
    data.tasks = data.tasks.filter((task)=>task.status !== "done");
    await saveData(data);
    return completedTasks;
}
async function getPomodoroState() {
    const data = await loadData();
    return data.pomodoro;
}
async function updatePomodoroState(updates) {
    const data = await loadData();
    data.pomodoro = {
        ...data.pomodoro,
        ...updates
    };
    await saveData(data);
    return data.pomodoro;
}
}),
"[externals]/http [external] (http, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/querystring [external] (querystring, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/timers [external] (timers, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("timers", () => require("timers"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[project]/src/lib/socket.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getSocketIO": ()=>getSocketIO,
    "initializeSocketIO": ()=>initializeSocketIO
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2f$wrapper$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/socket.io/wrapper.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/http [external] (http, cjs)");
;
;
// Global Socket.io instance
let io = null;
function initializeSocketIO() {
    if (!io) {
        console.log("🔌 Initializing Socket.io server...");
        const httpServer = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$http__$5b$external$5d$__$28$http$2c$__cjs$29$__["createServer"])();
        io = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2f$wrapper$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Server"](httpServer, {
            cors: {
                origin: "*",
                methods: [
                    "GET",
                    "POST"
                ]
            },
            path: "/socket.io"
        });
        // Socket connection handling
        io.on("connection", (socket)=>{
            console.log("✅ Client connected:", socket.id);
            socket.on("disconnect", (reason)=>{
                console.log("❌ Client disconnected:", socket.id, "Reason:", reason);
            });
            // Handle ping for connection testing
            socket.on("ping", ()=>{
                socket.emit("tasksLoaded", []); // Example response
            });
        });
        // Start server on port 3001
        const PORT = parseInt(process.env.SOCKET_PORT || "3001");
        httpServer.listen(PORT, ()=>{
            console.log(`✅ Socket.io server running on port ${PORT}`);
        });
        console.log("✅ Socket.io server initialized");
    }
    return io;
}
function getSocketIO() {
    return io;
}
// Initialize on module load (server-side only)
if ("TURBOPACK compile-time truthy", 1) {
    // Only run on server side
    initializeSocketIO();
}
}),
"[project]/src/app/api/pomodoro/control/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/storage.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/socket.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { username, action } = body;
        if (!username) {
            const response = {
                success: false,
                error: "Username is required"
            };
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response, {
                status: 400
            });
        }
        if (!action || ![
            "pause",
            "resume",
            "reset"
        ].includes(action)) {
            const response = {
                success: false,
                error: "Valid action is required (pause, resume, reset)"
            };
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response, {
                status: 400
            });
        }
        const currentState = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getPomodoroState"])();
        const io = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$socket$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSocketIO"])();
        let newState;
        let message;
        switch(action){
            case "pause":
                if (!currentState.isActive) {
                    const response = {
                        success: false,
                        error: "No active Pomodoro to pause"
                    };
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response, {
                        status: 400
                    });
                }
                newState = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updatePomodoroState"])({
                    isActive: false,
                    startTime: null
                });
                if (io) io.emit("pomodoroPaused", newState);
                message = "Pomodoro paused";
                break;
            case "resume":
                if (currentState.isActive) {
                    const response = {
                        success: false,
                        error: "Pomodoro is already active"
                    };
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response, {
                        status: 400
                    });
                }
                if (currentState.timeLeft <= 0) {
                    const response = {
                        success: false,
                        error: "No paused Pomodoro to resume"
                    };
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response, {
                        status: 400
                    });
                }
                newState = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updatePomodoroState"])({
                    isActive: true,
                    startTime: Date.now()
                });
                if (io) io.emit("pomodoroResumed", newState);
                message = "Pomodoro resumed";
                break;
            case "reset":
                newState = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updatePomodoroState"])({
                    isActive: false,
                    timeLeft: 25 * 60,
                    mode: "work",
                    startTime: null,
                    initiatedBy: username.toLowerCase()
                });
                if (io) io.emit("pomodoroReset", newState);
                message = "Pomodoro reset to 25:00";
                break;
            default:
                const response = {
                    success: false,
                    error: "Invalid action"
                };
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response, {
                    status: 400
                });
        }
        const response1 = {
            success: true,
            data: newState,
            message
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response1);
    } catch (error) {
        console.error("❌ Pomodoro control error:", error);
        const response = {
            success: false,
            error: "Failed to control Pomodoro"
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response, {
            status: 500
        });
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__0550b846._.js.map