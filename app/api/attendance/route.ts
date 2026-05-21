import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const attendanceSchema = z.object({
  eventId: z.string().min(1, "Evento requerido"),
  studentName: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(200),
  academicProgramId: z.string().min(1, "Selecciona un programa académico"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = attendanceSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Datos inválidos", issues: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { eventId, studentName, academicProgramId } = parsed.data;

    const event = await prisma.event.findUnique({ where: { id: eventId } });
    if (!event) {
      return NextResponse.json({ error: "Evento no encontrado" }, { status: 404 });
    }

    const program = await prisma.academicProgram.findUnique({ where: { id: academicProgramId } });
    if (!program) {
      return NextResponse.json({ error: "Programa académico no encontrado" }, { status: 404 });
    }

    const attendance = await prisma.attendance.create({
      data: { eventId, studentName: studentName.trim(), academicProgramId },
    });

    return NextResponse.json(
      { ok: true, message: "Asistencia confirmada correctamente.", attendance },
      { status: 201 }
    );
  } catch (error) {
    console.error("attendance_error", error);
    return NextResponse.json({ error: "Error al confirmar asistencia" }, { status: 500 });
  }
}
