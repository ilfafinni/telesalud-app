import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import Link from "next/link"
import { ArrowRight, Users, Video, Clock, Shield, Star, ChevronRight, Building2, Stethoscope } from "lucide-react"

const features = [
  { icon: Clock, title: "Reserva rápida", desc: "Agenda en menos de 2 minutos, sin registro obligatorio." },
  { icon: Users, title: "+50 especialistas", desc: "Médicos de primer nivel en múltiples especialidades." },
  { icon: Video, title: "Telemedicina", desc: "Consultas por videollamada desde donde estés." },
  { icon: Shield, title: "Seguro y confiable", desc: "Tus datos protegidos con los más altos estándares." },
]

const convenios = ["FONASA", "Banmédica", "Consalud", "Colmena", "Cruz Blanca", "Nueva Masvida"]

const testimonios = [
  { nombre: "María López", texto: "Excelente atención. Pude agendar mi hora en minutos sin necesidad de crear una cuenta.", rating: 5 },
  { nombre: "Pedro Ramírez", texto: "La telemedicina me salvó. Consulté con un especialista desde mi casa sin problemas.", rating: 5 },
  { nombre: "Ana Soto", texto: "Rápido, seguro y confiable. Los médicos son muy profesionales.", rating: 5 },
]

const blogPosts = [
  { titulo: "¿Qué es la telemedicina y cómo funciona?", categoria: "Telemedicina", fecha: "15 Jul 2026", excerpt: "Descubre cómo las consultas médicas online están cambiando la forma de cuidar tu salud." },
  { titulo: "Prevención de enfermedades cardiovasculares", categoria: "Cardiología", fecha: "10 Jul 2026", excerpt: "Consejos de nuestros especialistas para mantener tu corazón sano." },
  { titulo: "Guía de nutrición para el adulto mayor", categoria: "Nutrición", fecha: "5 Jul 2026", excerpt: "Recomendaciones nutricionales para una vejez saludable." },
]

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="w-14 h-14 mx-auto bg-primary-light rounded-full flex items-center justify-center mb-3">
                  <f.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-secondary">{f.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Convenios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-secondary mb-4">Convenios y seguros</h2>
              <p className="text-gray-600 mb-6">Trabajamos con las principales aseguradoras y sistemas de salud para que puedas acceder a nuestros servicios sin complicaciones.</p>
              <Link href="/convenios" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Ver todos los convenios <ChevronRight size={16} />
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {convenios.map((c) => (
                <span key={c} className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-primary-light hover:text-primary transition-colors cursor-pointer">{c}</span>
              ))}
              <span className="bg-primary text-white px-5 py-2.5 rounded-lg font-medium text-sm">+更多</span>
            </div>
          </div>
        </div>
      </section>

      {/* Centros */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-2">Nuestra red</h2>
              <p className="text-gray-600">Encuentra el centro más cercano a ti.</p>
            </div>
            <Link href="/centros" className="hidden sm:flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all">
              Ver todos <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { nombre: "Centro Médico Santiago", dir: "Av. Libertador Bernardo O'Higgins 4850", ciudad: "Santiago" },
              { nombre: "Centro Médico Providencia", dir: "Av. Salvador 100", ciudad: "Providencia" },
              { nombre: "Centro Médico Vitacura", dir: "Av. Tabancura 1185", ciudad: "Vitacura" },
            ].map((centro) => (
              <Link key={centro.nombre} href="/centros" className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-start gap-3">
                <Building2 size={20} className="text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-secondary">{centro.nombre}</p>
                  <p className="text-sm text-gray-500">{centro.dir}</p>
                  <p className="text-xs text-gray-400 mt-1">{centro.ciudad}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/centros" className="sm:hidden flex items-center justify-center gap-1 text-primary font-medium mt-4 hover:gap-2 transition-all">
            Ver todos los centros <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary text-center mb-2">Lo que dicen nuestros pacientes</h2>
          <p className="text-gray-500 text-center mb-10">Miles de pacientes confían en nosotros para cuidar su salud.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonios.map((t) => (
              <div key={t.nombre} className="bg-gray-50 rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4">&ldquo;{t.texto}&rdquo;</p>
                <p className="font-semibold text-secondary text-sm">- {t.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-2">Blog y noticias</h2>
              <p className="text-gray-600">Consejos y artículos de nuestros especialistas para cuidar tu salud.</p>
            </div>
            <Link href="/blog" className="hidden sm:flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all">
              Ver más <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.titulo} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all cursor-pointer">
                <span className="text-xs bg-primary-light text-primary px-2 py-1 rounded-full font-medium">{post.categoria}</span>
                <h3 className="font-semibold text-secondary mt-3 mb-2">{post.titulo}</h3>
                <p className="text-sm text-gray-500 mb-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.fecha}</span>
                  <span className="text-sm text-primary font-medium flex items-center gap-1">Leer <ChevronRight size={14} /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Descarga la app TeleSalud</h2>
              <p className="text-primary-light mb-6">Agenda, consulta y revisa tus resultados desde tu celular. Disponible para iOS y Android.</p>
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                  App Store
                </span>
                <span className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35zm13.81-7.81L6.05 21.58l8.49-8.49 2.27 1.6zm4.17-1.37c.44.28.44.86 0 1.14l-2.22 1.56L16.88 12l2.12-1.5 2.22 1.56zM6.05 2.42l10.76 7.89-2.27 1.6-8.49-8.49z"/></svg>
                  Google Play
                </span>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-48 h-48 bg-white/10 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <Stethoscope size={48} className="mx-auto mb-2 opacity-80" />
                  <p className="text-sm">Próximamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary mb-4">¿Listo para agendar tu consulta?</h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">No necesitas crear una cuenta. Solo identifícate y elige tu hora.</p>
          <Link href="/reserva" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-3 rounded-lg hover:bg-primary-dark transition-colors">
            Reservar Hora <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}
