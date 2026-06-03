"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MiniLineChart } from "./mini-line-chart";
import { AttendanceStatModal } from "./attendance-stat-modal";

interface DayData { key: string; label: string; value: number; }
interface ProgramData { program: string; count: number; }

interface AttendanceStatCardProps {
  attendanceCount: number;
  attendancesSeries: DayData[];
  byProgram: ProgramData[];
}

export function AttendanceStatCard({ attendanceCount, attendancesSeries, byProgram }: AttendanceStatCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        className="cursor-pointer border-border/70 bg-card/90 shadow-sm transition hover:shadow-md hover:border-primary/40"
        onClick={() => setOpen(true)}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
            </span>
            <CardTitle className="text-sm text-muted-foreground">Asistencias registradas</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-semibold">{attendanceCount}</p>
          <p className="text-xs text-muted-foreground">Confirmaciones de asistencia a eventos.</p>
          <div className="mt-3 flex justify-end">
            <MiniLineChart values={attendancesSeries.map((d) => d.value)} color="#06b6d4" />
          </div>
        </CardContent>
      </Card>

      <AttendanceStatModal
        open={open}
        onClose={() => setOpen(false)}
        total={attendanceCount}
        byProgram={byProgram}
      />
    </>
  );
}
