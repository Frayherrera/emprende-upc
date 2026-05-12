(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/v1_emprende_upc/components/panel/panel-toast-trigger.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanelToastTrigger",
    ()=>PanelToastTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PanelToastTrigger({ initialError, initialOk }) {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const shown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const error = initialError || searchParams.get("error") || undefined;
    const ok = initialOk || searchParams.get("ok") || undefined;
    const targetHref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PanelToastTrigger.useMemo[targetHref]": ()=>{
            const params = new URLSearchParams(searchParams.toString());
            params.delete("error");
            params.delete("ok");
            const query = params.toString();
            return `/panel${query ? `?${query}` : ""}`;
        }
    }["PanelToastTrigger.useMemo[targetHref]"], [
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PanelToastTrigger.useEffect": ()=>{
            if (shown.current) return;
            if (error) {
                shown.current = true;
                __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("No se pudo completar la acción", {
                    description: error
                });
                window.history.replaceState(null, "", targetHref);
            } else if (ok) {
                shown.current = true;
                __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Listo", {
                    description: "Acción completada"
                });
                window.history.replaceState(null, "", targetHref);
            }
        }
    }["PanelToastTrigger.useEffect"], [
        error,
        ok,
        targetHref
    ]);
    return null;
}
_s(PanelToastTrigger, "LE84AmAVJ29EZ/uwaHl4bqBK7m4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = PanelToastTrigger;
var _c;
__turbopack_context__.k.register(_c, "PanelToastTrigger");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=v1_emprende_upc_components_panel_69b786d6._.js.map