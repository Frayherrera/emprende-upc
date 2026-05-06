"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MiniLineChart } from "./mini-line-chart";
import { StatChartModal } from "./stat-chart-modal";

interface DayData {
  key: string;
  label: string;
  value: number;
}

interface StatCardProps {
  title: string;
  value: number | string;
  description: string;
  color: string;
  unit: string;
  data: DayData[];
  delta?: { label: string; tone: string; symbol: string };
  icon: React.ReactNode;
  rangeDays: number;
}

export function StatCard({
  title,
  value,
  description,
  color,
  unit,
  data,
  delta,
  icon,
  rangeDays,
}: StatCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        className="cursor-pointer border-border/70 bg-card/90 shadow-sm transition hover:shadow-md hover:border-primary/40"
        onClick={() => setOpen(true)}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ backgroundColor: `${color}20`, color }}
            >
              {icon}
            </span>
            <CardTitle className="text-sm text-muted-foreground">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-semibold">{value}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
          <div className="mt-3 flex justify-end">
            <MiniLineChart values={data.map((d) => d.value)} color={color} />
          </div>
          {delta && (
            <p className={`mt-1 inline-flex items-center gap-1 text-xs font-medium ${delta.tone}`}>
              <span>{delta.symbol}</span>
              <span>{delta.label}</span>
            </p>
          )}
        </CardContent>
      </Card>

      <StatChartModal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        description={description}
        color={color}
        unit={unit}
        data={data}
        delta={delta}
        icon={icon}
        rangeDays={rangeDays}
      />
    </>
  );
}