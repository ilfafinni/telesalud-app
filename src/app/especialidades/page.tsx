import Link from "next/link"
import { especialidadesData } from "@/lib/data"
import { Stethoscope, Baby, Heart, Activity, Bone, Brain, Eye, Ear, Apple } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Stethoscope, Baby, Heart, Activity, Bone, Brain, Eye, Ear, Apple, Paintbrush: Stethoscope,
}

export default function EspecialidadesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Especialidades Médicas</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra al especialista que necesitas con la confianza de TeleSalud.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {especialidadesData.map((esp) => {
            const Icon = iconMap[esp.icono] || Activity
            return (
              <Link
                key={esp.id}
                href={`/especialidades/${esp.id}`}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-primary"
              >
                <div className="w-14 h-14 bg-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon className="text-primary group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">{esp.nombre}</h3>
                <p className="text-sm text-gray-500 mb-4">{esp.descripcion}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-primary">{esp.medicos.length} especialistas</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs text-gray-400">Disponible ahora</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
