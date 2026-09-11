import Link from "next/link"
import type { ElementType } from "react"
import { especialidadesData } from "@/lib/data"
import {
  Activity,
  Apple,
  ArrowRight,
  Baby,
  Bone,
  Brain,
  Ear,
  Eye,
  Heart,
  ShieldCheck,
  Stethoscope,
  Users,
  Video,
} from "lucide-react"

export const metadata = {
  title: "Especialidades Médicas | TeleSalud",
  description: "Encuentra al especialista que necesitas con la confianza de TeleSalud.",
}

const iconMap: Record<string, ElementType> = {
  Stethoscope,
  Baby,
  Heart,
  Activity,
  Bone,
  Brain,
  Eye,
  Ear,
  Apple,
  Paintbrush: Stethoscope,
}

const iconStyles = [
  "bg-primary-light text-primary",
  "bg-rose-50 text-rose-600",
  "bg-amber-50 text-amber-600",
  "bg-blue-50 text-blue-600",
  "bg-violet-50 text-violet-600",
  "bg-emerald-50 text-emerald-600",
]

const totalEspecialistas = especialidadesData.reduce((acc, esp) => acc + esp.medicos.length, 0)

export default function EspecialidadesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-secondary to-secondary-dark text-white">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-accent/10" />
        <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-primary/30" />
        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20">
          <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
            <Stethoscope size={14} className="text-accent" />
            Especialidades
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-5">Especialidades Médicas</h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            Encuentra al especialista que necesitas con la confianza de TeleSalud. Atención
            presencial y por telemedicina.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-3xl">
            <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold">{especialidadesData.length}</p>
                <p className="text-xs text-white/70">Especialidades</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <Users size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalEspecialistas}</p>
                <p className="text-xs text-white/70">Especialistas</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <Video size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-white/70">Atención online</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {especialidadesData.map((esp, index) => {
            const Icon = iconMap[esp.icono] || Activity
            const iconColor = iconStyles[index % iconStyles.length]
            return (
              <Link
                key={esp.id}
                href={`/especialidades/${esp.id}`}
                className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6 hover:shadow-xl hover:border-primary hover:-translate-y-1 transition-all"
              >
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${iconColor}`}
                >
                  <Icon size={26} />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-secondary">{esp.nombre}</h3>
                <p className="text-xs md:text-sm text-gray-500 mt-1.5 line-clamp-3 flex-1">
                  {esp.descripcion}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                      <Users size={14} /> {esp.medicos.length} especialistas
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 group-hover:text-primary group-hover:gap-2 transition-all">
                      Ver especialistas <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}