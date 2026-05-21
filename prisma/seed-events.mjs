import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const PROGRAMS = [
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
];

const events = [
  {
    title: "Feria de Emprendimiento 2026",
    description: "Evento anual donde estudiantes y egresados presentan sus proyectos de emprendimiento ante inversionistas y la comunidad universitaria. Habrá stands, charlas y rueda de negocios.",
    dateTime: new Date("2026-06-15T09:00:00-05:00"),
    location: "Auditorio Central, Sede Valledupar",
  },
  {
    title: "Taller de Innovación y Design Thinking",
    description: "Taller práctico de 2 días sobre metodologías de innovación, design thinking y prototipado rápido para emprendedores.",
    dateTime: new Date("2026-05-28T14:00:00-05:00"),
    location: "Laboratorio de Innovación, Bloque C",
  },
  {
    title: "Hackathon Universitario",
    description: "Competencia de 48 horas para desarrollar soluciones tecnológicas a problemas reales del departamento del Cesar. Equipos multidisciplinarios de hasta 5 personas.",
    dateTime: new Date("2026-07-10T08:00:00-05:00"),
    location: "Centro de Innovación, Sede Norte",
  },
  {
    title: "Conferencia: Finanzas para Emprendedores",
    description: "Charla magistral sobre educación financiera, acceso a créditos y gestión de recursos para nuevos emprendimientos.",
    dateTime: new Date("2026-05-20T10:00:00-05:00"),
    location: "Salón de Eventos, Biblioteca Central",
  },
  {
    title: "Rueda de Negocios Emprende UPC",
    description: "Espacio de conexión entre emprendedores universitarios y empresarios de la región para generar alianzas estratégicas y oportunidades de inversión.",
    dateTime: new Date("2026-08-05T08:30:00-05:00"),
    location: "Cámara de Comercio de Valledupar",
  },
  {
    title: "Workshop: Marketing Digital para Startups",
    description: "Aprende estrategias de marketing digital, redes sociales y growth hacking para impulsar tu emprendimiento.",
    dateTime: new Date("2026-06-25T15:00:00-05:00"),
    location: "Aula 302, Edificio de Ingeniería",
  },
];

async function main() {
  console.log("Seeding academic programs...");
  for (const name of PROGRAMS) {
    await prisma.academicProgram.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
  console.log(`Seeded ${PROGRAMS.length} academic programs.`);

  await prisma.event.deleteMany({});

  for (const event of events) {
    await prisma.event.create({ data: event });
  }

  console.log(`Seeded ${events.length} events.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
