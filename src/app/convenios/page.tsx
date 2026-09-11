import Link from "next/link"
import {
  ShieldCheck,
  HeartHandshake,
  Building2,
  FileText,
  ChevronRight,
  CheckCircle2,
  Phone,
  CalendarCheck,
  Award,
  Stethoscope,
  BadgeCheck,
  Banknote,
} from "lucide-react"

const convenios = [
  {
    categoria: "FONASA",
    items: [
      { titulo: "Beneficios FONASA", desc: "Accede a atención médica con los beneficios de tu tramo FONASA.", icon: ShieldCheck },
      { titulo: "Bono PAD", desc: "Programa de Atención Domiciliaria y bonos con precio conocido.", icon: FileText },
      { titulo: "Precio Conocido", desc: "Cirugías y procedimientos con precio conocido y sin sorpresas.", icon: Banknote },
    ],
  },
  {
    categoria: "ISAPRES",
    items: [
      { titulo: "Consalud", desc: "Atención con todos los planes de Consalud en nuestra red.", icon: Building2 },
      { titulo: "Banmédica", desc: "Cobertura para afiliados de Banmédica en todas nuestras sucursales.", icon: Building2 },
      { titulo: "Colmena Golden Cross", desc: "Atención preferente para afiliados de Colmena.", icon: Building2 },
      { titulo: "Cruz Blanca", desc: "Cobertura completa para afiliados de Cruz Blanca.", icon: Building2 },
      { titulo: "Nueva Masvida", desc: "Planes y coberturas para afiliados de Nueva Masvida.", icon: Building2 },
    ],
  },
  {
    categoria: "Institucionales",
    items: [
      { titulo: "Caja Los Andes", desc: "Convenio especial para afiliados a Caja de Compensación Los Andes.", icon: Building2 },
      { titulo: "Coopeuch", desc: "Beneficios exclusivos para socios de Coopeuch.", icon: Building2 },
      { titulo: "OTEC", desc: "Convenios con OTEC para capacitación y salud laboral.", icon: Building2 },
    ],
  },
  {
    categoria: "Seguros TeleSalud",
    items: [
      { titulo: "Seguro Ambulatorio", desc: "Cobertura para consultas, exámenes y procedimientos ambulatorios.", icon: Stethoscope },
      { titulo: "Seguro Catastrófico", desc: "Protección ante eventos de salud de alto costo.", icon: ShieldCheck },
      { titulo: "Seguro Oncológico", desc: "Cobertura especializada para tratamientos oncológicos.", icon: HeartHandshake },
      { titulo: "Plan Dental", desc: "Prevención y cuidado dental con cobertura anual.", icon: BadgeCheck },
    ],
  },
]

const isapreBrands = [
  { nombre: "Consalud", color: "from-blue-600 to-blue-800", text: "text-blue-700" },
  { nombre: "Banmédica", color: "from-emerald-500 to-emerald-700", text: "text-emerald-600" },
  { nombre: "Colmena Golden Cross", color: "from-amber-500 to-orange-600", text: "text-amber-600" },
  { nombre: "Cruz Blanca", color: "from-red-500 to-rose-700", text: "text-red-600" },
  { nombre: "Nueva Masvida", color: "from-teal-500 to-teal-700", text: "text-teal-600" },
]

const beneficios = [
  "Sin preexistencias en convenios FONASA",
  "Precio conocido en cirugías y procedimientos",
  "Atención en todas las sedes de la red",
  "Derivación electrónica y digital",
  "Teleconsulta disponible 24/7",
  "Resultados de exámenes en línea",
  "Programa de prevención y chequeos",
  "Atención de urgencia las 24 horas",
]

export default function ConveniosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-primary py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <ShieldCheck size={16} />
            Red de convenios certificada
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Seguros y Convenios
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Trabajamos con las principales aseguradoras y sistemas de salud del país para que puedas acceder a nuestros servicios con la mejor cobertura.
          </p>
        </div>
      </section>

      {/* FONASA Banner */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 mb-12">
        <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 border-2 border-emerald-200 rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/25">
                <ShieldCheck size={40} className="text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Destacado
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                FONASA &mdash; Precio Conocido
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-xl">
                Cirugías y procedimientos con precio conocido y sin sorpresas.
                Accede a los beneficios de tu tramo FONASA con cobertura completa en toda nuestra red de atención.
              </p>
              <div className="flex flex-wrap gap-3 mt-5 justify-center md:justify-start">
                <Link
                  href="/reserva"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors"
                >
                  <CalendarCheck size={18} />
                  Reservar hora
                </Link>
                <span className="inline-flex items-center gap-2 text-emerald-700 font-medium px-4 py-3">
                  <Banknote size={18} />
                  Tramos I a V con beneficios
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-16 space-y-16">
        {/* ISAPRES Brand Cards */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
              ISAPRES
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Aceptamos las principales Isapres del mercado. Verifica tu plan con nosotros.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {isapreBrands.map((brand) => (
              <div
                key={brand.nombre}
                className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:border-gray-300 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${brand.color} flex items-center justify-center shadow-sm`}>
                  <Building2 size={22} className="text-white" />
                </div>
                <span className={`text-sm font-semibold text-center leading-tight ${brand.text}`}>
                  {brand.nombre}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Institucionales */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
              Convenios Institucionales
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Convenios especiales con cajas de compensación, cooperativas y OTEC.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {convenios
              .find((g) => g.categoria === "Institucionales")
              ?.items.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.titulo}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                        <Icon size={24} className="text-secondary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary">{item.titulo}</h3>
                        <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Más información <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                )
              })}
          </div>
        </section>

        {/* Seguros TeleSalud */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
              Seguros TeleSalud
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Nuestros propios seguros diseñados para darte la protección que necesitas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {convenios
              .find((g) => g.categoria === "Seguros TeleSalud")
              ?.items.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.titulo}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                        <Icon size={24} className="text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary">{item.titulo}</h3>
                        <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Más información <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                )
              })}
          </div>
        </section>

        {/* Beneficios Checklist */}
        <section className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Award size={28} className="text-amber-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
                Beneficios por convenio
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Al acceder a través de nuestros convenios, disfrutas de ventajas exclusivas pensadas para ti.
              </p>
            </div>
            <div className="md:w-2/3 grid sm:grid-cols-2 gap-3">
              {beneficios.map((b) => (
                <div key={b} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700 leading-snug">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-secondary to-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            ¿No encuentras tu convenio?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Contáctanos y te ayudaremos a verificar si tu seguro o convenio tiene cobertura en nuestra red.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/reserva"
              className="inline-flex items-center gap-2 bg-white text-secondary font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <CalendarCheck size={18} />
              Reservar hora
            </Link>
            <a
              href="tel:6007186000"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              <Phone size={18} />
              Llamar al 600 718 6000
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
