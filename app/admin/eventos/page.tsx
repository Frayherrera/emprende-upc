import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { Plus, ChevronRight } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AdminEventsList } from "./admin-events-list";

export const dynamic = "force-dynamic";

async function ensureAdmin() {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/panel");
  }
}

export default async function AdminEventosPage() {
  await ensureAdmin();

  const events = await prisma.event.findMany({
    orderBy: { dateTime: "desc" },
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-12">
      <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/admin" className="transition-colors hover:text-foreground">
          Admin
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground">Eventos</span>
      </nav>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold uppercase text-foreground">Eventos</h1>
          <p className="text-sm text-muted-foreground">
            Gestiona los eventos de la plataforma.
          </p>
        </div>
        <Button asChild className="gap-2">
          <Link href="/admin/eventos/nuevo">
            <Plus className="h-4 w-4" />
            Crear evento
          </Link>
        </Button>
      </div>

      {events.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border/60 py-20 text-center">
          <p className="mb-4 text-muted-foreground">No hay eventos aún</p>
          <Button asChild>
            <Link href="/admin/eventos/nuevo">Crear primer evento</Link>
          </Button>
        </div>
      ) : (
        <AdminEventsList
          events={events.map((e) => ({
            ...e,
            dateTime: e.dateTime.toISOString(),
          }))}
        />
      )}
    </div>
  );
}
