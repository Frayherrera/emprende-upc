"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MiniLineChart } from "./mini-line-chart";
import { VentureStatModal } from "./venture-stat-modal";

interface DayData { key: string; label: string; value: number; }
interface ProgramData { program: string; count: number; }
interface CategoryData { category: string; count: number; }

interface VentureStatCardProps {
  ventureCount: number;
  venturesSeries: DayData[];
  byProgram: ProgramData[];
  byCategory: CategoryData[];
}

export function VentureStatCard({ ventureCount, venturesSeries, byProgram, byCategory }: VentureStatCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        className="cursor-pointer border-border/70 bg-card/90 shadow-sm transition hover:shadow-md hover:border-primary/40"
        onClick={() => setOpen(true)}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4C8.9 3 8 3.9 8 5v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-8-2h4v2h-4V5z"/>
              </svg>
            </span>
            <CardTitle className="text-sm text-muted-foreground">Emprendimientos</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-semibold">{ventureCount}</p>
          <p className="text-xs text-muted-foreground">Total histórico de proyectos creados.</p>
          <div className="mt-3 flex justify-end">
            <MiniLineChart values={venturesSeries.map((d) => d.value)} color="#10b981" />
          </div>
        </CardContent>
      </Card>

      <VentureStatModal
        open={open}
        onClose={() => setOpen(false)}
        total={ventureCount}
        byProgram={byProgram}
        byCategory={byCategory}
      />
    </>
  );
}