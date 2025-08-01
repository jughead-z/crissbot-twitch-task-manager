(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/tasks/TaskItem.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TaskItem": ()=>TaskItem
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const TaskItem = (param)=>{
    let { task, index = 0, className = "" } = param;
    const formatTime = (timestamp)=>{
        const date = new Date(timestamp);
        return date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit"
        });
    };
    const isPending = task.status === "pending";
    const isCompleted = task.status === "done";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "\n        flex justify-between items-center p-4 rounded-2xl transition-all duration-500 ease-out\n        border-2 animate-fade-in-up\n        ".concat(isPending ? "bg-gradient-to-r from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:border-purple-400/50" : "bg-gradient-to-r from-green-500/20 to-green-600/10 border-green-500/30 hover:border-green-400/50 opacity-80", "\n        hover:transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg\n        ").concat(className, "\n      "),
        style: {
            animationDelay: "".concat(index * 0.1, "s")
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\n          font-semibold mb-2 text-white leading-tight\n          ".concat(isCompleted ? "line-through opacity-80" : "", "\n        "),
                        children: task.text
                    }, void 0, false, {
                        fileName: "[project]/src/components/tasks/TaskItem.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "   text-purple-400 font-bold text-sm bg-purple-500/10 px-2 py-1 rounded-lg   border border-purple-500/20   ",
                                children: [
                                    "@",
                                    task.username
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tasks/TaskItem.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "   text-white/60 text-xs bg-white/5 px-2 py-1 rounded-md   border border-white/10   ",
                                children: [
                                    "#",
                                    task.id.replace("task_", "")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tasks/TaskItem.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/50 text-xs",
                                children: formatTime(task.createdAt)
                            }, void 0, false, {
                                fileName: "[project]/src/components/tasks/TaskItem.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tasks/TaskItem.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tasks/TaskItem.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-4 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\n          w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold\n          border-2 border-white/20\n          ".concat(isPending ? "bg-gradient-to-r from-purple-500 to-purple-600 animate-pulse shadow-purple-500/50 shadow-lg" : "bg-gradient-to-r from-green-500 to-green-600 shadow-green-500/50 shadow-lg", "\n        "),
                    children: isCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-[10px]",
                        children: "✓"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tasks/TaskItem.tsx",
                        lineNumber: 85,
                        columnNumber: 27
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/tasks/TaskItem.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/tasks/TaskItem.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tasks/TaskItem.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TaskItem;
var _c;
__turbopack_context__.k.register(_c, "TaskItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/tasks/TaskList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TaskList": ()=>TaskList
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tasks$2f$TaskItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tasks/TaskItem.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const TaskList = (param)=>{
    let { tasks, maxVisible = 2, autoScrollInterval = 3000 } = param;
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isScrolling, setIsScrolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingTasks = tasks.filter((task)=>task.status === "pending");
    const shouldScroll = pendingTasks.length > maxVisible;
    const totalItems = pendingTasks.length;
    // Auto-scroll effect - vertical scrolling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskList.useEffect": ()=>{
            if (!shouldScroll) {
                setCurrentIndex(0);
                setIsScrolling(false);
                return;
            }
            setIsScrolling(true);
            const interval = setInterval({
                "TaskList.useEffect.interval": ()=>{
                    setCurrentIndex({
                        "TaskList.useEffect.interval": (prev)=>{
                            const nextIndex = (prev + 1) % totalItems;
                            return nextIndex;
                        }
                    }["TaskList.useEffect.interval"]);
                }
            }["TaskList.useEffect.interval"], autoScrollInterval);
            return ({
                "TaskList.useEffect": ()=>clearInterval(interval)
            })["TaskList.useEffect"];
        }
    }["TaskList.useEffect"], [
        shouldScroll,
        totalItems,
        autoScrollInterval
    ]);
    // Smooth scroll animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskList.useEffect": ()=>{
            if (scrollContainerRef.current && shouldScroll) {
                const container = scrollContainerRef.current;
                const itemHeight = 80; // Approximate height of each task item
                const scrollTop = currentIndex * itemHeight;
                container.scrollTo({
                    top: scrollTop,
                    behavior: "smooth"
                });
            }
        }
    }["TaskList.useEffect"], [
        currentIndex,
        shouldScroll
    ]);
    if (pendingTasks.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-8 px-6 bg-gradient-to-r from-purple-500/10 to-purple-600/5 rounded-2xl border-2 border-dashed border-purple-500/30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-white font-semibold text-lg mb-2",
                    children: "No pending tasks"
                }, void 0, false, {
                    fileName: "[project]/src/components/tasks/TaskList.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-purple-400 text-sm",
                    children: [
                        "Type",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                            className: "bg-purple-500/20 px-2 py-1 rounded",
                            children: "!add [task]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/tasks/TaskList.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        " ",
                        "in chat to add one!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/tasks/TaskList.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tasks/TaskList.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            shouldScroll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center p-3 bg-purple-500/10 rounded-xl border border-purple-500/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-purple-400 text-sm font-medium",
                        children: [
                            "Showing ",
                            Math.min(maxVisible, pendingTasks.length),
                            " of",
                            " ",
                            pendingTasks.length,
                            " tasks",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-400 ml-2 animate-pulse",
                                children: "• Auto-scrolling"
                            }, void 0, false, {
                                fileName: "[project]/src/components/tasks/TaskList.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tasks/TaskList.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-white/60",
                                children: [
                                    currentIndex + 1,
                                    "/",
                                    totalItems
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/tasks/TaskList.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1",
                                children: Array.from({
                                    length: Math.min(5, totalItems)
                                }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "\n                    w-2 h-1 rounded-full transition-all duration-300\n                    ".concat(i === currentIndex % Math.min(5, totalItems) ? "bg-purple-500 shadow-lg shadow-purple-500/50" : "bg-purple-500/30", "\n                  ")
                                    }, i, false, {
                                        fileName: "[project]/src/components/tasks/TaskList.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/tasks/TaskList.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tasks/TaskList.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tasks/TaskList.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\n        relative transition-all duration-500\n        ".concat(shouldScroll ? "overflow-hidden" : "", "\n      "),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: scrollContainerRef,
                        className: "\n            space-y-3 transition-all duration-500\n            ".concat(shouldScroll ? "h-[".concat(maxVisible * 80, "px] overflow-hidden relative") : "min-h-[160px]", "\n          "),
                        style: {
                            height: shouldScroll ? "".concat(maxVisible * 80, "px") : "auto"
                        },
                        children: [
                            shouldScroll && isScrolling && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-900/50 to-transparent z-10 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tasks/TaskList.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-900/50 to-transparent z-10 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tasks/TaskList.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse z-5 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tasks/TaskList.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: pendingTasks.map((task, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tasks$2f$TaskItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskItem"], {
                                        task: task,
                                        index: index,
                                        className: "\n                  transform transition-all duration-500\n                  ".concat(shouldScroll && isScrolling ? "hover:scale-105" : "", "\n                ")
                                    }, task.id, false, {
                                        fileName: "[project]/src/components/tasks/TaskList.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/tasks/TaskList.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/tasks/TaskList.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    shouldScroll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-black/20 rounded-full h-1 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500",
                                style: {
                                    width: "".concat((currentIndex + 1) / totalItems * 100, "%")
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/tasks/TaskList.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/tasks/TaskList.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/tasks/TaskList.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tasks/TaskList.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            shouldScroll && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center gap-2 mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentIndex((prev)=>prev > 0 ? prev - 1 : totalItems - 1),
                        className: "bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 hover:text-purple-300 p-2 rounded-lg transition-all duration-200 border border-purple-500/30",
                        title: "Previous task",
                        children: "⬆️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tasks/TaskList.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCurrentIndex((prev)=>(prev + 1) % totalItems),
                        className: "bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 hover:text-purple-300 p-2 rounded-lg transition-all duration-200 border border-purple-500/30",
                        title: "Next task",
                        children: "⬇️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tasks/TaskList.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tasks/TaskList.tsx",
                lineNumber: 173,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tasks/TaskList.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TaskList, "eVRmHbHZLcB9rrwXkUYpTqFGfLI=");
_c = TaskList;
var _c;
__turbopack_context__.k.register(_c, "TaskList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/pomodoro/PomodoroTimer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PomodoroTimer": ()=>PomodoroTimer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function PomodoroTimer(param) {
    let { className } = param;
    _s();
    const [pomodoroData, setPomodoroData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        timeLeft: 1500,
        isActive: false,
        mode: "work",
        session: 1,
        initiatedBy: null,
        nextBreakType: "short"
    });
    const [socket, setSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PomodoroTimer.useEffect": ()=>{
            // Initialize socket connection
            const newSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])("http://localhost:3001");
            setSocket(newSocket);
            // Listen for Pomodoro updates
            newSocket.on("pomodoroUpdate", {
                "PomodoroTimer.useEffect": (data)=>{
                    setPomodoroData(data);
                }
            }["PomodoroTimer.useEffect"]);
            // Fetch initial data
            fetchPomodoroStatus();
            // Set up interval to fetch status every second for real-time updates
            const interval = setInterval({
                "PomodoroTimer.useEffect.interval": ()=>{
                    fetchPomodoroStatus();
                }
            }["PomodoroTimer.useEffect.interval"], 1000);
            return ({
                "PomodoroTimer.useEffect": ()=>{
                    newSocket.close();
                    clearInterval(interval);
                }
            })["PomodoroTimer.useEffect"];
        }
    }["PomodoroTimer.useEffect"], []);
    const fetchPomodoroStatus = async ()=>{
        try {
            const response = await fetch("/api/pomodoro");
            const data = await response.json();
            if (data.success) {
                setPomodoroData(data.data);
            }
        } catch (error) {
            console.error("Error fetching Pomodoro status:", error);
        }
    };
    const handleAction = async (action)=>{
        try {
            if (action === "start") {
                const response = await fetch("/api/pomodoro", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: "overlay-user",
                        duration: 25
                    })
                });
                const data = await response.json();
                if (data.success) {
                    setPomodoroData(data.data);
                }
            } else {
                const response = await fetch("/api/pomodoro/control", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: "overlay-user",
                        action
                    })
                });
                const data = await response.json();
                if (data.success) {
                    setPomodoroData(data.data);
                }
            }
        } catch (error) {
            console.error("Error ".concat(action, " Pomodoro:"), error);
        }
    };
    // Format time as MM:SS with seconds
    const formatTime = (totalSeconds)=>{
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return "".concat(minutes, ":").concat(seconds.toString().padStart(2, "0"));
    };
    // Get progress percentage
    const getProgress = ()=>{
        const totalTime = pomodoroData.mode === "work" ? 25 * 60 // 25 minutes
         : pomodoroData.mode === "shortBreak" ? 10 * 60 // 10 minutes
         : 15 * 60; // 15 minutes for long break
        return (totalTime - pomodoroData.timeLeft) / totalTime * 100;
    };
    // Get theme colors based on mode
    const getThemeColors = ()=>{
        switch(pomodoroData.mode){
            case "work":
                return {
                    primary: "#8a2be2",
                    background: "rgba(138, 43, 226, 0.1)",
                    text: "#8a2be2",
                    emoji: "🍅"
                };
            case "shortBreak":
                return {
                    primary: "#00ff88",
                    background: "rgba(0, 255, 136, 0.1)",
                    text: "#00ff88",
                    emoji: "☕"
                };
            case "longBreak":
                return {
                    primary: "#ff6b35",
                    background: "rgba(255, 107, 53, 0.1)",
                    text: "#ff6b35",
                    emoji: "🛋️"
                };
            default:
                return {
                    primary: "#8a2be2",
                    background: "rgba(138, 43, 226, 0.1)",
                    text: "#8a2be2",
                    emoji: "🍅"
                };
        }
    };
    const theme = getThemeColors();
    const progress = getProgress();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-41c502332e53a105" + " " + "pomodoro-timer ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: theme.background,
                    border: "2px solid ".concat(theme.primary),
                    borderRadius: "15px",
                    padding: "20px",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden"
                },
                className: "jsx-41c502332e53a105" + " " + "pomodoro-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "linear-gradient(45deg, ".concat(theme.primary, "20, transparent, ").concat(theme.primary, "20)"),
                            animation: "pulse 2s ease-in-out infinite",
                            borderRadius: "13px"
                        },
                        className: "jsx-41c502332e53a105" + " " + "pomodoro-glow"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pomodoro/PomodoroTimer.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            zIndex: 2
                        },
                        className: "jsx-41c502332e53a105",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: theme.text,
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    marginBottom: "10px"
                                },
                                className: "jsx-41c502332e53a105" + " " + "pomodoro-header",
                                children: [
                                    theme.emoji,
                                    " ",
                                    pomodoroData.mode === "work" ? "Work Session ".concat(pomodoroData.session) : pomodoroData.mode === "shortBreak" ? "Short Break" : "Long Break"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pomodoro/PomodoroTimer.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                    color: theme.text,
                                    fontFamily: "monospace",
                                    marginBottom: "15px",
                                    textShadow: "0 0 10px ".concat(theme.primary, "50")
                                },
                                className: "jsx-41c502332e53a105" + " " + "pomodoro-time",
                                children: formatTime(pomodoroData.timeLeft)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pomodoro/PomodoroTimer.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "100%",
                                    height: "8px",
                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                    borderRadius: "4px",
                                    marginBottom: "15px",
                                    overflow: "hidden"
                                },
                                className: "jsx-41c502332e53a105" + " " + "pomodoro-progress-container",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "".concat(progress, "%"),
                                        height: "100%",
                                        background: "linear-gradient(90deg, ".concat(theme.primary, ", ").concat(theme.primary, "80)"),
                                        borderRadius: "4px",
                                        transition: "width 1s ease",
                                        boxShadow: "0 0 10px ".concat(theme.primary, "60")
                                    },
                                    className: "jsx-41c502332e53a105" + " " + "pomodoro-progress-bar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pomodoro/PomodoroTimer.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pomodoro/PomodoroTimer.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "10px",
                                    justifyContent: "center"
                                },
                                className: "jsx-41c502332e53a105" + " " + "pomodoro-controls",
                                children: [
                                    !pomodoroData.isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleAction("start"),
                                        style: {
                                            background: theme.primary,
                                            color: "white",
                                            border: "none",
                                            padding: "8px 15px",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                            fontSize: "12px",
                                            fontWeight: "bold"
                                        },
                                        className: "jsx-41c502332e53a105",
                                        children: "🚀 Start"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pomodoro/PomodoroTimer.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleAction("pause"),
                                        style: {
                                            background: "#ff6b35",
                                            color: "white",
                                            border: "none",
                                            padding: "8px 15px",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                            fontSize: "12px",
                                            fontWeight: "bold"
                                        },
                                        className: "jsx-41c502332e53a105",
                                        children: "⏸️ Pause"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pomodoro/PomodoroTimer.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleAction("reset"),
                                        style: {
                                            background: "#6c757d",
                                            color: "white",
                                            border: "none",
                                            padding: "8px 15px",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                            fontSize: "12px",
                                            fontWeight: "bold"
                                        },
                                        className: "jsx-41c502332e53a105",
                                        children: "🔄 Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pomodoro/PomodoroTimer.tsx",
                                        lineNumber: 272,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pomodoro/PomodoroTimer.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            pomodoroData.isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: "11px",
                                    color: theme.text,
                                    marginTop: "10px",
                                    opacity: 0.8
                                },
                                className: "jsx-41c502332e53a105" + " " + "pomodoro-status",
                                children: pomodoroData.mode === "work" ? "Next: ".concat(pomodoroData.nextBreakType === "short" ? "10-min" : "15-min", " break") : "Next: Work session ".concat(pomodoroData.session + 1)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pomodoro/PomodoroTimer.tsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pomodoro/PomodoroTimer.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pomodoro/PomodoroTimer.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "41c502332e53a105",
                children: "@keyframes pulse{0%,to{opacity:.3}50%{opacity:.7}}.pomodoro-timer.jsx-41c502332e53a105 button.jsx-41c502332e53a105:hover{transform:translateY(-1px);box-shadow:0 4px 8px rgba(0,0,0,.2)}.pomodoro-timer.jsx-41c502332e53a105 button.jsx-41c502332e53a105:active{transform:translateY(0)}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pomodoro/PomodoroTimer.tsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
}
_s(PomodoroTimer, "Y1o1saGAZo5FddAGMbDyQSK6oEE=");
_c = PomodoroTimer;
var _c;
__turbopack_context__.k.register(_c, "PomodoroTimer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/TaskDisplay.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TaskDisplay": ()=>TaskDisplay
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tasks$2f$TaskList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tasks/TaskList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tasks$2f$TaskItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tasks/TaskItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pomodoro$2f$PomodoroTimer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pomodoro/PomodoroTimer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const TaskDisplay = ()=>{
    _s();
    // State management
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pomodoroState, setPomodoroState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isActive: false,
        timeLeft: 25 * 60,
        mode: "work",
        session: 1,
        startTime: null,
        initiatedBy: null,
        autoBreaks: true
    });
    const [socket, setSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMinimized, setIsMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCompleted, setShowCompleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [connectionStatus, setConnectionStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("connecting");
    // Initialize socket connection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaskDisplay.useEffect": ()=>{
            const newSocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])("http://localhost:3001", {
                path: "/socket.io",
                transports: [
                    "websocket",
                    "polling"
                ]
            });
            setSocket(newSocket);
            // Connection event handlers
            newSocket.on("connect", {
                "TaskDisplay.useEffect": ()=>{
                    console.log("✅ Connected to server");
                    setConnectionStatus("connected");
                }
            }["TaskDisplay.useEffect"]);
            newSocket.on("disconnect", {
                "TaskDisplay.useEffect": ()=>{
                    console.log("❌ Disconnected from server");
                    setConnectionStatus("disconnected");
                }
            }["TaskDisplay.useEffect"]);
            // Task event handlers
            newSocket.on("tasksLoaded", {
                "TaskDisplay.useEffect": (loadedTasks)=>{
                    setTasks(loadedTasks);
                }
            }["TaskDisplay.useEffect"]);
            newSocket.on("taskAdded", {
                "TaskDisplay.useEffect": (newTask)=>{
                    setTasks({
                        "TaskDisplay.useEffect": (prev)=>[
                                ...prev,
                                newTask
                            ]
                    }["TaskDisplay.useEffect"]);
                }
            }["TaskDisplay.useEffect"]);
            newSocket.on("taskUpdated", {
                "TaskDisplay.useEffect": (updatedTask)=>{
                    setTasks({
                        "TaskDisplay.useEffect": (prev)=>prev.map({
                                "TaskDisplay.useEffect": (task)=>task.id === updatedTask.id ? updatedTask : task
                            }["TaskDisplay.useEffect"])
                    }["TaskDisplay.useEffect"]);
                }
            }["TaskDisplay.useEffect"]);
            newSocket.on("taskCompleted", {
                "TaskDisplay.useEffect": (completedTask)=>{
                    setTasks({
                        "TaskDisplay.useEffect": (prev)=>prev.map({
                                "TaskDisplay.useEffect": (task)=>task.id === completedTask.id ? completedTask : task
                            }["TaskDisplay.useEffect"])
                    }["TaskDisplay.useEffect"]);
                }
            }["TaskDisplay.useEffect"]);
            newSocket.on("taskDeleted", {
                "TaskDisplay.useEffect": (deletedTask)=>{
                    setTasks({
                        "TaskDisplay.useEffect": (prev)=>prev.filter({
                                "TaskDisplay.useEffect": (task)=>task.id !== deletedTask.id
                            }["TaskDisplay.useEffect"])
                    }["TaskDisplay.useEffect"]);
                }
            }["TaskDisplay.useEffect"]);
            newSocket.on("completedTasksCleared", {
                "TaskDisplay.useEffect": (clearedTasks)=>{
                    setTasks({
                        "TaskDisplay.useEffect": (prev)=>prev.filter({
                                "TaskDisplay.useEffect": (task)=>task.status !== "done"
                            }["TaskDisplay.useEffect"])
                    }["TaskDisplay.useEffect"]);
                }
            }["TaskDisplay.useEffect"]);
            // Pomodoro event handlers
            newSocket.on("pomodoroStateLoaded", {
                "TaskDisplay.useEffect": (state)=>{
                    setPomodoroState(state);
                }
            }["TaskDisplay.useEffect"]);
            newSocket.on("pomodoroStarted", {
                "TaskDisplay.useEffect": (state)=>{
                    setPomodoroState(state);
                }
            }["TaskDisplay.useEffect"]);
            newSocket.on("pomodoroPaused", {
                "TaskDisplay.useEffect": (state)=>{
                    setPomodoroState(state);
                }
            }["TaskDisplay.useEffect"]);
            newSocket.on("pomodoroResumed", {
                "TaskDisplay.useEffect": (state)=>{
                    setPomodoroState(state);
                }
            }["TaskDisplay.useEffect"]);
            newSocket.on("pomodoroReset", {
                "TaskDisplay.useEffect": (state)=>{
                    setPomodoroState(state);
                }
            }["TaskDisplay.useEffect"]);
            newSocket.on("pomodoroTick", {
                "TaskDisplay.useEffect": (state)=>{
                    setPomodoroState(state);
                }
            }["TaskDisplay.useEffect"]);
            newSocket.on("pomodoroWorkCompleted", {
                "TaskDisplay.useEffect": (data)=>{
                    setPomodoroState(data.pomodoro);
                    console.log("🎉 Work completed:", data.message);
                }
            }["TaskDisplay.useEffect"]);
            newSocket.on("pomodoroBreakCompleted", {
                "TaskDisplay.useEffect": (data)=>{
                    setPomodoroState(data.pomodoro);
                    console.log("✨ Break completed:", data.message);
                }
            }["TaskDisplay.useEffect"]);
            // Load initial data
            loadInitialData();
            return ({
                "TaskDisplay.useEffect": ()=>{
                    newSocket.close();
                }
            })["TaskDisplay.useEffect"];
        }
    }["TaskDisplay.useEffect"], []);
    const loadInitialData = async ()=>{
        try {
            // Load tasks
            const tasksResponse = await fetch("/api/tasks");
            if (tasksResponse.ok) {
                const tasksData = await tasksResponse.json();
                if (tasksData.success) {
                    setTasks(tasksData.data);
                }
            }
            // Load pomodoro state
            const pomodoroResponse = await fetch("/api/pomodoro");
            if (pomodoroResponse.ok) {
                const pomodoroData = await pomodoroResponse.json();
                if (pomodoroData.success) {
                    setPomodoroState(pomodoroData.data);
                }
            }
        } catch (error) {
            console.error("Failed to load initial data:", error);
        }
    };
    // Pomodoro control functions
    const handlePomodoroStart = async ()=>{
        try {
            const response = await fetch("/api/pomodoro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: "overlay",
                    duration: 25
                })
            });
            if (!response.ok) {
                console.error("Failed to start pomodoro");
            }
        } catch (error) {
            console.error("Error starting pomodoro:", error);
        }
    };
    const handlePomodoroControl = async (action)=>{
        try {
            const response = await fetch("/api/pomodoro/control", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: "overlay",
                    action
                })
            });
            if (!response.ok) {
                console.error("Failed to ".concat(action, " pomodoro"));
            }
        } catch (error) {
            console.error("Error ".concat(action, " pomodoro:"), error);
        }
    };
    const pendingTasks = tasks.filter((task)=>task.status === "pending");
    const completedTasks = tasks.filter((task)=>task.status === "done");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-5 right-5 w-[480px] max-h-[90vh] z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "   bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg   rounded-3xl border-2 border-purple-500/40 shadow-2xl shadow-purple-500/20   overflow-hidden animate-fade-in   ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "   bg-gradient-to-r from-purple-600 to-purple-700 p-4   flex justify-between items-center border-b border-purple-500/30   ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl",
                                    children: "📋"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TaskDisplay.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-white font-bold text-lg",
                                            children: "Criss Bot"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/TaskDisplay.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-purple-200",
                                                    children: [
                                                        pendingTasks.length,
                                                        " pending"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/TaskDisplay.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                completedTasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-200",
                                                    children: [
                                                        completedTasks.length,
                                                        " done"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/TaskDisplay.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/TaskDisplay.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/TaskDisplay.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TaskDisplay.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "\n              w-3 h-3 rounded-full\n              ".concat(connectionStatus === "connected" ? "bg-green-400 animate-pulse" : connectionStatus === "connecting" ? "bg-yellow-400 animate-pulse" : "bg-red-400", "\n            "),
                                    title: "Connection: ".concat(connectionStatus)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TaskDisplay.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCompleted(!showCompleted),
                                    className: "text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors",
                                    title: showCompleted ? "Hide completed" : "Show completed",
                                    children: showCompleted ? "👁️" : "👁️‍🗨️"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TaskDisplay.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsMinimized(!isMinimized),
                                    className: "text-white/80 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors",
                                    title: isMinimized ? "Expand" : "Minimize",
                                    children: isMinimized ? "⬆️" : "⬇️"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TaskDisplay.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TaskDisplay.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TaskDisplay.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                !isMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 space-y-6 max-h-[70vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pomodoro$2f$PomodoroTimer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PomodoroTimer"], {
                            state: pomodoroState,
                            onStart: handlePomodoroStart,
                            onPause: ()=>handlePomodoroControl("pause"),
                            onResume: ()=>handlePomodoroControl("resume"),
                            onReset: ()=>handlePomodoroControl("reset")
                        }, void 0, false, {
                            fileName: "[project]/src/components/TaskDisplay.tsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white font-semibold text-lg mb-4 flex items-center gap-2",
                                    children: "🔄 Active Tasks"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TaskDisplay.tsx",
                                    lineNumber: 270,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tasks$2f$TaskList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskList"], {
                                    tasks: pendingTasks
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TaskDisplay.tsx",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TaskDisplay.tsx",
                            lineNumber: 269,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        completedTasks.length > 0 && showCompleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TaskDisplay.tsx",
                                    lineNumber: 279,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-white/80 font-semibold text-lg mb-4 flex items-center gap-2",
                                    children: "✅ Recently Completed"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TaskDisplay.tsx",
                                    lineNumber: 280,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 opacity-80",
                                    children: completedTasks.slice(-3).map((task, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tasks$2f$TaskItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskItem"], {
                                                task: task,
                                                index: index
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TaskDisplay.tsx",
                                                lineNumber: 286,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, task.id, false, {
                                            fileName: "[project]/src/components/TaskDisplay.tsx",
                                            lineNumber: 285,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TaskDisplay.tsx",
                                    lineNumber: 283,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TaskDisplay.tsx",
                            lineNumber: 278,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "   bg-purple-500/10 border border-purple-500/20 rounded-xl p-4   text-center   ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-purple-400 font-semibold mb-2",
                                    children: "💬 Chat Commands"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TaskDisplay.tsx",
                                    lineNumber: 299,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap justify-center gap-2 text-xs",
                                    children: [
                                        "!add [task]",
                                        "!edit [id]",
                                        "!done [id]",
                                        "!pomodoro [min]",
                                        "!pause",
                                        "!reset"
                                    ].map((cmd)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "   bg-purple-500/20 text-purple-300 px-2 py-1 rounded   border border-purple-500/30   ",
                                            children: cmd
                                        }, cmd, false, {
                                            fileName: "[project]/src/components/TaskDisplay.tsx",
                                            lineNumber: 311,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TaskDisplay.tsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TaskDisplay.tsx",
                            lineNumber: 294,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TaskDisplay.tsx",
                    lineNumber: 258,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TaskDisplay.tsx",
            lineNumber: 195,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/TaskDisplay.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TaskDisplay, "FmdNqxZ+BXkiYtniLAXrVEk3/U0=");
_c = TaskDisplay;
var _c;
__turbopack_context__.k.register(_c, "TaskDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaskDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TaskDisplay.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Fixed particles to avoid hydration mismatch
const FIXED_PARTICLES = [
    {
        left: "15%",
        top: "20%",
        delay: "0s",
        duration: "4s"
    },
    {
        left: "85%",
        top: "60%",
        delay: "1s",
        duration: "3.5s"
    },
    {
        left: "45%",
        top: "10%",
        delay: "2s",
        duration: "4.5s"
    },
    {
        left: "75%",
        top: "80%",
        delay: "0.5s",
        duration: "3s"
    },
    {
        left: "25%",
        top: "70%",
        delay: "1.5s",
        duration: "4s"
    },
    {
        left: "65%",
        top: "30%",
        delay: "2.5s",
        duration: "3.8s"
    },
    {
        left: "35%",
        top: "50%",
        delay: "0.8s",
        duration: "4.2s"
    },
    {
        left: "10%",
        top: "90%",
        delay: "1.8s",
        duration: "3.3s"
    }
];
function Home() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setMounted(true);
        }
    }["Home.useEffect"], []);
    if (!mounted) {
        // Return a simple loading state to avoid hydration mismatch
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 p-8 flex items-center justify-center min-h-screen",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400 mx-auto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-purple-300 mt-4",
                                children: "Loading CrissBot..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: FIXED_PARTICLES.map((particle, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float",
                        style: {
                            left: particle.left,
                            top: particle.top,
                            animationDelay: particle.delay,
                            animationDuration: particle.duration
                        }
                    }, index, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TaskDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskDisplay"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.02]",
                style: {
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
                    backgroundSize: "50px 50px"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(Home, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_9565b8d1._.js.map