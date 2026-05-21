"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface DeleteEventButtonProps {
  eventId: string;
}

export function DeleteEventButton({ eventId }: DeleteEventButtonProps) {
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("¿Eliminar este evento?")) return;

    setDeleting(true);
    try {
      const res = await fetch(`/api/events/${eventId}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json();
        toast.error(data.error || "Error al eliminar");
        return;
      }
      toast.success("Evento eliminado");
      router.refresh();
    } catch {
      toast.error("Error al eliminar evento");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-8 w-8 text-muted-foreground hover:text-destructive"
      onClick={handleDelete}
      disabled={deleting}
    >
      {deleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
    </Button>
  );
}
