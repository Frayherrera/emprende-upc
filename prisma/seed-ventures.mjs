import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ventures = [
  {
    title: "EcoPack",
    summary: "Empaque biodegradable a base de residuos agrícolas para reemplazar el plástico de un solo uso en la industria alimenticia.",
    stage: "PROTOTYPE",
    category: "SERVICIOS",
    tags: ["sostenibilidad", "biodegradable", "empaques", "ambiente"],
    razonSocial: "EcoPack S.A.S.",
    actividadEconomica: "Fabricación de productos de plástico biodegradables",
    impactoSocial: "Reducción del 40% de residuos plásticos en envases de alimentos",
    objetivos: "Expandirnos a 5 departamentos de Colombia en los próximos 2 años y reemplazar 10 toneladas de plástico mensuales.",
    instagram: "@ecopack_col",
    contactNumber: "3001234567",
  },
  {
    title: "CodeLab Academy",
    summary: "Plataforma de educación en programación para jóvenes de zonas rurales del Cesar, con mentorías virtuales y proyectos reales.",
    stage: "MVP",
    category: "EDUCACION",
    tags: ["educación", "programación", "rural", "mentorías"],
    razonSocial: "CodeLab Colombia S.A.S.",
    actividadEconomica: "Servicios de educación en tecnología",
    impactoSocial: "Formación gratuita a más de 200 jóvenes en situación de vulnerabilidad",
    objetivos: "Certificar a 1.000 estudiantes al año y lograr inserción laboral del 60%.",
    instagram: "@codelab_academy",
    contactNumber: "3012345678",
  },
  {
    title: "MercaCampo",
    summary: "App que conecta directamente a campesinos del Cesar con consumidores urbanos, eliminando intermediarios y mejorando el precio justo.",
    stage: "IDEA",
    category: "COMERCIO",
    tags: ["agro", "campesinos", "comercio justo", "app"],
    razonSocial: "MercaCampo S.A.S.",
    actividadEconomica: "Plataforma de comercio electrónico de productos agrícolas",
    impactoSocial: "Incremento del 30% en los ingresos de los productores locales",
    objetivos: "Incorporar 500 productores y 10.000 consumidores en el primer año.",
    instagram: "@merca_campo",
    contactNumber: "3023456789",
  },
  {
    title: "Moda Circular",
    summary: "Tienda virtual de ropa de segunda mano con intercambio entre estudiantes universitarios, fomentando la economía circular.",
    stage: "PROTOTYPE",
    category: "MODA",
    tags: ["moda", "circular", "segunda mano", "universidad"],
    razonSocial: "Moda Circular S.A.S.",
    actividadEconomica: "Comercio electrónico de prendas de vestir usadas",
    impactoSocial: "Reducción del desperdicio textil y acceso a ropa económica para estudiantes",
    objetivos: "Tener 5.000 usuarios activos en universidades del departamento.",
    instagram: "@modacircular_co",
    contactNumber: "3034567890",
  },
  {
    title: "SmartAgro Cesar",
    summary: "Sistema de sensores IoT de bajo costo para monitoreo de cultivos, con alertas en tiempo real sobre humedad, temperatura y plagas.",
    stage: "MVP",
    category: "TECNOLOGIA",
    tags: ["iot", "agro", "sensores", "tecnología"],
    razonSocial: "SmartAgro S.A.S.",
    actividadEconomica: "Desarrollo de soluciones tecnológicas para el sector agrícola",
    impactoSocial: "Reducción del 25% en pérdidas de cosecha mediante monitoreo temprano",
    objetivos: "Implementar en 200 fincas del departamento en 3 años.",
    instagram: "@smartagro_cesar",
    contactNumber: "3045678901",
  },
  {
    title: "NutriVida",
    summary: "Producción y distribución de snacks saludables elaborados con frutas y cereales típicos de la región caribe colombiana.",
    stage: "GROWTH",
    category: "ALIMENTOS",
    tags: ["alimentos", "saludable", "región caribe", "snacks"],
    razonSocial: "NutriVida S.A.S.",
    actividadEconomica: "Elaboración de productos alimenticios naturales",
    impactoSocial: "Empleo directo a 30 madres cabeza de familia en Valledupar",
    objetivos: "Llegar a 50 puntos de venta en toda la costa caribe.",
    instagram: "@nutrivida_co",
    contactNumber: "3056789012",
  },
  {
    title: "Conecta Salud",
    summary: "Plataforma de telemedicina para comunidades rurales con acceso limitado a servicios de salud especializados.",
    stage: "IDEA",
    category: "SERVICIOS",
    tags: ["salud", "telemedicina", "rural", "inclusión"],
    razonSocial: "Conecta Salud S.A.S.",
    actividadEconomica: "Servicios de telemedicina y consultas médicas virtuales",
    impactoSocial: "Acceso a salud especializada para comunidades sin hospitales cercanos",
    objetivos: "Atender a 5.000 pacientes en zonas rurales del Cesar.",
    instagram: "@conectasalud",
    contactNumber: "3067890123",
  },
  {
    title: "Artesanías Digitales",
    summary: "Marketplace que digitaliza y comercializa artesanías de comunidades indígenas del Cesar, preservando su cultura y generando ingresos.",
    stage: "PROTOTYPE",
    category: "COMERCIO",
    tags: ["artesanías", "indígena", "cultura", "ecommerce"],
    razonSocial: "Artesanías Digitales S.A.S.",
    actividadEconomica: "Comercialización de artesanías y productos culturales",
    impactoSocial: "Preservación de técnicas artesanales ancestrales y generación de ingresos justos",
    objetivos: "Representar a 15 comunidades indígenas y vender 10.000 productos al año.",
    instagram: "@artesanias_digitales",
    contactNumber: "3078901234",
  },
];

async function main() {
  const user = await prisma.user.findFirst({ orderBy: { createdAt: "asc" } });
  if (!user) {
    console.error("No users found. Run the admin seed first.");
    process.exit(1);
  }

  console.log(`Using owner: ${user.name} (${user.email})`);

  await prisma.venture.deleteMany({});

  for (const v of ventures) {
    await prisma.venture.create({
      data: {
        ownerId: user.id,
        ...v,
      },
    });
  }

  console.log(`Seeded ${ventures.length} ventures.`);
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
