module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/v1_emprende_upc/app/api/chat/openai.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "openai",
    ()=>openai
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/openai/client.mjs [app-route] (ecmascript) <export OpenAI as default>");
;
const openai = new __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__OpenAI__as__default$3e$__["default"]({
    apiKey: process.env.OPENAI_API_KEY
});
}),
"[project]/v1_emprende_upc/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$app$2f$api$2f$chat$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/v1_emprende_upc/app/api/chat/openai.ts [app-route] (ecmascript)");
;
;
const runtime = "nodejs";
const dynamic = "force-dynamic";
const systemPrompt = `Eres un asistente de Emprende UPC.
- Idioma: responde siempre en español, breve y directo.
- Alcance: SOLO usa esta información; no inventes datos ni nombres propios nuevos.
  - Home (/): qué es la plataforma y CTA a explorar proyectos.
  - Emprendimientos (/emprendimientos, /emprendimientos/[id]): ver proyectos publicados y detalles.
  - Formación (/formacion): módulos en PDF/PPTX.
  - Panel (/panel): publicar y gestionar emprendimientos (subir info, adjuntar materiales).
  - Registro (/registro) y Login (/login): crear cuenta o iniciar sesión.
  - Recuperar contraseña (/reset): flujo de restablecimiento por correo.
- Si la pregunta NO está cubierta por esto, responde literalmente: "No tengo esa info en la plataforma. Puedo guiarte a la sección más cercana: /emprendimientos, /formacion, /panel, /registro, /login o /reset." No añadas nada más.
- Si te piden datos concretos (fechas, correos, programas, incubadoras) y no están en el listado, di que no los tienes.
- Responde en 3-5 oraciones máximo o viñetas breves.`;
async function POST(req) {
    try {
        const { messages } = await req.json();
        if (!Array.isArray(messages)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Mensaje inválido"
            }, {
                status: 400
            });
        }
        const chatMessages = messages.map((m)=>({
                role: m.role,
                content: m.content
            })).filter((m)=>(m.role === "user" || m.role === "assistant") && typeof m.content === "string" && m.content.trim().length > 0);
        if (chatMessages.length === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Mensaje vacío"
            }, {
                status: 400
            });
        }
        // Usar OpenAI Chat Completion
        const completion = await __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$app$2f$api$2f$chat$2f$openai$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["openai"].chat.completions.create({
            model: process.env.OPENAI_MODEL_ID || "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                ...chatMessages.map((m)=>({
                        role: m.role,
                        content: m.content
                    }))
            ],
            max_tokens: 300,
            temperature: 0.1,
            top_p: 0.8
        });
        const reply = completion.choices?.[0]?.message?.content || "";
        if (!reply.trim()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No se pudo generar respuesta"
            }, {
                status: 502
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            reply,
            model: completion.model
        });
    } catch (err) {
        console.error("chat error", err);
        const status = err?.status === 429 ? 429 : 500;
        const message = status === 429 ? "Límite alcanzado, intenta en unos minutos." : "No se pudo procesar el chat";
        return __TURBOPACK__imported__module__$5b$project$5d2f$v1_emprende_upc$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: message
        }, {
            status
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__832e0527._.js.map