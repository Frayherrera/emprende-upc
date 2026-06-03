"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProgramData {
  program: string;
  count: number;
}

interface AttendanceStatModalProps {
  open: boolean;
  onClose: () => void;
  total: number;
  byProgram: ProgramData[];
}

const SHORT_PROGRAM: Record<string, string> = {
  "Administración de Empresas": "Adm. Empresas",
  "Contaduría Pública": "Contaduría",
  "Derecho": "Derecho",
  "Economía": "Economía",
  "Licenciatura en Literatura y Lengua Castellana": "Lit. y Lengua",
  "Ingeniería Ambiental y Sanitaria": "Ing. Ambiental",
  "Ingeniería de Sistemas": "Ing. Sistemas",
  "Ingeniería Agroindustrial": "Ing. Agroindustrial",
  "Ingeniería Agropecuaria": "Ing. Agropecuaria",
  "Licenciatura en Educación Física, Recreación y Deporte": "Ed. Física",
};

function handleExportCSV(byProgram: ProgramData[], total: number) {
  const rows = [
    ["Programa", "Asistencias"],
    ...byProgram.map((p) => [p.program, p.count]),
    ["Total", total],
  ];
  const csv = rows.map((r) => r.join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "asistencias.csv";
  a.click();
  URL.revokeObjectURL(url);
}

export function AttendanceStatModal({ open, onClose, total, byProgram }: AttendanceStatModalProps) {
  if (!open) return null;

  const maxProgram = Math.max(...byProgram.map((p) => p.count), 1);
  const topProgram = byProgram[0];

  const chartW = 580;
  const chartH = 200;
  const padL = 48;
  const padR = 16;
  const padT = 24;
  const padB = 48;
  const innerW = chartW - padL - padR;
  const innerH = chartH - padT - padB;
  const barW = Math.max(28, innerW / byProgram.length - 16);
  const yTicks = [0, Math.ceil(maxProgram * 0.5), maxProgram];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border/70 bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 p-6 pb-4">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </span>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Asistencias registradas</h2>
              <p className="text-sm text-muted-foreground">Distribución de asistencias por programa académico.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              className="gap-1.5 text-xs"
              onClick={() => handleExportCSV(byProgram, total)}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-green-600">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5h3V9h4v3h3l-5 5z"/>
              </svg>
              Exportar CSV
            </Button>
            <button
              onClick={onClose}
              className="rounded-md p-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="space-y-6 px-6 pb-6">
          <div>
            <p className="mb-3 text-sm font-semibold text-foreground">Asistencias por programa académico</p>
            <div className="overflow-x-auto">
              <svg viewBox={`0 0 ${chartW} ${chartH}`} width="100%" className="overflow-visible min-w-[420px]">
                {yTicks.map((tick) => {
                  const y = padT + innerH - (tick / maxProgram) * innerH;
                  return (
                    <g key={tick}>
                      <line x1={padL} y1={y} x2={padL + innerW} y2={y} stroke="currentColor" strokeOpacity="0.08" strokeWidth="1" />
                      <text x={padL - 6} y={y + 4} textAnchor="end" fontSize="11" fill="currentColor" opacity="0.45">{tick}</text>
                    </g>
                  );
                })}

                {byProgram.map((p, i) => {
                  const barH = Math.max(2, (p.count / maxProgram) * innerH);
                  const x = padL + (i / byProgram.length) * innerW + (innerW / byProgram.length - barW) / 2;
                  const y = padT + innerH - barH;
                  const label = SHORT_PROGRAM[p.program] || p.program.split(" ").slice(0, 2).join(" ");
                  return (
                    <g key={p.program}>
                      <rect x={x} y={y} width={barW} height={barH} rx="4" fill="#06b6d4" opacity="0.85" />
                      <text x={x + barW / 2} y={y - 6} textAnchor="middle" fontSize="11" fontWeight="600" fill="currentColor" opacity="0.7">
                        {p.count}
                      </text>
                      <text x={x + barW / 2} y={padT + innerH + 16} textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.5">
                        {label}
                      </text>
                    </g>
                  );
                })}

                <text x={12} y={padT + innerH / 2} textAnchor="middle" fontSize="10" fill="currentColor" opacity="0.4" transform={`rotate(-90, 12, ${padT + innerH / 2})`}>
                  Cantidad de asistencias
                </text>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="flex items-start gap-2 rounded-xl border border-border/60 bg-muted/30 p-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Total de asistencias</p>
                <p className="text-2xl font-semibold">{total}</p>
              </div>
            </div>

            <div className="flex items-start gap-2 rounded-xl border border-border/60 bg-muted/30 p-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Programas participantes</p>
                <p className="text-2xl font-semibold">{byProgram.length}</p>
              </div>
            </div>

            <div className="flex items-start gap-2 rounded-xl border border-border/60 bg-muted/30 p-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Promedio por programa</p>
                <p className="text-2xl font-semibold">{byProgram.length ? Math.round(total / byProgram.length) : 0}</p>
              </div>
            </div>

            <div className="flex items-start gap-2 rounded-xl border border-border/60 bg-muted/30 p-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V18H9v2h6v-2h-2v-2.1a5.01 5.01 0 0 0 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z"/></svg>
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Programa con más asistencias</p>
                <p className="text-base font-semibold leading-tight">
                  {topProgram ? (SHORT_PROGRAM[topProgram.program] || topProgram.program) : "-"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border/60 px-6 py-3">
          <p className="text-xs text-muted-foreground">Los datos se actualizan cada 24 horas.</p>
          <Button size="sm" variant="outline" onClick={onClose}>Cerrar</Button>
        </div>
      </div>
    </div>
  );
}
