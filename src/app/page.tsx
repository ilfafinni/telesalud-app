import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import Link from "next/link"
import { ArrowRight, Users, Video, Clock, Shield } from "lucide-react"

const features = [
  { icon: Clock, title: "Reserva rápida", desc: "Agenda en menos de 2 minutos, sin registro obligatorio." },
  { icon: Users, title: "+50 especialistas", desc: "Médicos de primer nivel en múltiples especialidades." },
  { icon: Video, title: "Telemedicina", desc: "Consultas por videollamada desde donde estés." },
  { icon: Shield, title: "Seguro y confiable", desc: "Tus datos protegidos con los más altos estándares." },
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

      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para agendar tu consulta?
          </h2>
          <p className="text-primary-light mb-8 max-w-xl mx-auto">
            No necesitas crear una cuenta. Solo identifícate y elige tu hora.
          </p>
          <Link
            href="/reserva"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Reservar Hora <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}
