import { notFound } from "next/navigation";
import { Calendar, MapPin, ArrowLeft } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { AttendanceForm } from "@/components/eventos/attendance-form";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const event = await prisma.event.findUnique({ where: { id } });
  if (!event) return { title: "Evento no encontrado | Emprende UPC" };
  return {
    title: `${event.title} | Emprende UPC`,
    description: event.description || "Detalle del evento",
  };
}

export default async function EventoDetailPage({ params }: PageProps) {
  const { id } = await params;
  const event = await prisma.event.findUnique({ where: { id } });

  if (!event) notFound();

  const date = event.dateTime.toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = event.dateTime.toLocaleTimeString("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:px-8 md:py-12">
      <Link
        href="/eventos"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a eventos
      </Link>

      <div className="overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm">
        {event.mainImage ? (
          <div className="aspect-video w-full overflow-hidden bg-muted">
            <img
              src={event.mainImage}
              alt={event.title}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="flex aspect-video items-center justify-center bg-muted">
            <Calendar className="h-16 w-16 text-muted-foreground/30" />
          </div>
        )}

        <div className="space-y-6 p-6 md:p-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">
              {event.title}
            </h1>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:gap-6">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {date} — {time}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {event.location}
              </span>
            </div>
          </div>

          {event.description && (
            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Acerca del evento
              </h2>
              <p className="text-sm leading-relaxed text-foreground/80">
                {event.description}
              </p>
            </div>
          )}

          <hr className="border-border/60" />

          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Confirmar asistencia
            </h2>
            <div className="max-w-md">
              <AttendanceForm eventId={event.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
