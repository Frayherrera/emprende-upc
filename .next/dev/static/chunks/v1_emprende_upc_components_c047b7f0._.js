(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/v1_emprende_upc/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function cx(...classes) {
    return classes.filter(Boolean).join(" ");
}
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: cx("fixed inset-0 z-50 bg-black/60 backdrop-blur-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/v1_emprende_upc/components/ui/dialog.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = ({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/v1_emprende_upc/components/ui/dialog.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: cx("fixed left-1/2 top-1/2 z-50 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2", "rounded-2xl border border-border/70 bg-card p-6 shadow-2xl focus:outline-none", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "absolute right-3 top-3 h-8 w-8 text-muted-foreground",
                            "aria-label": "Cerrar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/v1_emprende_upc/components/ui/dialog.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/v1_emprende_upc/components/ui/dialog.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/v1_emprende_upc/components/ui/dialog.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/v1_emprende_upc/components/ui/dialog.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/v1_emprende_upc/components/ui/dialog.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: cx("flex flex-col space-y-1.5 text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/v1_emprende_upc/components/ui/dialog.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: cx("text-base font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/v1_emprende_upc/components/ui/dialog.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: cx("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/v1_emprende_upc/components/ui/dialog.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogTitle$forwardRef");
__turbopack_context__.k.register(_c5, "DialogTitle");
__turbopack_context__.k.register(_c6, "DialogDescription$forwardRef");
__turbopack_context__.k.register(_c7, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuizEtapaDialog",
    ()=>QuizEtapaDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const preguntas = [
    {
        pregunta: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-muted-foreground",
                children: "Selecciona la opción que mejor describa tu situación actual."
            }, void 0, false, {
                fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false),
        opciones: [
            {
                label: "Solo tengo una idea o problema identificado",
                etapa: "IDEA"
            },
            {
                label: "Tengo un prototipo o maqueta, pero nadie lo ha usado todavía",
                etapa: "PROTOTYPE"
            },
            {
                label: "Ya probé mi producto/servicio con personas reales (aunque sea en pequeño)",
                etapa: "MVP"
            },
            {
                label: "Ya tengo clientes o usuarios frecuentes y quiero crecer",
                etapa: "GROWTH"
            }
        ]
    }
];
const etapaLabel = {
    IDEA: "Idea",
    PROTOTYPE: "Prototipo",
    MVP: "MVP",
    GROWTH: "Crecimiento"
};
function QuizEtapaDialog() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [etapa, setEtapa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleRespuesta = (etapa)=>{
        setEtapa(etapa);
    };
    const handleRestart = ()=>{
        setEtapa(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: setOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full justify-end mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        type: "button",
                        children: "Empezar quiz"
                    }, void 0, false, {
                        fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold mb-2 uppercase",
                                children: "¿EN QUÉ ETAPA ESTÁ TU PROYECTO?"
                            }, void 0, false, {
                                fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    etapa ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-base",
                                children: [
                                    "Según tu respuesta, tu proyecto está en la etapa:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block mt-2 text-2xl font-bold text-primary",
                                        children: etapaLabel[etapa]
                                    }, void 0, false, {
                                        fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>{
                                    setOpen(false);
                                    handleRestart();
                                },
                                className: "w-full",
                                variant: "secondary",
                                children: "Cerrar"
                            }, void 0, false, {
                                fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-base text-foreground mb-4",
                                children: preguntas[0].pregunta
                            }, void 0, false, {
                                fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: preguntas[0].opciones.map((op)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>handleRespuesta(op.etapa),
                                        className: "w-full",
                                        variant: "outline",
                                        children: op.label
                                    }, op.etapa, false, {
                                        fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/v1_emprende_upc/components/panel/quiz-etapa-dialog.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(QuizEtapaDialog, "sg7VSfKw+lwYfHpwV/gYBTt9B/4=");
_c = QuizEtapaDialog;
var _c;
__turbopack_context__.k.register(_c, "QuizEtapaDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v1_emprende_upc/components/panel/attachments-guard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttachmentsGuard",
    ()=>AttachmentsGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const MAX_TOTAL = 30 * 1024 * 1024; // 30MB sum of selected files
const MAX_FILE = 8 * 1024 * 1024; // 8MB per file
const ALLOWED = new Set([
    "application/pdf",
    "image/png",
    "image/jpeg",
    "image/webp",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/msword"
]);
function AttachmentsGuard() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AttachmentsGuard.useEffect": ()=>{
            const PRESERVE_KEY = "preserve-form:";
            const restoreForm = {
                "AttachmentsGuard.useEffect.restoreForm": (formId)=>{
                    try {
                        const raw = localStorage.getItem(`${PRESERVE_KEY}${formId}`);
                        if (!raw) return;
                        const parsed = JSON.parse(raw);
                        if (!parsed) return;
                        const formEl = document.getElementById(formId);
                        if (!formEl) return;
                        Object.entries(parsed).forEach({
                            "AttachmentsGuard.useEffect.restoreForm": ([name, value])=>{
                                const field = formEl.querySelector(`[name="${CSS.escape(name)}"]`);
                                if (!field) return;
                                if (field instanceof HTMLInputElement && (field.type === "checkbox" || field.type === "radio")) {
                                    field.checked = field.value === value;
                                } else {
                                    field.value = value;
                                }
                            }
                        }["AttachmentsGuard.useEffect.restoreForm"]);
                        localStorage.removeItem(`${PRESERVE_KEY}${formId}`);
                    } catch (err) {
                        console.error("restore form failed", err);
                    }
                }
            }["AttachmentsGuard.useEffect.restoreForm"];
            const stashForm = {
                "AttachmentsGuard.useEffect.stashForm": (formId)=>{
                    try {
                        const formEl = document.getElementById(formId);
                        if (!formEl) return;
                        const data = new FormData(formEl);
                        const payload = {};
                        data.forEach({
                            "AttachmentsGuard.useEffect.stashForm": (val, key)=>{
                                if (val instanceof File) return;
                                payload[key] = val.toString();
                            }
                        }["AttachmentsGuard.useEffect.stashForm"]);
                        localStorage.setItem(`${PRESERVE_KEY}${formId}`, JSON.stringify(payload));
                    } catch (err) {
                        console.error("stash form failed", err);
                    }
                }
            }["AttachmentsGuard.useEffect.stashForm"];
            // Restore any preserved form state on mount
            const formsWithId = Array.from(document.querySelectorAll("form[id]"));
            formsWithId.forEach({
                "AttachmentsGuard.useEffect": (form)=>restoreForm(form.id)
            }["AttachmentsGuard.useEffect"]);
            const clearInputError = {
                "AttachmentsGuard.useEffect.clearInputError": (input)=>{
                    const previous = input.parentElement?.querySelector("[data-file-error='true']");
                    if (previous) previous.remove();
                    input.setAttribute("aria-invalid", "false");
                }
            }["AttachmentsGuard.useEffect.clearInputError"];
            const setInputError = {
                "AttachmentsGuard.useEffect.setInputError": (input, message)=>{
                    clearInputError(input);
                    input.setAttribute("aria-invalid", "true");
                    const msg = document.createElement("p");
                    msg.dataset.fileError = "true";
                    msg.className = "mt-1 text-xs text-destructive";
                    msg.textContent = message;
                    input.insertAdjacentElement("afterend", msg);
                }
            }["AttachmentsGuard.useEffect.setInputError"];
            const getFormFiles = {
                "AttachmentsGuard.useEffect.getFormFiles": (form)=>{
                    const inputs = Array.from(form.querySelectorAll('input[type="file"]'));
                    return inputs.flatMap({
                        "AttachmentsGuard.useEffect.getFormFiles": (inp)=>Array.from(inp.files || [])
                    }["AttachmentsGuard.useEffect.getFormFiles"]);
                }
            }["AttachmentsGuard.useEffect.getFormFiles"];
            const resolveMaxTotal = {
                "AttachmentsGuard.useEffect.resolveMaxTotal": (form)=>{
                    const raw = form.dataset.maxTotalBytes;
                    const parsed = raw ? Number(raw) : Number.NaN;
                    return Number.isFinite(parsed) && parsed > 0 ? parsed : MAX_TOTAL;
                }
            }["AttachmentsGuard.useEffect.resolveMaxTotal"];
            const validateFile = {
                "AttachmentsGuard.useEffect.validateFile": (file)=>{
                    if (file.size > MAX_FILE) {
                        return {
                            title: "Archivo excede 8MB",
                            description: `${file.name} pesa ${(file.size / (1024 * 1024)).toFixed(1)}MB (límite 8MB).`,
                            inline: `El archivo ${file.name} supera el límite de 8MB.`
                        };
                    }
                    if (file.type && !ALLOWED.has(file.type)) {
                        return {
                            title: "Tipo de archivo no permitido",
                            description: `${file.name} (${file.type || "desconocido"}) no es aceptado.`,
                            inline: `El archivo ${file.name} no tiene un formato permitido.`
                        };
                    }
                    return null;
                }
            }["AttachmentsGuard.useEffect.validateFile"];
            const notifyTotalLimit = {
                "AttachmentsGuard.useEffect.notifyTotalLimit": (maxTotal)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Archivos demasiado grandes", {
                        description: `Sube menos archivos o más livianos (máx ~${Math.floor(maxTotal / (1024 * 1024))}MB en total).`
                    });
                }
            }["AttachmentsGuard.useEffect.notifyTotalLimit"];
            const uploadHandler = {
                "AttachmentsGuard.useEffect.uploadHandler": (ev)=>{
                    const form = ev.target;
                    const files = getFormFiles(form);
                    const fileInputs = Array.from(form.querySelectorAll('input[type="file"]'));
                    fileInputs.forEach({
                        "AttachmentsGuard.useEffect.uploadHandler": (input)=>clearInputError(input)
                    }["AttachmentsGuard.useEffect.uploadHandler"]);
                    const maxTotal = resolveMaxTotal(form);
                    const total = files.reduce({
                        "AttachmentsGuard.useEffect.uploadHandler.total": (sum, f)=>sum + (f?.size || 0)
                    }["AttachmentsGuard.useEffect.uploadHandler.total"], 0);
                    if (total > maxTotal) {
                        ev.preventDefault();
                        notifyTotalLimit(maxTotal);
                        const firstWithFile = fileInputs.find({
                            "AttachmentsGuard.useEffect.uploadHandler.firstWithFile": (input)=>(input.files?.length || 0) > 0
                        }["AttachmentsGuard.useEffect.uploadHandler.firstWithFile"]);
                        if (firstWithFile) {
                            setInputError(firstWithFile, `La suma de archivos supera ~${Math.floor(maxTotal / (1024 * 1024))}MB. Reduce el peso total.`);
                        }
                        return;
                    }
                    const inputsByFile = fileInputs.flatMap({
                        "AttachmentsGuard.useEffect.uploadHandler.inputsByFile": (input)=>Array.from(input.files || []).map({
                                "AttachmentsGuard.useEffect.uploadHandler.inputsByFile": (file)=>({
                                        input,
                                        file
                                    })
                            }["AttachmentsGuard.useEffect.uploadHandler.inputsByFile"])
                    }["AttachmentsGuard.useEffect.uploadHandler.inputsByFile"]);
                    for (const { input, file } of inputsByFile){
                        const error = validateFile(file);
                        if (!error) continue;
                        ev.preventDefault();
                        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.title, {
                            description: error.description
                        });
                        setInputError(input, error.inline);
                        return;
                    }
                }
            }["AttachmentsGuard.useEffect.uploadHandler"];
            const fileChangeHandler = {
                "AttachmentsGuard.useEffect.fileChangeHandler": (ev)=>{
                    const input = ev.target;
                    if (!input || input.type !== "file") return;
                    const form = input.form;
                    if (!form) return;
                    clearInputError(input);
                    const selectedFiles = Array.from(input.files || []);
                    for (const file of selectedFiles){
                        const error = validateFile(file);
                        if (!error) continue;
                        input.value = "";
                        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(error.title, {
                            description: error.description
                        });
                        setInputError(input, error.inline);
                        return;
                    }
                    const files = getFormFiles(form);
                    const maxTotal = resolveMaxTotal(form);
                    const total = files.reduce({
                        "AttachmentsGuard.useEffect.fileChangeHandler.total": (sum, f)=>sum + (f?.size || 0)
                    }["AttachmentsGuard.useEffect.fileChangeHandler.total"], 0);
                    if (total > maxTotal) {
                        input.value = "";
                        notifyTotalLimit(maxTotal);
                        setInputError(input, `La suma de archivos supera ~${Math.floor(maxTotal / (1024 * 1024))}MB. Reduce el peso total.`);
                    }
                }
            }["AttachmentsGuard.useEffect.fileChangeHandler"];
            const forms = Array.from(document.querySelectorAll("form[data-attachment-form='true']"));
            forms.forEach({
                "AttachmentsGuard.useEffect": (f)=>f.addEventListener("submit", uploadHandler)
            }["AttachmentsGuard.useEffect"]);
            const fileInputs = forms.flatMap({
                "AttachmentsGuard.useEffect.fileInputs": (f)=>Array.from(f.querySelectorAll('input[type="file"]'))
            }["AttachmentsGuard.useEffect.fileInputs"]);
            fileInputs.forEach({
                "AttachmentsGuard.useEffect": (input)=>input.addEventListener("change", fileChangeHandler)
            }["AttachmentsGuard.useEffect"]);
            const confirmHandler = {
                "AttachmentsGuard.useEffect.confirmHandler": (ev)=>{
                    const form = ev.target;
                    const message = form.dataset.confirm;
                    if (!message) return;
                    const ok = window.confirm(message);
                    if (!ok) {
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                }
            }["AttachmentsGuard.useEffect.confirmHandler"];
            const confirmForms = Array.from(document.querySelectorAll("form[data-confirm]"));
            confirmForms.forEach({
                "AttachmentsGuard.useEffect": (f)=>f.addEventListener("submit", confirmHandler)
            }["AttachmentsGuard.useEffect"]);
            const preserveForms = Array.from(document.querySelectorAll("form[data-preserve-form]"));
            const preserveHandlers = [];
            preserveForms.forEach({
                "AttachmentsGuard.useEffect": (f)=>{
                    const targetId = f.dataset.preserveForm;
                    if (!targetId) return;
                    const handler = {
                        "AttachmentsGuard.useEffect.handler": ()=>stashForm(targetId)
                    }["AttachmentsGuard.useEffect.handler"];
                    preserveHandlers.push({
                        form: f,
                        handler
                    });
                    f.addEventListener("submit", handler);
                }
            }["AttachmentsGuard.useEffect"]);
            return ({
                "AttachmentsGuard.useEffect": ()=>{
                    forms.forEach({
                        "AttachmentsGuard.useEffect": (f)=>f.removeEventListener("submit", uploadHandler)
                    }["AttachmentsGuard.useEffect"]);
                    fileInputs.forEach({
                        "AttachmentsGuard.useEffect": (input)=>input.removeEventListener("change", fileChangeHandler)
                    }["AttachmentsGuard.useEffect"]);
                    confirmForms.forEach({
                        "AttachmentsGuard.useEffect": (f)=>f.removeEventListener("submit", confirmHandler)
                    }["AttachmentsGuard.useEffect"]);
                    preserveHandlers.forEach({
                        "AttachmentsGuard.useEffect": ({ form, handler })=>form.removeEventListener("submit", handler)
                    }["AttachmentsGuard.useEffect"]);
                }
            })["AttachmentsGuard.useEffect"];
        }
    }["AttachmentsGuard.useEffect"], []);
    return null;
}
_s(AttachmentsGuard, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AttachmentsGuard;
var _c;
__turbopack_context__.k.register(_c, "AttachmentsGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v1_emprende_upc/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ring-offset-background", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/v1_emprende_upc/components/ui/input.tsx",
        lineNumber: 9,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v1_emprende_upc/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/v1_emprende_upc/components/ui/label.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Label;
Label.displayName = "Label";
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/v1_emprende_upc/components/panel/cover-picker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoverPicker",
    ()=>CoverPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CoverPicker({ defaultUrl }) {
    _s();
    const [_, setObjectUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Clean up generated object URLs when unmounting
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoverPicker.useEffect": ()=>{
            return ({
                "CoverPicker.useEffect": ()=>{
                    setObjectUrl({
                        "CoverPicker.useEffect": (current)=>{
                            if (current) URL.revokeObjectURL(current);
                            return null;
                        }
                    }["CoverPicker.useEffect"]);
                }
            })["CoverPicker.useEffect"];
        }
    }["CoverPicker.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "cover",
                children: "Imagen de portada (JPG, PNG, WEBP)"
            }, void 0, false, {
                fileName: "[project]/v1_emprende_upc/components/panel/cover-picker.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                id: "cover",
                name: "cover",
                type: "file",
                accept: "image/png,image/jpeg,image/webp",
                required: true,
                onChange: (event)=>{
                    const file = event.target.files?.[0];
                    setObjectUrl((current)=>{
                        if (current) URL.revokeObjectURL(current);
                        return file ? URL.createObjectURL(file) : null;
                    });
                }
            }, void 0, false, {
                fileName: "[project]/v1_emprende_upc/components/panel/cover-picker.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            defaultUrl && // eslint-disable-next-line react/no-unescaped-entities
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-muted-foreground",
                children: 'Portada actual cargada. Usa el botón "Ver portada" para verla.'
            }, void 0, false, {
                fileName: "[project]/v1_emprende_upc/components/panel/cover-picker.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/v1_emprende_upc/components/panel/cover-picker.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(CoverPicker, "EuILeXpODpR/xKf/Cqns98Md4js=");
_c = CoverPicker;
var _c;
__turbopack_context__.k.register(_c, "CoverPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=v1_emprende_upc_components_c047b7f0._.js.map