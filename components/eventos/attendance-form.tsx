"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const attendanceSchema = z.object({
  studentName: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(200),
  academicProgramId: z.string().min(1, "Selecciona un programa académico"),
});

type AttendanceFormData = z.infer<typeof attendanceSchema>;

interface AttendanceFormProps {
  eventId: string;
}

interface Program {
  id: string;
  name: string;
}

export function AttendanceForm({ eventId }: AttendanceFormProps) {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AttendanceFormData>({
    resolver: zodResolver(attendanceSchema),
  });

  useEffect(() => {
    fetch("/api/academic-programs")
      .then((r) => r.json())
      .then(setPrograms)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const onSubmit = async (data: AttendanceFormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/attendance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, eventId }),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.error || "Error al confirmar asistencia");
        return;
      }

      toast.success("Asistencia confirmada correctamente.", {
        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      });
      reset();
    } catch {
      toast.error("Error al conectar con el servidor");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="studentName">Nombre completo</Label>
        <Input
          id="studentName"
          placeholder="Ej: Juan Pérez"
          {...register("studentName")}
        />
        {errors.studentName && (
          <p className="text-xs text-destructive">{errors.studentName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="academicProgramId">Programa académico</Label>
        {loading ? (
          <div className="flex h-10 items-center gap-2 rounded-lg border border-border/60 bg-muted/30 px-3 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Cargando programas...
          </div>
        ) : (
          <select
            id="academicProgramId"
            {...register("academicProgramId")}
            className="flex h-10 w-full rounded-lg border border-border/60 bg-background px-3 py-2 text-sm text-foreground shadow-sm transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          >
            <option value="">Selecciona un programa</option>
            {programs.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        )}
        {errors.academicProgramId && (
          <p className="text-xs text-destructive">{errors.academicProgramId.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full gap-2" disabled={submitting}>
        {submitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <CheckCircle className="h-4 w-4" />
        )}
        {submitting ? "Confirmando..." : "Confirmar asistencia"}
      </Button>
    </form>
  );
}
