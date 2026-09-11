import HeroSection from "@/components/HeroSection"
import Link from "next/link"
import { blogPosts } from "@/lib/blog"
import { centros, especialidadesData } from "@/lib/data"
import {
  Apple,
  Activity,
  ArrowRight,
  Baby,
  Bone,
  Brain,
  Building2,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Ear,
  Eye,
  Heart,
  LucideIcon,
  MapPin,
  MonitorSmartphone,
  Paintbrush,
  Phone,
  Quote,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Stethoscope,
  Video,
} from "lucide-react"

const convenios = [
  { nombre: "FONASA", tipo: "Público" },
  { nombre: "Banmédica", tipo: "Isapre" },
  { nombre: "Consalud", tipo: "Isapre" },
  { nombre: "Colmena", tipo: "Isapre" },
  { nombre: "Cruz Blanca", tipo: "Isapre" },
  { nombre: "Nueva Masvida", tipo: "Isapre" },
]

const testimonios = [
  { nombre: "María López", texto: "Excelente atención. Pude agendar mi hora en minutos sin necesidad de crear una cuenta.", rating: 5 },
  { nombre: "Pedro Ramírez", texto: "La telemedicina me salvó. Consulté con un especialista desde mi casa sin problemas.", rating: 5 },
  { nombre: "Ana Soto", texto: "Rápido, seguro y confiable. Los médicos son muy profesionales.", rating: 5 },
]

const iconoEspecialidad: Record<string, { icon: LucideIcon; clase: string }> = {
  Stethoscope: { icon: Stethoscope, clase: "bg-teal-100 text-teal-700" },
  Baby: { icon: Baby, clase: "bg-sky-100 text-sky-700" },
  Heart: { icon: Heart, clase: "bg-rose-100 text-rose-700" },
  Activity: { icon: Activity, clase: "bg-violet-100 text-violet-700" },
  Bone: { icon: Bone, clase: "bg-amber-100 text-amber-700" },
  Brain: { icon: Brain, clase: "bg-fuchsia-100 text-fuchsia-700" },
  Paintbrush: { icon: Paintbrush, clase: "bg-pink-100 text-pink-700" },
  Eye: { icon: Eye, clase: "bg-indigo-100 text-indigo-700" },
  Ear: { icon: Ear, clase: "bg-orange-100 text-orange-700" },
  Apple: { icon: Apple, clase: "bg-emerald-100 text-emerald-700" },
}

const telemedicinaPlanes = [
  {
    tipo: "Médico general",
    precio: "$32.590",
    descripcion: "Consultas por videollamada con médicos generales",
    items: ["Videollamada con médico general", "Indicaciones y receta electrónica", "Disponible los 7 días de la semana"],
  },
  {
    tipo: "Especialidades",
    precio: "$23.000",
    descripcion: "Consulta a distancia con especialistas certificados",
    items: ["Especialistas certificados", "Horarios flexibles", "Seguimiento y control por videollamada"],
  },
]

