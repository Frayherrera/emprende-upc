import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { CreateEventForm } from "@/components/eventos/create-event-form";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Crear evento | Emprende UPC",
};

async function ensureAdmin() {
  const session = await getServerSession(authOptions);
  if (!session?.user || session.user.role !== "ADMIN") {
    redirect("/panel");
  }
}

export default async function NuevoEventoPage() {
  await ensureAdmin();

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 md:px-8 md:py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold uppercase text-foreground">Crear evento</h1>
        <p className="text-sm text-muted-foreground">
          Completa los datos para crear un nuevo evento.
        </p>
      </div>

      <div className="rounded-xl border border-border/60 bg-card p-6 shadow-sm">
        <CreateEventForm />
      </div>
    </div>
  );
}
