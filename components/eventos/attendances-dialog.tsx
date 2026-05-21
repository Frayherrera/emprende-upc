"use client";

import { useState, useEffect, useCallback } from "react";
import { Loader2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface AttendanceRecord {
  id: string;
  studentName: string;
  academicProgram: { name: string };
  createdAt: string;
}

interface AttendancesDialogProps {
  eventId: string;
  eventTitle: string;
}

export function AttendancesDialog({ eventId, eventTitle }: AttendancesDialogProps) {
  const [attendances, setAttendances] = useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const fetchAttendances = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/events/${eventId}/attendances`);
      const data = await res.json();
      setAttendances(data);
    } catch {
      // silent
    } finally {
      setLoading(false);
    }
  }, [eventId]);

  useEffect(() => {
    if (!open) return;
    fetchAttendances();
  }, [open, fetchAttendances]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
          <Users className="h-3.5 w-3.5" />
          Asistencias
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Asistencias — {eventTitle}</DialogTitle>
          <DialogDescription>
            {loading
              ? "Cargando..."
              : `Total: ${attendances.length} estudiante${attendances.length !== 1 ? "s" : ""}`}
          </DialogDescription>
        </DialogHeader>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : attendances.length === 0 ? (
          <div className="py-12 text-center text-sm text-muted-foreground">
            No hay asistencias registradas para este evento.
          </div>
        ) : (
          <div className="max-h-80 overflow-y-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60 text-left">
                  <th className="pb-2 pr-4 font-medium text-foreground">#</th>
                  <th className="pb-2 pr-4 font-medium text-foreground">Estudiante</th>
                  <th className="pb-2 font-medium text-foreground">Programa</th>
                </tr>
              </thead>
              <tbody>
                {attendances.map((a, i) => (
                  <tr key={a.id} className="border-b border-border/30">
                    <td className="py-2 pr-4 text-muted-foreground">{i + 1}</td>
                    <td className="py-2 pr-4 text-foreground">{a.studentName}</td>
                    <td className="py-2 text-muted-foreground">{a.academicProgram.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
