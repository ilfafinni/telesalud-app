import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, User, CalendarDays, Clock, ChevronRight } from "lucide-react"

const posts = [
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

export const metadata = {
  title: "Blog TeleSalud",
  description: "Artículos y consejos de nuestros especialistas.",
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relacionados = posts.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/blog" className="inline-flex items-center gap-1 text-gray-500 hover:text-primary mb-8">
          <ArrowLeft size={16} /> Volver al blog
        </Link>

        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs bg-primary-light text-primary px-3 py-1 rounded-full font-medium">{post.categoria}</span>
              <span className="text-xs text-gray-400 flex items-center gap-1"><User size={12} /> {post.autor}</span>
              <span className="text-xs text-gray-400 flex items-center gap-1"><CalendarDays size={12} /> {post.fecha}</span>
              <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12} /> {post.lectura}</span>
            </div>

            <h1 className="text-3xl font-bold text-secondary mb-6">{post.titulo}</h1>

            <div className="prose prose-lg max-w-none space-y-4">
              {post.contenido.map((parrafo, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">{parrafo}</p>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-10">
          <h2 className="text-xl font-semibold text-secondary mb-4">Artículos relacionados</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {relacionados.map((art) => (
              <Link
                key={art.slug}
                href={`/blog/${art.slug}`}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md hover:border-primary transition-all"
              >
                <span className="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-full font-medium">{art.categoria}</span>
                <h3 className="font-semibold text-secondary text-sm mt-2 mb-1">{art.titulo}</h3>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  {art.fecha} · {art.lectura}
                </p>
                <span className="text-sm text-primary font-medium flex items-center gap-1 mt-2">
                  Leer <ChevronRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}