export interface BlogPost {
  slug: string
  titulo: string
  categoria: string
  fecha: string
  autor: string
  lectura: string
  excerpt: string
  contenido: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "que-es-la-telemedicina-y-como-funciona",
    titulo: "¿Qué es la telemedicina y cómo funciona?",
    categoria: "Telemedicina",
    fecha: "15 Jul 2026",
    autor: "Dr. Carlos Muñoz",
    lectura: "5 min",
    excerpt: "Descubre cómo las consultas médicas online están cambiando la forma de cuidar tu salud.",
    contenido: [
      "La telemedicina permite a los pacientes consultar con sus médicos a través de videollamadas seguras, sin necesidad de desplazarse a un centro de salud. En TeleSalud, cada consulta es atendida por especialistas certificados que puedes elegir por especialidad, disponibilidad y modalidad.",
      "Beneficios principales:",
      "Ahorro de tiempo y dinero en traslados. Atención oportuna, incluso desde zonas remotas. Continuidad del tratamiento con tu mismo especialista. Descanso y comodidad desde tu hogar.",
      "Antes de tu consulta verifica tu conexión a internet, ten a mano tus documentos y exámenes previos, y busca un espacio tranquilo sin interrupciones.",
    ],
  },
  {
    slug: "prevencion-de-enfermedades-cardiovasculares",
    titulo: "Prevención de enfermedades cardiovasculares",
    categoria: "Cardiología",
    fecha: "10 Jul 2026",
    autor: "Dr. Pablo Soto",
    lectura: "4 min",
    excerpt: "Consejos de nuestros especialistas para mantener tu corazón sano.",
    contenido: [
      "Las enfermedades cardiovasculares son la principal causa de muerte en Chile. La buena noticia es que la mayoría son prevenibles con cambios en el estilo de vida y controles médicos regulares.",
      "Recomendaciones:",
      "Controla tu presión arterial al menos una vez al año. Realiza actividad física moderada (30 min, 5 veces por semana). Mantén una dieta baja en sodio y grasas saturadas. Evita el tabaco y modera el consumo de alcohol. Realiza chequeos preventivos anuales a partir de los 40 años.",
      "Si tienes antecedentes familiares de enfermedad coronaria, consulta con un cardiólogo para evaluar tu riesgo personalizado.",
    ],
  },
  {
    slug: "guia-de-nutricion-para-el-adulto-mayor",
    titulo: "Guía de nutrición para el adulto mayor",
    categoria: "Nutrición",
    fecha: "5 Jul 2026",
    autor: "Dra. Sofía Martínez",
    lectura: "6 min",
    excerpt: "Recomendaciones nutricionales para una vejez saludable.",
    contenido: [
      "Una alimentación equilibrada en la tercera edad ayuda a prevenir la desnutrición, fortalecer el sistema inmune y mantener la masa muscular.",
      "Puntos clave:",
      "Asegura aporte adecuado de proteínas (pescado, huevos, legumbres). Incluye lácteos fortificados con vitamina D y calcio. Consume fibra para mejorar el tránsito intestinal. Hidrátate con 6 a 8 vasos de agua al día. Realiza comidas fraccionadas y variadas.",
      "Ante cualquier duda, agenda una consulta con nutricionista para recibir un plan personalizado.",
    ],
  },
  {
    slug: "ninos-y-pantallas-limites-saludables",
    titulo: "Niños y pantallas: límites saludables",
    categoria: "Pediatría",
    fecha: "28 Jun 2026",
    autor: "Dra. María González",
    lectura: "4 min",
    excerpt: "Cómo establecer rutinas de uso de tecnología seguras para tus hijos.",
    contenido: [
      "El uso excesivo de pantallas puede afectar el sueño, la atención y la actividad física de niños y adolescentes. Establecer límites claros es fundamental.",
      "Recomendaciones por edad:",
      "Menores de 2 años: evitar pantallas, excepto videollamadas. 2-5 años: máximo 1 hora diaria con supervisión. 6-12 años: máxima 2 horas diarias de ocio digital. Adolescentes: acuerdos familiares y horarios de desconexión.",
      "Complementa con actividades al aire libre, lectura y rutinas de sueño consistentes.",
    ],
  },
  {
    slug: "salud-mental-mitos-y-realidades",
    titulo: "Salud mental: mitos y realidades",
    categoria: "Psiquiatría",
    fecha: "20 Jun 2026",
    autor: "Dr. Francisco Mora",
    lectura: "5 min",
    excerpt: "Desmitificando la consulta psiquiátrica y la importancia del cuidado emocional.",
    contenido: [
      "Pedir ayuda profesional para la salud mental es un acto de autocuidado, no de debilidad. Sin embargo, persisten mitos que impiden a muchas personas buscar tratamiento.",
      "Mitos frecuentes:",
      "Ir al psiquiatra es para casos graves - Falso, la prevención y el tratamiento temprano son claves. Los medicamentos son para siempre - Muchos tratamientos son transitorios y ajustables. La terapia no funciona - La evidencia muestra mejora significativa en la mayoría de los casos.",
      "Si sientes tristeza persistente, ansiedad o cambios de ánimo que afectan tu vida diaria, agenda una evaluación.",
    ],
  },
]