import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { put, del } from "@vercel/blob";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const token = await getToken({ req: req as any, secret: process.env.NEXTAUTH_SECRET });
    if (!token || token.role !== "ADMIN") {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const { id } = await params;

    const event = await prisma.event.findUnique({ where: { id } });
    if (!event) {
      return NextResponse.json({ error: "Evento no encontrado" }, { status: 404 });
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Archivo no encontrado" }, { status: 400 });
    }

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      return NextResponse.json({ error: "Formato no permitido. Usa JPG, PNG o WEBP" }, { status: 400 });
    }

    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "La imagen debe ser menor a 5MB" }, { status: 400 });
    }

    const ext = file.name.split(".").pop() || "jpg";
    const blob = await put(`events/${id}/main-${Date.now()}.${ext}`, file, {
      access: "public",
    });

    if (event.mainImage?.includes("blob.vercel-storage.com")) {
      await del(event.mainImage).catch(() => {});
    }

    await prisma.event.update({
      where: { id },
      data: { mainImage: blob.url },
    });

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error("event_main_image_upload_error", error);
    return NextResponse.json({ error: "Error al subir imagen" }, { status: 500 });
  }
}
