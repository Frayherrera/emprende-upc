import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { AttachmentsGuard } from "@/components/panel/attachments-guard";
import { AttachmentPreviewButton } from "@/components/panel/attachment-preview-button";
import { DeleteAttachmentButton } from "@/components/panel/delete-attachment-button";
import { PanelToastTrigger } from "@/components/panel/panel-toast-trigger";
import { CoverPreviewDialog } from "@/components/panel/cover-preview-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  addAttachment,
  deleteAttachment,
  deleteVenture,
  removeVentureLogo,
  updateVentureCover,
  updateVentureLogo,
  removeVentureCover,
  renameAttachment,
  updateVenture,
} from "../actions";
import { CoverPicker } from "@/components/panel/cover-picker";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

function toWhatsAppUrl(contactNumber: string) {
  const digits = contactNumber.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}

export default async function VentureDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }> | { id: string };
  searchParams?: Promise<{ error?: string; ok?: string } | { error?: string; ok?: string }>;
}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const resolvedSearchParams = searchParams instanceof Promise ? await searchParams : searchParams;

  const session = await getServerSession(authOptions);
  if (!session?.user?.id) redirect("/login");

  const venture = await prisma.venture.findFirst({
    where: { id: resolvedParams.id, ownerId: session.user.id },
    select: {
      id: true,
      title: true,
      summary: true,
      stage: true,
      category: true,
      tags: true,
      instagram: true,
      facebook: true,
      contactNumber: true,
      logoKey: true,
      coverKey: true,
      createdAt: true,
      razonSocial: true,
      actividadEconomica: true,
      impactoSocial: true,
      objetivos: true,
      attachments: {
        select: { id: true, name: true, url: true, mimeType: true, size: true },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!venture) redirect("/panel?error=No%20autorizado.");

  const stageLabel: Record<string, string> = {
    IDEA: "Idea",
    PROTOTYPE: "Prototipo",
    MVP: "MVP",
    GROWTH: "Crecimiento",
  };

  const updateVentureAction = updateVenture.bind(null, session.user.id);
  const deleteVentureAction = deleteVenture.bind(null, session.user.id);
  const addAttachmentAction = addAttachment.bind(null, session.user.id);
  const updateCoverAction = updateVentureCover.bind(null, session.user.id);
  const removeCoverAction = removeVentureCover.bind(null, session.user.id);
  const updateLogoAction = updateVentureLogo.bind(null, session.user.id);
  const removeLogoAction = removeVentureLogo.bind(null, session.user.id);
  const deleteAttachmentAction = deleteAttachment.bind(null, session.user.id);
  const renameAttachmentAction = renameAttachment.bind(null, session.user.id);

  const redirectTo = `/panel/${venture.id}`;
  const whatsappUrl = venture.contactNumber ? toWhatsAppUrl(venture.contactNumber) : null;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 pb-12">
      <PanelToastTrigger initialError={resolvedSearchParams?.error} initialOk={resolvedSearchParams?.ok} />
      <AttachmentsGuard />

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Emprendimiento</p>
          <h1 className="text-2xl font-semibold text-foreground">{venture.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <Badge variant="secondary">{stageLabel[venture.stage]}</Badge>
            <span>
              {new Intl.DateTimeFormat("es", { dateStyle: "medium" }).format(new Date(venture.createdAt))}
            </span>
            <span>{venture.attachments.length} adjuntos</span>
            {venture.contactNumber ? <span>Contacto: {venture.contactNumber}</span> : null}
            {whatsappUrl ? (
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="underline-offset-2 hover:underline">
                WhatsApp
              </a>
            ) : null}
            {venture.tags.length > 0 && (
              <span className="flex flex-wrap items-center gap-2">
                <span className="text-xs uppercase tracking-wide">Tags:</span>
                {venture.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-secondary px-2 py-0.5 text-xs text-foreground">
                    {tag}
                  </span>
                ))}
              </span>
            )}
          </div>
        </div>
        <Link
          href="/panel"
          className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
        >
          ← Volver
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/70 bg-card/90 shadow-sm">
          <CardHeader className="space-y-2 pb-2">
            <CardTitle className="text-xl">Ficha</CardTitle>
            <CardDescription>Actualiza la información principal del proyecto.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form id="update-venture" action={updateVentureAction} className="space-y-4">
              <input type="hidden" name="ventureId" value={venture.id} />
              <input type="hidden" name="redirectTo" value={redirectTo} />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="title">Título</Label>
                  <Input id="title" name="title" defaultValue={venture.title} required minLength={3} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="summary">Descripción</Label>
                  <Textarea
                    id="summary"
                    name="summary"
                    defaultValue={venture.summary}
                    required
                    minLength={10}
                    className="min-h-40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stage">Etapa</Label>
                  <select
                    id="stage"
                    name="stage"
                    className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
                    defaultValue={venture.stage}
                  >
                    <option value="IDEA">Idea</option>
                    <option value="PROTOTYPE">Prototipo</option>
                    <option value="MVP">MVP</option>
                    <option value="GROWTH">Crecimiento</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Categoría</Label>
                  <select
                    id="category"
                    name="category"
                    className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
                    defaultValue={venture.category ?? ""}
                  >
                    <option value="">Selecciona una categoría</option>
                    <option value="TECNOLOGIA">Tecnología</option>
                    <option value="COMERCIO">Comercio</option>
                    <option value="SERVICIOS">Servicios</option>
                    <option value="ALIMENTOS">Alimentos</option>
                    <option value="MODA">Moda</option>
                    <option value="EDUCACION">Educación</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags">Etiquetas (usa hashtags)</Label>
                  <Input id="tags" name="tags" defaultValue={venture.tags.map((tag) => `#${tag}`).join(" ")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactNumber">Número de contacto</Label>
                  <Input id="contactNumber" name="contactNumber" defaultValue={venture.contactNumber ?? ""} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instagram">Instagram</Label>
                  <Input id="instagram" name="instagram" defaultValue={venture.instagram ?? ""} />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="facebook">Facebook</Label>
                  <Input id="facebook" name="facebook" defaultValue={venture.facebook ?? ""} />
                </div>
              </div>
              {/* Sobre tu emprendimiento — dentro del form update-venture */}
<div className="space-y-5 border-t border-border/60 pt-5">
  <p className="font-semibold text-foreground">Sobre tu emprendimiento</p>

  <div className="flex gap-3">
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </svg>
    </span>
    <div className="flex-1 space-y-2">
      <Label htmlFor="razonSocial">Razón social</Label>
      <p className="text-xs text-muted-foreground">Nombre legal o razón social de tu emprendimiento.</p>
      <Input id="razonSocial" name="razonSocial" defaultValue={venture.razonSocial ?? ""} />
    </div>
  </div>

  <div className="flex gap-3">
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4C8.9 3 8 3.9 8 5v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-8-2h4v2h-4V5z"/>
      </svg>
    </span>
    <div className="flex-1 space-y-2">
      <Label htmlFor="actividadEconomica">Actividad económica</Label>
      <p className="text-xs text-muted-foreground">¿A qué actividad económica se dedica tu emprendimiento?</p>
      <Textarea id="actividadEconomica" name="actividadEconomica" defaultValue={venture.actividadEconomica ?? ""} className="min-h-24 resize-none" />
    </div>
  </div>

  <div className="flex gap-3">
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    </span>
    <div className="flex-1 space-y-2">
      <Label htmlFor="impactoSocial">Objeto o impacto social</Label>
      <p className="text-xs text-muted-foreground">¿Cuál es el propósito de tu emprendimiento y qué impacto social genera?</p>
      <Textarea id="impactoSocial" name="impactoSocial" defaultValue={venture.impactoSocial ?? ""} className="min-h-24 resize-none" />
    </div>
  </div>

  <div className="flex gap-3">
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M19.07 4.93l-1.41 1.41A8.014 8.014 0 0 1 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.07 3.06-7.44 7-7.93V6.5l4-4-4-4v2.07c-5.05.5-9 4.76-9 9.93C2 17.97 6.48 22 12 22s10-4.03 10-9.93c0-2.12-.68-4.09-1.93-5.72l1.41-1.41-1.41 1.41z"/>
      </svg>
    </span>
    <div className="flex-1 space-y-2">
      <Label htmlFor="objetivos">¿Qué quieres lograr?</Label>
      <p className="text-xs text-muted-foreground">Cuéntanos cuáles son tus objetivos a corto, mediano o largo plazo.</p>
      <Textarea id="objetivos" name="objetivos" defaultValue={venture.objetivos ?? ""} className="min-h-24 resize-none" />
    </div>
  </div>
</div>
            </form>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:justify-end sm:gap-4">
              <Button form="update-venture" type="submit" size="sm" className="sm:w-40">
                Guardar
              </Button>
              <form
                action={deleteVentureAction}
                data-confirm="¿Eliminar este emprendimiento?"
                className="flex"
              >
                <input type="hidden" name="ventureId" value={venture.id} />
                <Button type="submit" variant="destructive" size="sm" className="sm:w-36">
                  Eliminar
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90 shadow-sm">
          <CardHeader className="space-y-2 pb-2">
            <CardTitle className="text-xl">Adjuntos</CardTitle>
            <CardDescription>Sube, renombra o elimina archivos del proyecto.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {venture.attachments.length === 0 ? (
              <p className="text-sm text-muted-foreground">Sin archivos por ahora.</p>
            ) : (
              <ul className="space-y-3 text-sm">
                {venture.attachments.map((att) => (
                  <li key={att.id} className="rounded-lg bg-background/80 p-4 shadow-sm">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={att.url}
                          className="truncate text-primary underline-offset-2 hover:underline"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {att.name}
                        </a>
                        <AttachmentPreviewButton url={att.url} name={att.name} mime={att.mimeType} />
                          <DeleteAttachmentButton
                            action={deleteAttachmentAction}
                            attachmentId={att.id}
                            redirectTo={redirectTo}
                            name={att.name}
                            data-preserve-form="update-venture"
                          />
                      </div>
                      <p className="text-[11px] text-muted-foreground">
                        {att.mimeType || "archivo"} · {att.size ? `${Math.round(att.size / 1024)} KB` : ""}
                      </p>
                      <form
                        action={renameAttachmentAction}
                        className="flex flex-col gap-3 md:flex-row md:items-center"
                        data-preserve-form="update-venture"
                      >
                        <input type="hidden" name="attachmentId" value={att.id} />
                        <input type="hidden" name="redirectTo" value={redirectTo} />
                        <Input
                          name="name"
                          defaultValue={att.name}
                          className="h-10 md:flex-1"
                          aria-label="Renombrar adjunto"
                        />
                        <Button type="submit" size="sm" variant="secondary" className="md:w-auto">
                          Renombrar
                        </Button>
                      </form>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <form
              action={addAttachmentAction}
              className="space-y-3"
              data-attachment-form="true"
              data-preserve-form="update-venture"
            >
              <input type="hidden" name="ventureId" value={venture.id} />
              <input type="hidden" name="redirectTo" value={redirectTo} />
              <Input name="file" type="file" className="text-sm" />
              <Button type="submit" size="sm" className="w-full">
                Subir archivo
              </Button>
              <p className="text-xs text-muted-foreground">Sube un archivo por vez. Máx 8MB por archivo.</p>
            </form>
          </CardContent>
        </Card>
      </div>

      <Card className="border-border/70 bg-card/90 shadow-sm">
        <CardHeader className="space-y-2 pb-2">
          <CardTitle className="text-xl">Portada</CardTitle>
          <CardDescription>Sube una imagen horizontal para la portada pública.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <CoverPreviewDialog url={venture.coverKey ?? undefined} />
            {venture.coverKey && (
              <form action={removeCoverAction} className="sm:ml-2">
                <input type="hidden" name="ventureId" value={venture.id} />
                <input type="hidden" name="redirectTo" value={`/panel/${venture.id}`} />
                <Button type="submit" variant="ghost" size="sm">Quitar portada</Button>
              </form>
            )}
          </div>

          <form action={updateCoverAction} className="space-y-3" data-attachment-form="true">
            <CoverPicker defaultUrl={venture.coverKey ?? undefined} />
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end sm:gap-2">
              <input type="hidden" name="ventureId" value={venture.id} />
              <input type="hidden" name="redirectTo" value={`/panel/${venture.id}`} />
              <Button type="submit" className="sm:w-40">Actualizar portada</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="border-border/70 bg-card/90 shadow-sm">
        <CardHeader className="space-y-2 pb-2">
          <CardTitle className="text-xl">Logo</CardTitle>
          <CardDescription>Sube o actualiza el logo del proyecto (PNG, JPG o WEBP).</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {venture.logoKey ? (
              <div className="flex items-center gap-3">
                <img
                  src={venture.logoKey}
                  alt={`Logo de ${venture.title}`}
                  className="h-16 w-16 rounded-lg border border-border/70 bg-background object-contain"
                />
                <p className="text-xs text-muted-foreground">Logo actual cargado.</p>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No hay logo cargado.</p>
            )}
            {venture.logoKey && (
              <form action={removeLogoAction} className="sm:ml-2">
                <input type="hidden" name="ventureId" value={venture.id} />
                <input type="hidden" name="redirectTo" value={`/panel/${venture.id}`} />
                <Button type="submit" variant="ghost" size="sm">Quitar logo</Button>
              </form>
            )}
          </div>

          <form action={updateLogoAction} className="space-y-3" data-attachment-form="true">
            <div className="space-y-2">
              <Label htmlFor="logo">Imagen de logo</Label>
              <Input
                id="logo"
                name="logo"
                type="file"
                accept="image/png,image/jpeg,image/webp"
                required
                className="text-sm"
              />
              <p className="text-xs text-muted-foreground">Máx 8MB.</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end sm:gap-2">
              <input type="hidden" name="ventureId" value={venture.id} />
              <input type="hidden" name="redirectTo" value={`/panel/${venture.id}`} />
              <Button type="submit" className="sm:w-40">Actualizar logo</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
