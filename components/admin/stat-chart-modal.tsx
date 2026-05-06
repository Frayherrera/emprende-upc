"use client";

import { useState } from "react";
import { X, TrendingUp, TrendingDown, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DayData {
  key: string;
  label: string;
  value: number;
}

interface StatChartModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  color: string;
  unit: string;
  data: DayData[];
  delta?: {
    label: string;
    tone: string;
    symbol: string;
  };
  icon: React.ReactNode;
  rangeDays: number;
}

export function StatChartModal({
  open,
  onClose,
  title,
  description,
  color,
  unit,
  data,
  delta,
  icon,
  rangeDays,
}: StatChartModalProps) {
  if (!open) return null;

  const values = data.map((d) => d.value);
  const max = Math.max(...values, 1);
  const total = values.reduce((a, b) => a + b, 0);
  const avg = total / (values.length || 1);
  const maxVal = Math.max(...values);
  const minVal = Math.min(...values);
  const maxDay = data[values.indexOf(maxVal)];
  const minDay = data[values.indexOf(minVal)];
  const firstDay = data[0];
  const lastDay = data[data.length - 1];

  const chartW = 640;
  const chartH = 260;
  const padL = 40;
  const padR = 16;
  const padT = 16;
  const padB = 40;
  const innerW = chartW - padL - padR;
  const innerH = chartH - padT - padB;
  const barW = Math.max(4, innerW / data.length - 4);

  // Y axis ticks
  const yTicks = [0, Math.round(max * 0.25), Math.round(max * 0.5), Math.round(max * 0.75), max];

  function formatDay(key: string) {
    const d = new Date(`${key}T00:00:00`);
    return new Intl.DateTimeFormat("es", { day: "numeric", month: "short" }).format(d);
  }

  // X axis: show ~5 labels
  const xLabelStep = Math.max(1, Math.floor(data.length / 5));
  const xLabels = data.filter((_, i) => i % xLabelStep === 0);

  function handleExportCSV() {
    const rows = [["Fecha", "Valor"], ...data.map((d) => [formatDay(d.key), d.value])];
    const csv = rows.map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.replace(/\s+/g, "_")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-border/70 bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 p-6 pb-4">
          <div className="flex items-start gap-4">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: `${color}20`, color }}
            >
              {icon}
            </span>
            <div>
              <h2 className="text-xl font-semibold text-foreground">{title}</h2>
              <p className="text-sm text-muted-foreground">{description}</p>
              {delta && (
                <p className={`mt-1 text-sm font-medium ${delta.tone}`}>
                  {delta.symbol} {delta.label}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" onClick={handleExportCSV} className="gap-1.5 text-xs">
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

        {/* Chart */}
        <div className="overflow-x-auto px-6">
          <svg
            viewBox={`0 0 ${chartW} ${chartH}`}
            width="100%"
            className="overflow-visible"
          >
            {/* Y grid lines + labels */}
            {yTicks.map((tick) => {
              const y = padT + innerH - (tick / max) * innerH;
              return (
                <g key={tick}>
                  <line
                    x1={padL}
                    y1={y}
                    x2={padL + innerW}
                    y2={y}
                    stroke="currentColor"
                    strokeOpacity="0.08"
                    strokeWidth="1"
                  />
                  <text
                    x={padL - 6}
                    y={y + 4}
                    textAnchor="end"
                    fontSize="11"
                    fill="currentColor"
                    opacity="0.45"
                  >
                    {tick}
                  </text>
                </g>
              );
            })}

            {/* Bars */}
            {data.map((d, i) => {
              const barH = Math.max(2, (d.value / max) * innerH);
              const x = padL + (i / data.length) * innerW + (innerW / data.length - barW) / 2;
              const y = padT + innerH - barH;
              const isMax = d.value === maxVal;
              return (
                <g key={d.key}>
                  <rect
                    x={x}
                    y={y}
                    width={barW}
                    height={barH}
                    rx="3"
                    fill={color}
                    opacity={isMax ? 1 : 0.65}
                  />
                </g>
              );
            })}

            {/* X axis labels */}
            {xLabels.map((d) => {
              const i = data.indexOf(d);
              const x = padL + (i / data.length) * innerW + (innerW / data.length) / 2;
              return (
                <text
                  key={d.key}
                  x={x}
                  y={padT + innerH + 24}
                  textAnchor="middle"
                  fontSize="11"
                  fill="currentColor"
                  opacity="0.5"
                >
                  {d.label}
                </text>
              );
            })}

            {/* Y axis label */}
            <text
              x={12}
              y={padT + innerH / 2}
              textAnchor="middle"
              fontSize="11"
              fill="currentColor"
              opacity="0.45"
              transform={`rotate(-90, 12, ${padT + innerH / 2})`}
            >
              {unit}
            </text>

            {/* Legend */}
            <circle cx={padL + innerW / 2 - 30} cy={10} r="5" fill={color} />
            <text x={padL + innerW / 2 - 20} y={14} fontSize="11" fill="currentColor" opacity="0.6">
              {title}
            </text>
          </svg>
        </div>

        {/* Stats summary */}
        <div className="grid grid-cols-2 gap-3 p-6 pt-4 sm:grid-cols-4">
          <div className="flex items-start gap-2 rounded-xl border border-border/60 bg-muted/30 p-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <TrendingUp className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Promedio diario</p>
              <p className="text-xl font-semibold">{avg.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground">{unit}</p>
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-xl border border-border/60 bg-muted/30 p-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <TrendingUp className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Día con más actividad</p>
              <p className="text-xl font-semibold">{maxVal}</p>
              <p className="text-xs text-muted-foreground">{maxDay ? formatDay(maxDay.key) : "-"}</p>
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-xl border border-border/60 bg-muted/30 p-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500">
              <TrendingDown className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Día con menos actividad</p>
              <p className="text-xl font-semibold">{minVal}</p>
              <p className="text-xs text-muted-foreground">{minDay ? formatDay(minDay.key) : "-"}</p>
            </div>
          </div>

          <div className="flex items-start gap-2 rounded-xl border border-border/60 bg-muted/30 p-3">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
              <Calendar className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Período analizado</p>
              <p className="text-xl font-semibold">{rangeDays} días</p>
              <p className="text-xs text-muted-foreground">
                {firstDay ? formatDay(firstDay.key) : "-"} – {lastDay ? formatDay(lastDay.key) : "-"}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border/60 px-6 py-3">
          <p className="text-xs text-muted-foreground">Los datos se actualizan cada 24 horas.</p>
          <Button size="sm" variant="outline" onClick={onClose}>Cerrar</Button>
        </div>
      </div>
    </div>
  );
}