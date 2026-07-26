import { Stethoscope, Baby, Heart, Activity, Bone, Brain } from "lucide-react"

const services = [
  { icon: Stethoscope, label: "Medicina General", desc: "Consulta general para todas tus necesidades de salud" },
  { icon: Baby, label: "Pediatría", desc: "Atención especializada para niños y adolescentes" },
  { icon: Heart, label: "Cardiología", desc: "Cuidado de tu salud cardiovascular" },
  { icon: Activity, label: "Ginecología", desc: "Salud integral de la mujer" },
  { icon: Bone, label: "Traumatología", desc: "Problemas óseos, musculares y articulares" },
  { icon: Brain, label: "Neurología", desc: "Trastornos del sistema nervioso" },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos atención médica de calidad con profesionales de primer nivel en múltiples especialidades.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.label} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-secondary mb-2">{service.label}</h3>
              <p className="text-sm text-gray-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
