(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/v1_emprende_upc/app/admin/filters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActivityLoadMoreButton",
    ()=>ActivityLoadMoreButton,
    "ActivityRecentControls",
    ()=>ActivityRecentControls,
    "ModuleFilters",
    ()=>ModuleFilters,
    "UserFilters",
    ()=>UserFilters,
    "VentureFilters",
    ()=>VentureFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
function useSyncedValue(initial, key) {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSyncedValue.useEffect": ()=>{
            const current = searchParams.get(key) || "";
            setValue(current);
        }
    }["useSyncedValue.useEffect"], [
        searchParams,
        key
    ]);
    return [
        value,
        setValue
    ];
}
_s(useSyncedValue, "cJiw4rt0GqFL1lcxFeFl8zgBt5w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
function VentureFilters({ venture, stage }) {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [ventureValue, setVentureValue] = useSyncedValue(venture, "venture");
    const [stageValue, setStageValue] = useSyncedValue(stage, "stage");
    const handleSubmit = ()=>{
        const next = new URLSearchParams(searchParams.toString());
        const ventureTrim = ventureValue.trim();
        const stageTrim = stageValue.trim();
        if (ventureTrim) next.set("venture", ventureTrim);
        else next.delete("venture");
        if (stageTrim) next.set("stage", stageTrim);
        else next.delete("stage");
        startTransition(()=>{
            router.replace(next.toString() ? `/admin?${next.toString()}` : "/admin", {
                scroll: false
            });
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "flex flex-col gap-2 md:flex-row md:items-center",
        onSubmit: (event)=>{
            event.preventDefault();
            handleSubmit();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "venture",
                placeholder: "Buscar título",
                value: ventureValue,
                onChange: (e)=>setVentureValue(e.target.value),
                className: "h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
            }, void 0, false, {
                fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                name: "stage",
                value: stageValue,
                onChange: (e)=>setStageValue(e.target.value),
                className: "h-9 rounded-md border border-border/60 bg-background px-3 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Todas las etapas"
                    }, void 0, false, {
                        fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "IDEA",
                        children: "Idea"
                    }, void 0, false, {
                        fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "PROTOTYPE",
                        children: "Prototipo"
                    }, void 0, false, {
                        fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "MVP",
                        children: "MVP"
                    }, void 0, false, {
                        fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "GROWTH",
                        children: "Crecimiento"
                    }, void 0, false, {
                        fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                size: "sm",
                type: "submit",
                variant: "outline",
                disabled: isPending,
                children: isPending ? "Filtrando..." : "Filtrar"
            }, void 0, false, {
                fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s1(VentureFilters, "T5K6/5AV8eKnvUlpAwmNgWIGIZo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        useSyncedValue,
        useSyncedValue
    ];
});
_c = VentureFilters;
function UserFilters({ user }) {
    _s2();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [userValue, setUserValue] = useSyncedValue(user, "user");
    const handleSubmit = ()=>{
        const next = new URLSearchParams(searchParams.toString());
        const userTrim = userValue.trim();
        if (userTrim) next.set("user", userTrim);
        else next.delete("user");
        startTransition(()=>{
            router.replace(next.toString() ? `/admin?${next.toString()}` : "/admin", {
                scroll: false
            });
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "flex flex-col gap-2 md:flex-row md:items-center",
        onSubmit: (event)=>{
            event.preventDefault();
            handleSubmit();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "user",
                placeholder: "Buscar email o nombre",
                value: userValue,
                onChange: (e)=>setUserValue(e.target.value),
                className: "h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
            }, void 0, false, {
                fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                size: "sm",
                type: "submit",
                variant: "outline",
                disabled: isPending,
                children: isPending ? "Filtrando..." : "Filtrar"
            }, void 0, false, {
                fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s2(UserFilters, "1N04TOUg7UfPfL2abphOIpG9DSc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        useSyncedValue
    ];
});
_c1 = UserFilters;
function ModuleFilters({ query, category, categories }) {
    _s3();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [moduleValue, setModuleValue] = useSyncedValue(query, "module");
    const [categoryValue, setCategoryValue] = useSyncedValue(category, "moduleCategory");
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Evita scroll al top al hacer replace; se usa transición sin navegación dura.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModuleFilters.useEffect": ()=>{
            if (!isPending && formRef.current) {
                formRef.current.scrollIntoView({
                    block: "nearest"
                });
            }
        }
    }["ModuleFilters.useEffect"], [
        isPending
    ]);
    const handleSubmit = ()=>{
        const next = new URLSearchParams(searchParams.toString());
        const q = moduleValue.trim();
        const cat = categoryValue.trim();
        if (q) next.set("module", q);
        else next.delete("module");
        if (cat) next.set("moduleCategory", cat);
        else next.delete("moduleCategory");
        startTransition(()=>{
            router.replace(next.toString() ? `/admin?${next.toString()}` : "/admin", {
                scroll: false
            });
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        ref: formRef,
        className: "flex flex-col gap-2 md:flex-row md:items-center",
        onSubmit: (event)=>{
            event.preventDefault();
            handleSubmit();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "module",
                placeholder: "Buscar módulo",
                value: moduleValue,
                onChange: (e)=>setModuleValue(e.target.value),
                className: "h-9 rounded-md border border-border/60 bg-background px-3 text-sm"
            }, void 0, false, {
                fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                name: "moduleCategory",
                value: categoryValue,
                onChange: (e)=>setCategoryValue(e.target.value),
                className: "h-9 rounded-md border border-border/60 bg-background px-3 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Todas las categorías"
                    }, void 0, false, {
                        fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: cat,
                            children: cat
                        }, cat, false, {
                            fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                size: "sm",
                type: "submit",
                variant: "outline",
                disabled: isPending,
                children: isPending ? "Filtrando..." : "Filtrar"
            }, void 0, false, {
                fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s3(ModuleFilters, "nLwxgPBPnE1TfkrSz6NOYPqM/kk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        useSyncedValue,
        useSyncedValue
    ];
});
_c2 = ModuleFilters;
const activityTypes = [
    "all",
    "users",
    "ventures",
    "attachments",
    "chat",
    "training"
];
function ActivityRecentControls({ activityType }) {
    _s4();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const navigateWith = (update)=>{
        const next = new URLSearchParams(searchParams.toString());
        update(next);
        startTransition(()=>{
            router.replace(next.toString() ? `/admin?${next.toString()}` : "/admin", {
                scroll: false
            });
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-2 pt-1",
        children: [
            {
                key: "all",
                label: "Todo"
            },
            {
                key: "users",
                label: "Usuarios"
            },
            {
                key: "ventures",
                label: "Emprendimientos"
            },
            {
                key: "attachments",
                label: "Adjuntos"
            },
            {
                key: "chat",
                label: "Chat"
            },
            {
                key: "training",
                label: "Formación"
            }
        ].map((item)=>{
            const key = item.key;
            const active = activityType === key;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                disabled: isPending,
                onClick: ()=>navigateWith((next)=>{
                        next.set("tab", "stats");
                        next.set("activityType", key);
                        next.set("activityLimit", "12");
                    }),
                className: `rounded-md border px-3 py-1.5 text-sm ${active ? "border-primary bg-primary/10 text-primary" : "border-border/70 text-foreground hover:bg-muted/50"}`,
                children: item.label
            }, key, false, {
                fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
                lineNumber: 227,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_s4(ActivityRecentControls, "jQRKk4t+gKZ4LOgrHTUz0zyRtmI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c3 = ActivityRecentControls;
function ActivityLoadMoreButton({ activityType, activityLimit, canLoadMore }) {
    _s5();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    if (!canLoadMore) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        type: "button",
        variant: "outline",
        size: "sm",
        disabled: isPending,
        onClick: ()=>{
            const next = new URLSearchParams(searchParams.toString());
            next.set("tab", "stats");
            next.set("activityType", activityType);
            next.set("activityLimit", String(activityLimit + 12));
            startTransition(()=>{
                router.replace(next.toString() ? `/admin?${next.toString()}` : "/admin", {
                    scroll: false
                });
            });
        },
        children: isPending ? "Cargando..." : "Cargar más"
    }, void 0, false, {
        fileName: "[project]/v1_emprende_upc/app/admin/filters.tsx",
        lineNumber: 264,
        columnNumber: 5
    }, this);
}
_s5(ActivityLoadMoreButton, "jQRKk4t+gKZ4LOgrHTUz0zyRtmI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c4 = ActivityLoadMoreButton;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "VentureFilters");
__turbopack_context__.k.register(_c1, "UserFilters");
__turbopack_context__.k.register(_c2, "ModuleFilters");
__turbopack_context__.k.register(_c3, "ActivityRecentControls");
__turbopack_context__.k.register(_c4, "ActivityLoadMoreButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=v1_emprende_upc_app_admin_filters_tsx_162bf0c5._.js.map