"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MiniLineChart } from "./mini-line-chart";
import { StageCategoryModal } from "./stage-category-modal";

interface DayData {
  key: string;
  label: string;
  value: number;
}

interface StageData {
  stage: string;
  count: number;
  categories: string[];
}

interface StageCategoryCardProps {
  total: number;
  data: StageData[];
  series: DayData[];
  stageLabel: Record<string, string>;
}

export function StageCategoryCard({ total, data, series, stageLabel }: StageCategoryCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        className="cursor-pointer border-border/70 bg-card/90 shadow-sm transition hover:shadow-md hover:border-primary/40"
        onClick={() => setOpen(true)}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </span>
            <CardTitle className="text-sm text-muted-foreground">Nivel de madurez vs Categoría</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-semibold">{total}</p>
          <p className="text-xs text-muted-foreground">Emprendimientos por etapa de madurez y categoría.</p>
          <div className="mt-3 flex justify-end">
            <MiniLineChart values={series.map((d) => d.value)} color="#f59e0b" />
          </div>
        </CardContent>
      </Card>

      <StageCategoryModal
        open={open}
        onClose={() => setOpen(false)}
        data={data}
        total={total}
        stageLabel={stageLabel}
      />
    </>
  );
}
