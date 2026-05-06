import Link from "next/link";
import { notFound } from "next/navigation";
import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

export const revalidate = 300;

const stageLabel: Record<string, string> = {
  IDEA: "Idea",
  PROTOTYPE: "Prototipo",
  MVP: "MVP",
  GROWTH: "Crecimiento",
};

function normalizeSocialUrl(value: string, platform: "instagram" | "facebook") {
  const input = value.trim();
  if (!input) return "";
  if (/^https?:\/\//i.test(input)) return input;
  const clean = input.replace(/^@/, "");
  const base = platform === "instagram" ? "https://instagram.com" : "https://facebook.com";
  return `${base}/${clean}`;
}

function toWhatsAppUrl(contactNumber: string) {
  const digits = contactNumber.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}

export default async function VenturePublicPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolvedParams = params instanceof Promise ? await params : params;

  const venture = await prisma.venture.findFirst({
    where: { id: resolvedParams.id, published: true },
    select: {
      id: true,
      title: true,
      summary: true,
      stage: true,
      tags: true,
      instagram: true,
      facebook: true,
      contactNumber: true,
      logoKey: true,
      createdAt: true,
      updatedAt: true,
      coverKey: true,
      razonSocial: true,
      actividadEconomica: true,
      impactoSocial: true,
      objetivos: true,
      owner: {
        select: {
          id: true,
          name: true,
          profile: { select: { fullName: true, avatarKey: true } },
        },
      },
      attachments: {
        select: { id: true, name: true, url: true, size: true, mimeType: true, createdAt: true },
        orderBy: { createdAt: "desc" },
      },
      updates: {
        select: { id: true, content: true, createdAt: true },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!venture) notFound();

  const ownerName = venture.owner?.profile?.fullName || venture.owner?.name || "Emprendedor";
  const ownerId = venture.owner?.id;
  const avatarUrl = venture.owner?.profile?.avatarKey || null;
  const coverUrl = venture.coverKey || null;
  const logoUrl = venture.logoKey || null;
  const initials = venture.title.slice(0, 2).toUpperCase();
  const instagramUrl = venture.instagram ? normalizeSocialUrl(venture.instagram, "instagram") : null;
  const facebookUrl = venture.facebook ? normalizeSocialUrl(venture.facebook, "facebook") : null;
  const whatsappUrl = venture.contactNumber ? toWhatsAppUrl(venture.contactNumber) : null;

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 md:px-10 lg:px-16">
      <div className="mb-6 overflow-hidden rounded-2xl md:mb-8">
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={`Portada de ${venture.title}`}
            className="h-44 w-full border border-border/70 bg-card/70 object-cover shadow-sm"
          />
        ) : (
          <div className="h-44 w-full bg-linear-to-r from-primary/20 via-primary/10 to-secondary/20" />
        )}
      </div>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 -mt-8 md:-mt-10">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={`Logo de ${venture.title}`}
                className="h-14 w-14 rounded-md border border-border/60 bg-background object-contain"
              />
            ) : null}
            <Avatar>
              {avatarUrl ? <AvatarImage src={avatarUrl} alt={ownerName} /> : <AvatarFallback>{initials}</AvatarFallback>}
            </Avatar>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Emprendimiento</p>
              <h1 className="text-3xl font-semibold text-foreground leading-tight">{venture.title}</h1>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <Badge variant="secondary">{stageLabel[venture.stage] || venture.stage}</Badge>
            <span>
              Publicado: {new Intl.DateTimeFormat("es", { dateStyle: "medium" }).format(new Date(venture.createdAt))}
            </span>
            <span>Responsable: <Link href={`/usuarios/${ownerId}`} className="underline-offset-2 hover:underline hover:text-foreground transition-colors">{ownerName}</Link></span>
          </div>

          {(venture.tags.length > 0 || venture.contactNumber || whatsappUrl || instagramUrl || facebookUrl) && (
            <div className="mt-1 flex flex-wrap items-center gap-2">
              {venture.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="font-normal text-muted-foreground">
                  #{tag}
                </Badge>
              ))}

              {venture.contactNumber ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background px-2.5 py-1 text-xs text-muted-foreground">
                  <Phone className="h-3.5 w-3.5" />
                  {venture.contactNumber}
                </span>
              ) : null}

              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background px-2.5 py-1 text-xs text-muted-foreground transition hover:text-foreground"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              ) : null}

              {instagramUrl ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background px-2.5 py-1 text-xs text-muted-foreground transition hover:text-foreground"
                >
                  <Instagram className="h-3.5 w-3.5" />
                  Instagram
                </a>
              ) : null}

              {facebookUrl ? (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background px-2.5 py-1 text-xs text-muted-foreground transition hover:text-foreground"
                >
                  <Facebook className="h-3.5 w-3.5" />
                  Facebook
                </a>
              ) : null}
            </div>
          )}
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/emprendimientos">← Volver</Link>
        </Button>
      </div>

      <Card className="border-border/70 bg-card/90 shadow-sm">
        <CardHeader className="space-y-2 pb-2">
          <CardTitle className="text-xl">Descripción</CardTitle>
          <CardDescription>
            Última actualización: {new Intl.DateTimeFormat("es", { dateStyle: "medium" }).format(new Date(venture.updatedAt))}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-foreground">{venture.summary}</p>
        </CardContent>
      </Card>
      {(venture.razonSocial || venture.actividadEconomica || venture.impactoSocial || venture.objetivos) && (
        <Card className="border-border/70 bg-card/90 shadow-sm">
          <CardHeader className="space-y-2 pb-2">
            <CardTitle className="text-xl">Información del emprendimiento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2">

              {venture.razonSocial && (
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Razón social</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{venture.razonSocial}</p>
                  </div>
                </div>
              )}

              {venture.actividadEconomica && (
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4C8.9 3 8 3.9 8 5v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-8-2h4v2h-4V5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Actividad económica</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{venture.actividadEconomica}</p>
                  </div>
                </div>
              )}

              {venture.impactoSocial && (
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Objeto o impacto social</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{venture.impactoSocial}</p>
                  </div>
                </div>
              )}

              {venture.objetivos && (
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M19.07 4.93l-1.41 1.41A8.014 8.014 0 0 1 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.07 3.06-7.44 7-7.93V6.5l4-4-4-4v2.07c-5.05.5-9 4.76-9 9.93C2 17.97 6.48 22 12 22s10-4.03 10-9.93c0-2.12-.68-4.09-1.93-5.72l1.41-1.41z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-foreground">¿Qué quiere lograr?</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{venture.objetivos}</p>
                  </div>
                </div>
              )}

            </div>
          </CardContent>
        </Card>
      )}


      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/70 bg-card/90 shadow-sm">
          <CardHeader className="space-y-2 pb-2">
            <CardTitle className="text-lg">Actualizaciones</CardTitle>
            <CardDescription>Últimos avances compartidos.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            {venture.updates.length === 0 ? (
              <p className="text-muted-foreground">Aún no hay actualizaciones.</p>
            ) : (
              venture.updates.map((update) => (
                <div key={update.id} className="rounded-lg border border-border/60 bg-background/80 p-3 shadow-sm">
                  <p className="text-xs text-muted-foreground">
                    {new Intl.DateTimeFormat("es", { dateStyle: "medium" }).format(new Date(update.createdAt))}
                  </p>
                  <p className="mt-2 whitespace-pre-wrap leading-relaxed">{update.content}</p>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <Card className="border-border/70 bg-card/90 shadow-sm">
          <CardHeader className="space-y-2 pb-2">
            <CardTitle className="text-lg">Adjuntos</CardTitle>
            <CardDescription>Archivos compartidos por el equipo.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {venture.attachments.length === 0 ? (
              <p className="text-muted-foreground">Sin archivos por ahora.</p>
            ) : (
              <ul className="space-y-3">
                {venture.attachments.map((att) => (
                  <li key={att.id} className="rounded-lg border border-border/60 bg-background/80 p-3 shadow-sm">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-medium text-foreground">{att.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Intl.DateTimeFormat("es", { dateStyle: "medium" }).format(new Date(att.createdAt))}
                        </p>
                      </div>
                      <a
                        href={att.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        Ver archivo
                      </a>
                    </div>
                    {att.size ? (
                      <p className="text-xs text-muted-foreground">{(att.size / 1024).toFixed(1)} KB</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
