import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const programs = await prisma.academicProgram.findMany({
      orderBy: { name: "asc" },
    });
    return NextResponse.json(programs);
  } catch (error) {
    console.error("academic_programs_error", error);
    return NextResponse.json({ error: "Error al obtener programas" }, { status: 500 });
  }
}
