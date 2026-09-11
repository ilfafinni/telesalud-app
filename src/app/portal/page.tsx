import Link from "next/link"
import {
  CalendarDays,
  CalendarPlus,
  Video,
  FileText,
  CreditCard,
  ShieldCheck,
  HeartPulse,
  Stethoscope,
  ChevronRight,
  Phone,
} from "lucide-react"

const accesos = [
  {
    titulo: "Mis Citas",
    desc: "Consulta y gestiona tus horas agendadas ingresando tu RUT.",
    icon: CalendarDays,
    href: "/mis-citas",
    color: "bg-primary-light text-primary",
  },
  {
    titulo: "Reservar Hora",
    desc: "Agenda una consulta presencial o por telemedicina con nuestros especialistas.",
    icon: CalendarPlus,
    href: "/reserva",
    color: "bg-blue-50 text-blue-600",
  },
  {
    titulo: "Telemedicina",
    desc: "Ingresa a tu videoconsulta desde cualquier dispositivo con conexión a internet.",
    icon: Video,
    href: "/telemedicina",
    color: "bg-purple-50 text-purple-600",
  },
  {
    titulo: "Bonos y Convenios",
    desc: "Revisa si tu FONASA o ISAPRE tiene cobertura en nuestra red.",
    icon: ShieldCheck,
    href: "/convenios",
    color: "bg-amber-50 text-amber-600",
  },
  {
    titulo: "Nuestra Red",
    desc: "Centros médicos, horarios de atención y cómo llegar.",
    icon: HeartPulse,
    href: "/centros",
    color: "bg-rose-50 text-rose-600",
  },
  {
    titulo: "Especialidades",
    desc: "Encuentra al especialista que necesitas entre más de 30 especialidades.",
    icon: Stethoscope,
    href: "/especialidades",
    color: "bg-emerald-50 text-emerald-600",
  },
]

export default function PortalPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-secondary to-primary text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 rounded-full px-3 py-1 mb-4">
            <ShieldCheck size={14} /> Portal del Paciente
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">MiRedSalud</h1>
          <p className="text-white/80 max-w-2xl">
            Tu información médica en un solo lugar. Agenda, consulta y gestiona tus citas
            de forma rápida y segura.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {accesos.map((acc) => {
            const Icon = acc.icon
            return (
              <Link
                key={acc.titulo}
                href={acc.href}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${acc.color}`}>
                  <Icon size={24} />
                </div>
                <h2 className="font-semibold text-secondary flex items-center gap-1 group-hover:text-primary transition-colors">
                  {acc.titulo}
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 -ml-1 transition-opacity" />
                </h2>
                <p className="text-sm text-gray-500 mt-1">{acc.desc}</p>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center shrink-0">
              <FileText size={24} className="text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-secondary mb-1">Consulta tus citas por RUT</h2>
              <p className="text-sm text-gray-500 mb-4">
                Si ya tienes una hora agendada, ingresa tu RUT para confirmarla, cancelarla o acceder a tu videoconsulta.
              </p>
              <Link
                href="/mis-citas"
                className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
              >
                <CalendarDays size={16} /> Ir a Mis Citas
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-secondary rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
              <CreditCard size={24} />
            </div>
            <div>
              <h2 className="font-semibold">Pago en línea</h2>
              <p className="text-sm text-white/70">
                Webpay, Servipag y opción de pagar después de agendar.
              </p>
            </div>
          </div>
          <a
            href="tel:6007186000"
            className="inline-flex items-center gap-2 bg-white text-secondary text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-100 transition-colors shrink-0"
          >
            <Phone size={16} /> 600 718 6000
          </a>
        </div>
      </div>
    </div>
  )
}