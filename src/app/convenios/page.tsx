import Link from "next/link"
import { ShieldCheck, HeartHandshake, Building, FileText, ChevronRight } from "lucide-react"

const convenios = [
  {
    categoria: "FONASA",
    items: [
      { titulo: "Beneficios FONASA", desc: "Accede a atención médica con los beneficios de tu tramo FONASA.", icon: ShieldCheck },
      { titulo: "Bono PAD", desc: "Programa de Atención Domiciliaria y bonos con precio conocido.", icon: FileText },
      { titulo: "Precio Conocido", desc: "Cirugías y procedimientos con precio conocido y sin sorpresas.", icon: HeartHandshake },
    ],
  },
  {
    categoria: "ISAPRES",
    items: [
      { titulo: "Consalud", desc: "Atención con todos los planes de Consalud en nuestra red.", icon: Building },
      { titulo: "Banmédica", desc: "Cobertura para afiliados de Banmédica en todas nuestras sucursales.", icon: Building },
      { titulo: "Colmena Golden Cross", desc: "Atención preferente para afiliados de Colmena.", icon: Building },
      { titulo: "Cruz Blanca", desc: "Cobertura completa para afiliados de Cruz Blanca.", icon: Building },
      { titulo: "Nueva Masvida", desc: "Planes y coberturas para afiliados de Nueva Masvida.", icon: Building },
    ],
  },
  {
    categoria: "Institucionales",
    items: [
      { titulo: "Caja Los Andes", desc: "Convenio especial para afiliados a Caja de Compensación Los Andes.", icon: Building },
      { titulo: "Coopeuch", desc: "Beneficios exclusivos para socios de Coopeuch.", icon: Building },
      { titulo: "OTEC", desc: "Convenios con OTEC para capacitación y salud laboral.", icon: Building },
    ],
  },
  {
    categoria: "Seguros TeleSalud",
    items: [
      { titulo: "Seguro Ambulatorio", desc: "Cobertura para consultas, exámenes y procedimientos ambulatorios.", icon: ShieldCheck },
      { titulo: "Seguro Catastrófico", desc: "Protección ante eventos de salud de alto costo.", icon: ShieldCheck },
      { titulo: "Seguro Oncológico", desc: "Cobertura especializada para tratamientos oncológicos.", icon: ShieldCheck },
      { titulo: "Plan Dental", desc: "Prevención y cuidado dental con cobertura anual.", icon: ShieldCheck },
    ],
  },
]

export default function ConveniosPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Seguros y Convenios</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabajamos con las principales aseguradoras y sistemas de salud para que puedas acceder a nuestros servicios.
          </p>
        </div>

        <div className="grid gap-8">
          {convenios.map((grupo) => (
            <div key={grupo.categoria}>
              <h2 className="text-xl font-semibold text-secondary mb-4 flex items-center gap-2">
                <Building size={20} className="text-primary" /> {grupo.categoria}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {grupo.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.titulo} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                          <Icon size={24} className="text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-secondary">{item.titulo}</h3>
                          <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Más información <ChevronRight size={14} />
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-primary rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">¿No encuentras tu convenio?</h2>
          <p className="text-primary-light mb-6 max-w-xl mx-auto">
            Contáctanos y te ayudaremos a verificar si tu seguro o convenio tiene cobertura en nuestra red.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/reserva" className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Reservar hora
            </Link>
            <a href="tel:6007186000" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Llamar al 600 718 6000
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
