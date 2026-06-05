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
  imageUrl?: string | null;
}

export function EventPdfExportButton({
  eventId,
  title,
  date,
  time,
  location,
  description,
  imageUrl,
}: EventPdfExportButtonProps) {
  const [generating, setGenerating] = useState(false);

  const loadImageDataUrl = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error cargando imagen: ${response.status}`);
    }

    const blob = await response.blob();
    const dataUrl = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result);
        } else {
          reject(new Error("No se pudo convertir la imagen a DataURL"));
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

    return new Promise<{ dataUrl: string; width: number; height: number }>((resolve, reject) => {
      const image = new Image();
      image.onload = () => {
        resolve({ dataUrl, width: image.naturalWidth, height: image.naturalHeight });
      };
      image.onerror = reject;
      image.src = dataUrl;
    });
  };

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
      if (imageUrl) {
        try {
          const imageData = await loadImageDataUrl(imageUrl);
          const maxImageWidth = contentWidth;
          const maxImageHeight = 220;
          let imageWidth = imageData.width;
          let imageHeight = imageData.height;
          const aspectRatio = imageWidth / imageHeight;

          if (imageWidth > maxImageWidth) {
            imageWidth = maxImageWidth;
            imageHeight = imageWidth / aspectRatio;
          }
          if (imageHeight > maxImageHeight) {
            imageHeight = maxImageHeight;
            imageWidth = imageHeight * aspectRatio;
          }

          doc.addImage(imageData.dataUrl, "JPEG", margin, 126, imageWidth, imageHeight);
          y = 126 + imageHeight + 26;
        } catch (error) {
          console.warn("No se pudo cargar la imagen del evento", error);
          y = 140;
        }
      }

      doc.setTextColor("#0f172a");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("Presentación del evento", margin, y);

      y += 20;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      const descriptionText =
        description || "Escanea el código QR para confirmar tu asistencia al evento.";
      const descriptionWidth = contentWidth - 220;
      const descriptionLines = doc.splitTextToSize(descriptionText, descriptionWidth);
      doc.text(descriptionLines, margin, y);

      const qrX = margin + descriptionWidth + 20;
      const qrY = y;
      doc.addImage(qrDataUrl, "PNG", qrX, qrY, 180, 180);

      doc.setFontSize(10);
      doc.setTextColor("#475569");
      doc.text("Escanea este QR para confirmar tu asistencia", qrX + 90, qrY + 190, {
        maxWidth: 180,
        align: "center",
      });

      const urlY = Math.max(y + descriptionLines.length * 14, qrY + 210) + 24;
      doc.setFontSize(9);
      doc.setTextColor("#64748b");
      doc.text(`URL de acceso: ${eventUrl}`, margin, urlY, {
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
