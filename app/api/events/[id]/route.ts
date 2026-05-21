import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { del } from "@vercel/blob";
import { prisma } from "@/lib/prisma";

export async function DELETE(
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

    if (event.mainImage?.includes("blob.vercel-storage.com")) {
      await del(event.mainImage).catch(() => {});
    }

    await prisma.event.delete({ where: { id } });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("events_delete_error", error);
    return NextResponse.json({ error: "Error al eliminar evento" }, { status: 500 });
  }
}
