import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      orderBy: { dateTime: "asc" },
    });
    return NextResponse.json(events);
  } catch (error) {
    console.error("events_get_error", error);
    return NextResponse.json({ error: "Error al obtener eventos" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const token = await getToken({ req: req as any, secret: process.env.NEXTAUTH_SECRET });
    if (!token || token.role !== "ADMIN") {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const body = await req.json();
    const { title, description, dateTime, location } = body;

    if (!title || typeof title !== "string" || !title.trim()) {
      return NextResponse.json({ error: "El título es requerido" }, { status: 400 });
    }
    if (!dateTime) {
      return NextResponse.json({ error: "La fecha y hora es requerida" }, { status: 400 });
    }
    if (!location || typeof location !== "string" || !location.trim()) {
      return NextResponse.json({ error: "El lugar es requerido" }, { status: 400 });
    }

    const event = await prisma.event.create({
      data: {
        title: title.trim(),
        description: description?.trim() || null,
        dateTime: new Date(dateTime),
        location: location.trim(),
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error("events_create_error", error);
    return NextResponse.json({ error: "Error al crear evento" }, { status: 500 });
  }
}
