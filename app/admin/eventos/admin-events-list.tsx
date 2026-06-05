"use client";

import { useState, useMemo } from "react";
import { Search, Calendar, MapPin, ImageOff } from "lucide-react";
import { DeleteEventButton } from "./delete-event-button";
import { AttendancesDialog } from "@/components/eventos/attendances-dialog";
import { EventPdfExportButton } from "@/components/eventos/event-pdf-export-button";

interface EventItem {
  id: string;
  title: string;
  description: string | null;
  mainImage: string | null;
  dateTime: string;
  location: string;
}

interface AdminEventsListProps {
  events: EventItem[];
}

export function AdminEventsList({ events }: AdminEventsListProps) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return events;
    const q = search.toLowerCase();
    return events.filter((e) => e.title.toLowerCase().includes(q));
  }, [events, search]);

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar eventos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-10 w-full rounded-lg border border-border/60 bg-background pl-10 pr-4 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border/60 py-16 text-center">
          <p className="text-muted-foreground">
            {search ? "No se encontraron eventos" : "No hay eventos aún"}
          </p>
        </div>
      ) : (
        <>
          {/* Desktop table */}
          <div className="hidden overflow-hidden rounded-xl border border-border/60 md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-muted/50">
                  <th className="px-4 py-3 text-left font-medium text-foreground">Imagen</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">Nombre</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">Fecha</th>
                  <th className="px-4 py-3 text-left font-medium text-foreground">Lugar</th>
                  <th className="px-4 py-3 text-center font-medium text-foreground">Asistencias</th>
                  <th className="px-4 py-3 text-center font-medium text-foreground">Exportar</th>
                  <th className="px-4 py-3 text-right font-medium text-foreground">Acción</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((event) => (
                  <tr key={event.id} className="border-b border-border/40 transition-colors hover:bg-muted/30">
                    <td className="px-4 py-3">
                      <div className="h-10 w-16 overflow-hidden rounded-md bg-muted">
                        {event.mainImage ? (
                          <img src={event.mainImage} alt="" className="h-full w-full object-cover" />
                        ) : (
                          <div className="flex h-full items-center justify-center text-muted-foreground">
                            <ImageOff className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3 font-medium text-foreground">{event.title}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {new Date(event.dateTime).toLocaleDateString("es-CO", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{event.location}</td>
                    <td className="px-4 py-3 text-center">
                      <AttendancesDialog eventId={event.id} eventTitle={event.title} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <EventPdfExportButton
                        eventId={event.id}
                        title={event.title}
                        date={new Date(event.dateTime).toLocaleDateString("es-CO", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                        time={new Date(event.dateTime).toLocaleTimeString("es-CO", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                        location={event.location}
                        description={event.description}
                        imageUrl={event.mainImage}
                      />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <DeleteEventButton eventId={event.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="space-y-3 md:hidden">
            {filtered.map((event) => (
              <div
                key={event.id}
                className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-4 shadow-sm"
              >
                <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-muted">
                  {event.mainImage ? (
                    <img src={event.mainImage} alt="" className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                      <ImageOff className="h-5 w-5" />
                    </div>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium text-foreground">{event.title}</p>
                  <div className="mt-1 flex flex-col gap-0.5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(event.dateTime).toLocaleDateString("es-CO", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </span>
                  </div>
                  <div className="mt-2 space-y-2">
                    <AttendancesDialog eventId={event.id} eventTitle={event.title} />
                    <EventPdfExportButton
                      eventId={event.id}
                      title={event.title}
                      date={new Date(event.dateTime).toLocaleDateString("es-CO", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                      time={new Date(event.dateTime).toLocaleTimeString("es-CO", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      location={event.location}
                      description={event.description}
                      imageUrl={event.mainImage}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
