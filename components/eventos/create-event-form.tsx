"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, ImageUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const createEventSchema = z.object({
  title: z.string().min(1, "El nombre es requerido").max(200),
  description: z.string().max(2000).optional(),
  dateTime: z.string().min(1, "La fecha y hora es requerida"),
  location: z.string().min(1, "El lugar es requerido").max(300),
});

type CreateEventFormData = z.infer<typeof createEventSchema>;

export function CreateEventForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateEventFormData>({
    resolver: zodResolver(createEventSchema),
  });

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      toast.error("Formato no permitido. Usa JPG, PNG o WEBP");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      toast.error("La imagen debe ser menor a 5MB");
      return;
    }

    setMainImage(file);
    setMainImagePreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setMainImage(null);
    setMainImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = async (data: CreateEventFormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json();
        toast.error(result.error || "Error al crear evento");
        return;
      }

      const event = await res.json();

      if (mainImage) {
        setUploadingImage(true);
        try {
          const formData = new FormData();
          formData.append("file", mainImage);
          const imgRes = await fetch(`/api/events/${event.id}/main-image`, {
            method: "PUT",
            body: formData,
          });
          if (!imgRes.ok) {
            toast.error("Evento creado, pero hubo un error al subir la imagen");
          }
        } catch {
          toast.error("Evento creado, pero hubo un error al subir la imagen");
        } finally {
          setUploadingImage(false);
        }
      }

      toast.success("Evento creado correctamente");
      router.push("/admin/eventos");
      router.refresh();
    } catch {
      toast.error("Error al crear evento");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Nombre del evento</Label>
        <Input id="title" placeholder="Ej: Feria de Emprendimiento 2026" {...register("title")} />
        {errors.title && <p className="text-xs text-destructive">{errors.title.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Descripción (opcional)</Label>
        <Textarea
          id="description"
          placeholder="Breve descripción del evento"
          rows={4}
          {...register("description")}
        />
        {errors.description && <p className="text-xs text-destructive">{errors.description.message}</p>}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="dateTime">Fecha y hora</Label>
          <Input id="dateTime" type="datetime-local" {...register("dateTime")} />
          {errors.dateTime && <p className="text-xs text-destructive">{errors.dateTime.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Lugar</Label>
          <Input id="location" placeholder="Ej: Auditorio Central" {...register("location")} />
          {errors.location && <p className="text-xs text-destructive">{errors.location.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Foto principal (opcional)</Label>
        <div className="flex items-center gap-4">
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.jpeg,.png,.webp"
            className="hidden"
            onChange={handleImageSelect}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => fileInputRef.current?.click()}
          >
            <ImageUp className="h-4 w-4" />
            Seleccionar imagen
          </Button>
          <span className="text-xs text-muted-foreground">
            JPG, PNG o WEBP — Máx 5MB
          </span>
        </div>
        {mainImagePreview && (
          <div className="relative mt-3 w-full max-w-sm">
            <img
              src={mainImagePreview}
              alt="Preview"
              className="h-40 w-full rounded-lg object-cover"
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 h-7 w-7 rounded-full bg-background/80"
              onClick={removeImage}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 pt-4">
        <Button type="submit" disabled={submitting || uploadingImage} className="gap-2">
          {(submitting || uploadingImage) && <Loader2 className="h-4 w-4 animate-spin" />}
          {uploadingImage ? "Subiendo imagen..." : submitting ? "Creando..." : "Crear evento"}
        </Button>
        <Button type="button" variant="ghost" onClick={() => router.back()}>
          Cancelar
        </Button>
      </div>
    </form>
  );
}
