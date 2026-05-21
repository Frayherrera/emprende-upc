import { prisma } from "@/lib/prisma";
import { EventCard } from "@/components/eventos/event-card";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Eventos | Emprende UPC",
  description: "Próximos eventos universitarios.",
};

export default async function EventosPage() {
  const events = await prisma.event.findMany({
    orderBy: { dateTime: "asc" },
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Eventos</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Próximos eventos y actividades universitarias.
        </p>
      </div>

      {events.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border/60 py-20 text-center">
          <p className="text-muted-foreground">No hay eventos próximos</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              description={event.description}
              mainImage={event.mainImage}
              dateTime={event.dateTime.toISOString()}
              location={event.location}
            />
          ))}
        </div>
      )}
    </div>
  );
}
