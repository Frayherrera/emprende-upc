import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";

interface EventCardProps {
  id: string;
  title: string;
  description: string | null;
  mainImage: string | null;
  dateTime: string;
  location: string;
}

export function EventCard({ id, title, description, mainImage, dateTime, location }: EventCardProps) {
  const date = new Date(dateTime);
  const formattedDate = date.toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("es-CO", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Link href={`/eventos/${id}`} className="group block overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden bg-muted">
        {mainImage ? (
          <img
            src={mainImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            <Calendar className="h-12 w-12 opacity-30" />
          </div>
        )}
      </div>

      <div className="space-y-3 p-5">
        <h3 className="text-lg font-semibold leading-tight text-foreground">
          {title}
        </h3>

        {description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {description}
          </p>
        )}

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 shrink-0" />
            <span>{formattedDate} — {formattedTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
