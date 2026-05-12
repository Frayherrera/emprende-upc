module.exports = [
"[project]/v1_emprende_upc/components/panel/attachments-guard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttachmentsGuard",
    ()=>AttachmentsGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const PRESERVE_KEY = "preserve-form:";
        const restoreForm = (formId)=>{
            try {
                const raw = localStorage.getItem(`${PRESERVE_KEY}${formId}`);
                if (!raw) return;
                const parsed = JSON.parse(raw);
                if (!parsed) return;
                const formEl = document.getElementById(formId);
                if (!formEl) return;
                Object.entries(parsed).forEach(([name, value])=>{
                    const field = formEl.querySelector(`[name="${CSS.escape(name)}"]`);
                    if (!field) return;
                    if (field instanceof HTMLInputElement && (field.type === "checkbox" || field.type === "radio")) {
                        field.checked = field.value === value;
                    } else {
                        field.value = value;
                    }
                });
                localStorage.removeItem(`${PRESERVE_KEY}${formId}`);
            } catch (err) {
                console.error("restore form failed", err);
            }
        };
        const stashForm = (formId)=>{
            try {
                const formEl = document.getElementById(formId);
                if (!formEl) return;
                const data = new FormData(formEl);
                const payload = {};
                data.forEach((val, key)=>{
                    if (val instanceof File) return;
                    payload[key] = val.toString();
                });
                localStorage.setItem(`${PRESERVE_KEY}${formId}`, JSON.stringify(payload));
            } catch (err) {
                console.error("stash form failed", err);
            }
        };
        // Restore any preserved form state on mount
        const formsWithId = Array.from(document.querySelectorAll("form[id]"));
        formsWithId.forEach((form)=>restoreForm(form.id));
        const clearInputError = (input)=>{
            const previous = input.parentElement?.querySelector("[data-file-error='true']");
            if (previous) previous.remove();
            input.setAttribute("aria-invalid", "false");
        };
        const setInputError = (input, message)=>{
            clearInputError(input);
            input.setAttribute("aria-invalid", "true");
            const msg = document.createElement("p");
            msg.dataset.fileError = "true";
            msg.className = "mt-1 text-xs text-destructive";
            msg.textContent = message;
            input.insertAdjacentElement("afterend", msg);
        };
        const getFormFiles = (form)=>{
            const inputs = Array.from(form.querySelectorAll('input[type="file"]'));
            return inputs.flatMap((inp)=>Array.from(inp.files || []));
        };
        const resolveMaxTotal = (form)=>{
            const raw = form.dataset.maxTotalBytes;
            const parsed = raw ? Number(raw) : Number.NaN;
            return Number.isFinite(parsed) && parsed > 0 ? parsed : MAX_TOTAL;
        };
        const validateFile = (file)=>{
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
        };
        const notifyTotalLimit = (maxTotal)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Archivos demasiado grandes", {
                description: `Sube menos archivos o más livianos (máx ~${Math.floor(maxTotal / (1024 * 1024))}MB en total).`
            });
        };
        const uploadHandler = (ev)=>{
            const form = ev.target;
            const files = getFormFiles(form);
            const fileInputs = Array.from(form.querySelectorAll('input[type="file"]'));
            fileInputs.forEach((input)=>clearInputError(input));
            const maxTotal = resolveMaxTotal(form);
            const total = files.reduce((sum, f)=>sum + (f?.size || 0), 0);
            if (total > maxTotal) {
                ev.preventDefault();
                notifyTotalLimit(maxTotal);
                const firstWithFile = fileInputs.find((input)=>(input.files?.length || 0) > 0);
                if (firstWithFile) {
                    setInputError(firstWithFile, `La suma de archivos supera ~${Math.floor(maxTotal / (1024 * 1024))}MB. Reduce el peso total.`);
                }
                return;
            }
            const inputsByFile = fileInputs.flatMap((input)=>Array.from(input.files || []).map((file)=>({
                        input,
                        file
                    })));
            for (const { input, file } of inputsByFile){
                const error = validateFile(file);
                if (!error) continue;
                ev.preventDefault();
                __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.title, {
                    description: error.description
                });
                setInputError(input, error.inline);
                return;
            }
        };
        const fileChangeHandler = (ev)=>{
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
                __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.title, {
                    description: error.description
                });
                setInputError(input, error.inline);
                return;
            }
            const files = getFormFiles(form);
            const maxTotal = resolveMaxTotal(form);
            const total = files.reduce((sum, f)=>sum + (f?.size || 0), 0);
            if (total > maxTotal) {
                input.value = "";
                notifyTotalLimit(maxTotal);
                setInputError(input, `La suma de archivos supera ~${Math.floor(maxTotal / (1024 * 1024))}MB. Reduce el peso total.`);
            }
        };
        const forms = Array.from(document.querySelectorAll("form[data-attachment-form='true']"));
        forms.forEach((f)=>f.addEventListener("submit", uploadHandler));
        const fileInputs = forms.flatMap((f)=>Array.from(f.querySelectorAll('input[type="file"]')));
        fileInputs.forEach((input)=>input.addEventListener("change", fileChangeHandler));
        const confirmHandler = (ev)=>{
            const form = ev.target;
            const message = form.dataset.confirm;
            if (!message) return;
            const ok = window.confirm(message);
            if (!ok) {
                ev.preventDefault();
                ev.stopPropagation();
            }
        };
        const confirmForms = Array.from(document.querySelectorAll("form[data-confirm]"));
        confirmForms.forEach((f)=>f.addEventListener("submit", confirmHandler));
        const preserveForms = Array.from(document.querySelectorAll("form[data-preserve-form]"));
        const preserveHandlers = [];
        preserveForms.forEach((f)=>{
            const targetId = f.dataset.preserveForm;
            if (!targetId) return;
            const handler = ()=>stashForm(targetId);
            preserveHandlers.push({
                form: f,
                handler
            });
            f.addEventListener("submit", handler);
        });
        return ()=>{
            forms.forEach((f)=>f.removeEventListener("submit", uploadHandler));
            fileInputs.forEach((input)=>input.removeEventListener("change", fileChangeHandler));
            confirmForms.forEach((f)=>f.removeEventListener("submit", confirmHandler));
            preserveHandlers.forEach(({ form, handler })=>form.removeEventListener("submit", handler));
        };
    }, []);
    return null;
}
}),
"[project]/v1_emprende_upc/components/panel/panel-toast-trigger.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanelToastTrigger",
    ()=>PanelToastTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function PanelToastTrigger({ initialError, initialOk }) {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const shown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const error = initialError || searchParams.get("error") || undefined;
    const ok = initialOk || searchParams.get("ok") || undefined;
    const targetHref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const params = new URLSearchParams(searchParams.toString());
        params.delete("error");
        params.delete("ok");
        const query = params.toString();
        return `/panel${query ? `?${query}` : ""}`;
    }, [
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (shown.current) return;
        if (error) {
            shown.current = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("No se pudo completar la acción", {
                description: error
            });
            window.history.replaceState(null, "", targetHref);
        } else if (ok) {
            shown.current = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Listo", {
                description: "Acción completada"
            });
            window.history.replaceState(null, "", targetHref);
        }
    }, [
        error,
        ok,
        targetHref
    ]);
    return null;
}
}),
];

//# sourceMappingURL=v1_emprende_upc_components_panel_e289fd97._.js.map