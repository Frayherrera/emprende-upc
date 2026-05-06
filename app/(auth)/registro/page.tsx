"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
import { cn } from "@/lib/utils";

const PROGRAM_OPTIONS = [
  "Administración de Empresas",
  "Contaduría Pública",
  "Derecho",
  "Economía",
  "Licenciatura en Literatura y Lengua Castellana",
  "Ingeniería Ambiental y Sanitaria",
  "Ingeniería de Sistemas",
  "Ingeniería Agroindustrial",
  "Ingeniería Agropecuaria",
  "Licenciatura en Educación Física, Recreación y Deporte",
] as const;

const USER_TYPES = ["ESTUDIANTE", "EGRESADO"] as const;
type UserType = (typeof USER_TYPES)[number];

const EMAIL_DOMAIN = "unicesar.edu.co";

const registerSchema = z.object({
  userType: z.enum(USER_TYPES, { message: "Selecciona si eres estudiante o egresado" }),
  name: z.string().min(2, { message: "Ingresa tu nombre" }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Correo inválido" })
    .refine((value) => value.endsWith(`@${EMAIL_DOMAIN}`), {
      message: `El correo debe ser @${EMAIL_DOMAIN}`,
    }),
  password: z
    .string()
    .min(8, { message: "Mínimo 8 caracteres" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
      message: "Incluye mayúscula, minúscula y número",
    }),
  documentNumber: z
    .string()
    .trim()
    .regex(/^\d+$/, { message: "El documento solo debe tener números" })
    .min(6, { message: "Ingresa tu número de documento" })
    .max(30),
  program: z.enum(PROGRAM_OPTIONS, { message: "Selecciona tu programa" }),
});

type RegisterForm = z.infer<typeof registerSchema>;

// Íconos SVG simples para no depender de librerías externas
function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4C8.9 3 8 3.9 8 5v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-8-2h4v2h-4V5z" />
    </svg>
  );
}

interface UserTypeCardProps {
  type: UserType;
  selected: boolean;
  onSelect: (type: UserType) => void;
}

function UserTypeCard({ type, selected, onSelect }: UserTypeCardProps) {
  const isEstudiante = type === "ESTUDIANTE";

  return (
    <button
      type="button"
      onClick={() => onSelect(type)}
      className={cn(
        "relative flex flex-col gap-3 rounded-xl border-2 p-4 text-left transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        selected
          ? "border-primary bg-primary/5"
          : "border-border bg-background hover:border-primary/40 hover:bg-muted/40"
      )}
    >
      {/* Radio indicator */}
      <span
        className={cn(
          "absolute right-3 top-3 flex h-4 w-4 items-center justify-center rounded-full border-2 transition-colors",
          selected ? "border-primary" : "border-muted-foreground/40"
        )}
      >
        {selected && (
          <span className="h-2 w-2 rounded-full bg-primary" />
        )}
      </span>

      {/* Icon */}
      <span
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full",
          isEstudiante
            ? "bg-emerald-100 text-emerald-600"
            : "bg-blue-100 text-blue-600"
        )}
      >
        {isEstudiante ? (
          <GraduationCapIcon className="h-6 w-6" />
        ) : (
          <BriefcaseIcon className="h-6 w-6" />
        )}
      </span>

      {/* Text */}
      <div>
        <p className="font-semibold text-foreground">
          {isEstudiante ? "Soy estudiante" : "Soy egresado"}
        </p>
        <p className="text-sm text-muted-foreground">
          {isEstudiante
            ? "Actualmente estoy cursando un programa académico."
            : "Ya terminé mis estudios y soy egresado."}
        </p>
      </div>
    </button>
  );
}

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>({ resolver: zodResolver(registerSchema) });

  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const selectedUserType = watch("userType");

  const onSubmit = async (data: RegisterForm) => {
    setSubmitting(true);
    setServerError(null);
    setSuccess(false);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSuccess(true);
      setTimeout(() => router.push("/login"), 800);
    } else {
      const payload = await res.json().catch(() => ({}));
      setServerError(payload.error || "No se pudo registrar");
    }

    setSubmitting(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-secondary/20 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Crear cuenta</CardTitle>
          <CardDescription>
            Regístrate para publicar y seguir tus emprendimientos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

            {/* Selección estudiante / egresado */}
            <div className="space-y-3 rounded-xl border bg-muted/30 p-4">
              <div>
                <p className="font-semibold text-foreground">
                  ¿Eres estudiante o egresado?
                </p>
                <p className="text-sm text-muted-foreground">
                  Selecciona la opción que mejor te describa para continuar.
                </p>
              </div>
              <Controller
                name="userType"
                control={control}
                render={({ field }) => (
                  <div className="grid grid-cols-2 gap-3">
                    {USER_TYPES.map((type) => (
                      <UserTypeCard
                        key={type}
                        type={type}
                        selected={field.value === type}
                        onSelect={(t) => field.onChange(t)}
                      />
                    ))}
                  </div>
                )}
              />
              {errors.userType && (
                <p className="text-sm text-destructive">{errors.userType.message}</p>
              )}
            </div>

            {/* Nombre */}
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input id="name" autoComplete="name" {...register("name")} />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            {/* Correo */}
            <div className="space-y-2">
              <Label htmlFor="email">Correo</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* Contraseña */}
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>

            {/* Documento */}
            <div className="space-y-2">
              <Label htmlFor="documentNumber">Número de documento</Label>
              <Input
                id="documentNumber"
                autoComplete="off"
                {...register("documentNumber")}
              />
              {errors.documentNumber && (
                <p className="text-sm text-destructive">
                  {errors.documentNumber.message}
                </p>
              )}
            </div>

            {/* Programa académico */}
            <div className="space-y-2">
              <Label htmlFor="program">Programa académico</Label>
              <Controller
                name="program"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="program" className="h-11">
                      <SelectValue placeholder="Selecciona tu programa" />
                    </SelectTrigger>
                    <SelectContent>
                      {PROGRAM_OPTIONS.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.program && (
                <p className="text-sm text-destructive">{errors.program.message}</p>
              )}
            </div>

            {serverError && (
              <p className="text-sm text-destructive">{serverError}</p>
            )}
            {success && (
              <p className="text-sm text-green-600">
                Registro exitoso. Redirigiendo...
              </p>
            )}

            <Button className="w-full" type="submit" disabled={submitting}>
              {submitting ? "Creando..." : "Crear cuenta"}
            </Button>
          </form>

          <p className="mt-4 text-sm text-muted-foreground">
            ¿Ya tienes cuenta?{" "}
            <Link className="text-primary" href="/login">
              Inicia sesión
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}