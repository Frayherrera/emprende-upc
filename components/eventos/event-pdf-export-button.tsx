"use client";

import { useState } from "react";
import { jsPDF } from "jspdf";
import { toDataURL } from "qrcode";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventPdfExportButtonProps {
  eventId: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string | null;
}

export function EventPdfExportButton({
  eventId,
  title,
  date,
  time,
  location,
  description,
}: EventPdfExportButtonProps) {
  const [generating, setGenerating] = useState(false);

  const handleDownload = async () => {
    setGenerating(true);

    try {
      const eventUrl = `${window.location.origin}/eventos/${eventId}`;
      const qrDataUrl = await toDataURL(eventUrl, {
        margin: 1,
        width: 220,
        color: { dark: "#000000", light: "#ffffff" },
      });

      const doc = new jsPDF({ unit: "pt", format: "a4" });
      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 40;
      const contentWidth = pageWidth - margin * 2;

      doc.setFillColor(14, 82, 255);
      doc.rect(0, 0, pageWidth, 110, "F");

      doc.setFont("helvetica", "bold");
      doc.setFontSize(24);
      doc.setTextColor("#ffffff");
      doc.text(title, margin, 64, { maxWidth: contentWidth });

      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");
      doc.setTextColor("#dbeafe");
      doc.text(`${date} · ${time} · ${location}`, margin, 86, { maxWidth: contentWidth });

      doc.setDrawColor("#cbd5e1");
      doc.setLineWidth(0.5);
      doc.line(margin, 118, pageWidth - margin, 118);

      let y = 140;
      doc.setTextColor("#0f172a");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("Presentación del evento", margin, y);

      y += 20;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      const descriptionText =
        description || "Escanea el código QR para confirmar tu asistencia al evento.";
      const descriptionLines = doc.splitTextToSize(descriptionText, contentWidth - 190);
      doc.text(descriptionLines, margin, y);

      const qrX = pageWidth - margin - 180;
      const qrY = 138;
      doc.addImage(qrDataUrl, "PNG", qrX, qrY, 180, 180);

      doc.setFontSize(10);
      doc.setTextColor("#475569");
      doc.text("Escanea este QR para confirmar tu asistencia", qrX + 90, qrY + 190, {
        maxWidth: 180,
        align: "center",
      });

      doc.setFontSize(9);
      doc.setTextColor("#64748b");
      doc.text(`URL de acceso: ${eventUrl}`, margin, pageWidth > 580 ? 760 : 740, {
        maxWidth: contentWidth,
      });

      const filename = `${title.replace(/[^a-zA-Z0-9]+/g, "_") || "evento"}_presentacion.pdf`;
      doc.save(filename);
    } catch (error) {
      console.error("Error generating event PDF", error);
      window.alert("No se pudo generar el PDF. Intenta nuevamente.");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <Button
      size="sm"
      variant="secondary"
      onClick={handleDownload}
      disabled={generating}
      className="shadow-sm transition-transform duration-150 hover:-translate-y-0.5"
    >
      {generating ? (
        "Generando..."
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          Exportar presentación
        </>
      )}
    </Button>
  );
}
