import Link from "next/link"
import {
  Calendar,
  Video,
  Wind,
  Heart,
  Brain,
  Bone,
  Search,
  ChevronRight,
  Shield,
  Clock,
} from "lucide-react"

const sintomas = [
  { icon: Wind, pregunta: "¿Molestias por tos o resfrío?", descripcion: "Consulta con Otorrino o Medicina General", href: "/reserva" },
  { icon: Heart, pregunta: "¿Te duele el estómago?", descripcion: "Agenda con un especialista digestivo", href: "/reserva" },
  { icon: Brain, pregunta: "¿Sientes dolor de cabeza?", descripcion: "Reserva Neurología o Medicina General", href: "/reserva" },
  { icon: Bone, pregunta: "¿Tienes dolor de espalda?", descripcion: "Agenda Traumatología o Kinesiología", href: "/reserva" },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 right-1/3 w-72 h-72 rounded-full bg-accent/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-primary-light text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            <Shield size={14} className="text-accent" />
            Atención médica en todo Chile, sin registro previo
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
            Agenda tu hora médica <span className="text-accent">en minutos</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-light mb-8">
            Atención presencial y telemedicina con +50 especialistas. Reserva en menos de 2 minutos, sin crear una cuenta.
          </p>

          <form
            action="/reserva"
            method="get"
            className="flex flex-col sm:flex-row items-stretch gap-1 bg-white rounded-2xl p-2 shadow-xl max-w-2xl mx-auto"
          >
            <label htmlFor="busqueda" className="flex items-center flex-1 gap-3 px-3">
              <Search size={22} className="text-primary shrink-0" />
              <input
                id="busqueda"
                name="q"
                type="search"
                placeholder="Busca especialidad, médico o síntoma…"
                className="w-full bg-transparent text-secondary placeholder:text-gray-400 outline-none text-base py-3"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-xl hover:bg-amber-600 transition-colors"
            >
              Buscar <ChevronRight size={18} />
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-sm text-primary-light">
            <span className="inline-flex items-center gap-1.5">
              <Clock size={15} className="text-accent" /> Reserva exprés
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Video size={15} className="text-accent" /> Telemedicina disponible
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={15} className="text-accent" /> Atención presencial
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/reserva"
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded-xl shadow-lg hover:bg-primary-light transition-colors"
            >
              <Calendar size={20} /> Reservar Hora
            </Link>
            <Link
              href="/telemedicina"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              <Video size={20} /> Agendar Telemedicina
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
          {sintomas.map((s) => (
            <Link
              key={s.pregunta}
              href={s.href}
              className="group bg-white/10 border border-white/15 backdrop-blur rounded-2xl p-5 hover:bg-white/20 hover:border-white/25 hover:-translate-y-0.5 transition-all"
            >
              <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-3 group-hover:bg-accent/25 transition-colors">
                <s.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold text-white mb-1">{s.pregunta}</h3>
              <p className="text-sm text-primary-light mb-3">{s.descripcion}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white opacity-80 group-hover:opacity-100 group-hover:text-accent transition-all">
                Agendar hora
                <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}