const coloresCategoria: Record<string, string> = {
  Telemedicina: "bg-teal-100 text-teal-700",
  Cardiología: "bg-rose-100 text-rose-700",
  Nutrición: "bg-emerald-100 text-emerald-700",
  Pediatría: "bg-sky-100 text-sky-700",
  Psiquiatría: "bg-violet-100 text-violet-700",
}

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Especialidades */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-2">Nuestras especialidades</h2>
              <p className="text-gray-600">Profesionales de primer nivel para cuidar tu salud en todas sus áreas.</p>
            </div>
            <Link href="/especialidades" className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all">
              Ver todas las especialidades <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {especialidadesData.map((esp) => {
              const cfg = iconoEspecialidad[esp.icono] ?? { icon: Stethoscope, clase: "bg-primary-light text-primary" }
              const Icono = cfg.icon
              return (
                <Link
                  key={esp.id}
                  href="/reserva"
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform ${cfg.clase}`}>
                    <Icono size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-1.5">{esp.nombre}</h3>
                  <p className="text-sm text-gray-500 mb-4 flex-1">{esp.descripcion}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Reservar hora
                    <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Telemedicina */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-secondary to-primary rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 text-white">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-primary-light text-xs font-medium px-4 py-1.5 rounded-full mb-6">
                  <Sparkles size={14} className="text-accent" /> Telemedicina
                </span>
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-5">
                  <MonitorSmartphone size={28} className="text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                  Consulta online, <br /> sin salir de casa
                </h2>
                <p className="text-primary-light mb-6">
                  Agenda tu consulta por videollamada con el mismo estándar de calidad que la atención presencial.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {["Videollamada segura y en alta calidad", "Recetas e indicaciones electrónicas", "Atención de lunes a domingo, incluso días festivos"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-primary-light">
                      <span className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={13} className="text-accent" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/telemedicina"
                  className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3 rounded-xl hover:bg-amber-600 transition-colors"
                >
                  Agendar teleconsulta <ArrowRight size={18} />
                </Link>
              </div>

              <div className="p-8 md:p-12 grid sm:grid-cols-2 gap-5 bg-white/5 backdrop-blur">
                {telemedicinaPlanes.map((plan) => (
                  <div key={plan.tipo} className="bg-white rounded-2xl p-6 shadow-lg flex flex-col">
                    <p className="text-sm font-medium text-gray-500">{plan.tipo}</p>
                    <p className="text-3xl font-bold text-secondary mt-1">
                      {plan.precio}
                      <span className="text-sm font-normal text-gray-400"> / consulta</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">desde</p>
                    <p className="text-xs text-gray-500 mt-3">{plan.descripcion}</p>
                    <ul className="mt-4 space-y-2 flex-1">
                      {plan.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <Check size={15} className="text-primary shrink-0 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/telemedicina"
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-primary text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      <Video size={16} /> Agendar
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra red */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-2">Nuestra red</h2>
              <p className="text-gray-600">Encuentra el centro médico más cercano a ti, con atención de lunes a sábado.</p>
            </div>
            <Link href="/centros" className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all">
              Ver todos los centros <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {centros.slice(0, 6).map((centro) => (
              <Link
                key={centro.id}
                href="/centros"
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center">
                    <Building2 size={22} className="text-primary" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">
                    <MapPin size={12} className="text-primary" /> {centro.ciudad}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-secondary">{centro.nombre}</p>
                  <p className="text-sm text-gray-500 mt-1">{centro.direccion}</p>
                </div>
                <div className="flex flex-col gap-1.5 text-xs text-gray-500 mt-auto border-t border-gray-100 pt-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Phone size={12} className="text-primary" /> {centro.telefono}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={12} className="text-primary" /> {centro.horario}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Convenios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold text-secondary mb-4">Convenios y seguros</h2>
              <p className="text-gray-600 mb-4">
                Trabajamos con las principales aseguradoras y sistemas de salud para que accedas a nuestros servicios sin complicaciones.
              </p>
              <Link href="/convenios" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Ver todos los convenios <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full lg:w-auto">
              {convenios.map((c) => (
                <div
                  key={c.nombre}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 text-center hover:border-primary/30 hover:shadow-md transition-all cursor-pointer"
                >
                  <span className="w-10 h-10 mx-auto bg-primary-light rounded-full flex items-center justify-center mb-2">
                    <ShieldCheck size={18} className="text-primary" />
                  </span>
                  <p className="font-semibold text-secondary text-sm">{c.nombre}</p>
                  <p className="text-xs text-gray-400">{c.tipo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-secondary text-center mb-2">Lo que dicen nuestros pacientes</h2>
          <p className="text-gray-500 text-center mb-10">Miles de pacientes confían en nosotros para cuidar su salud.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonios.map((t) => (
              <div key={t.nombre} className="bg-gray-50 rounded-2xl p-6 flex flex-col">
                <Quote size={28} className="text-primary/20 mb-3" />
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 flex-1">&ldquo;{t.texto}&rdquo;</p>
                <p className="font-semibold text-secondary text-sm">- {t.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-2">Blog y noticias</h2>
              <p className="text-gray-600">Consejos y artículos de nuestros especialistas para cuidar tu salud.</p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all">
              Ver más artículos <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col"
              >
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium self-start ${coloresCategoria[post.categoria] ?? "bg-primary-light text-primary"}`}>
                  {post.categoria}
                </span>
                <h3 className="font-semibold text-secondary mt-4 mb-2 leading-snug text-lg">{post.titulo}</h3>
                <p className="text-sm text-gray-500 mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-gray-400">
                    <Calendar size={12} /> {post.fecha}
                  </span>
                  <span className="text-sm text-primary font-medium inline-flex items-center gap-1">
                    Leer <ChevronRight size={14} />
                  </span>
                </div>
              </Link>
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
                <span className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                  App Store
                </span>
                <span className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35zm13.81-7.81L6.05 21.58l8.49-8.49 2.27 1.6zm4.17-1.37c.44.28.44.86 0 1.14l-2.22 1.56L16.88 12l2.12-1.5 2.22 1.56zM6.05 2.42l10.76 7.89-2.27 1.6-8.49-8.49z"/></svg>
                  Google Play
                </span>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="w-48 h-48 bg-white/10 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <Smartphone size={48} className="mx-auto mb-2 opacity-80" />
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
          <Link href="/reserva" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-9 py-3.5 rounded-xl hover:bg-primary-dark shadow-lg shadow-primary/20 transition-colors">
            <Calendar size={20} /> Reservar Hora <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}