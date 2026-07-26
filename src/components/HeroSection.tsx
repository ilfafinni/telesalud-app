import Link from "next/link"
import { Calendar, Video, Shield } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Tu salud, <br />
              <span className="text-accent">más cerca que nunca</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-light mb-8">
              Agenda horas médicas, realiza consultas por videollamada y accede a tu historial clínico desde la comodidad de tu hogar.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/reserva"
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Calendar size={20} />
                Reservar Hora
              </Link>
              <Link
                href="/telemedicina"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Video size={20} />
                Telemedicina
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-8 text-sm text-primary-light">
              <span className="flex items-center gap-1">
                <Shield size={16} /> Sin registro
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={16} /> Reserva rápida
              </span>
              <span className="flex items-center gap-1">
                <Video size={16} /> Consulta online
              </span>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-white/10 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">🏥</div>
                  <p className="text-xl font-semibold">+50 especialistas</p>
                  <p className="text-primary-light">en todo Chile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
