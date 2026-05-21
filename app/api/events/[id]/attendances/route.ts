import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const event = await prisma.event.findUnique({ where: { id } });
    if (!event) {
      return NextResponse.json({ error: "Evento no encontrado" }, { status: 404 });
    }

    const attendances = await prisma.attendance.findMany({
      where: { eventId: id },
      include: {
        academicProgram: { select: { name: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(attendances);
  } catch (error) {
    console.error("attendances_get_error", error);
    return NextResponse.json({ error: "Error al obtener asistencias" }, { status: 500 });
  }
}
