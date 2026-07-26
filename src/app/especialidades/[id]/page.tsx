"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { especialidadesData, medicos, centros } from "@/lib/data"
import { MapPin, Clock, Video, ArrowLeft, Star, Calendar } from "lucide-react"

export default function EspecialidadDetailPage() {
  const { id } = useParams<{ id: string }>()
  const especialidad = especialidadesData.find((e) => e.id === id)

  if (!especialidad) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-2">Especialidad no encontrada</h2>
          <Link href="/especialidades" className="text-primary hover:underline">Volver a especialidades</Link>
        </div>
      </div>
    )
  }

  const medicosEsp = medicos.filter((m) => especialidad.medicos.includes(m.id))
  const centrosIds = new Set(medicosEsp.flatMap((m) => m.centros))
  const centrosEsp = centros.filter((c) => centrosIds.has(c.id))

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <Link href="/especialidades" className="inline-flex items-center gap-1 text-gray-500 hover:text-primary mb-6">
          <ArrowLeft size={16} /> Volver a especialidades
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary mb-2">{especialidad.nombre}</h1>
          <p className="text-gray-600 max-w-3xl">{especialidad.descripcion}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-secondary mb-4">
              Médicos disponibles ({medicosEsp.length})
            </h2>
            <div className="space-y-4">
              {medicosEsp.map((medico) => (
                <div key={medico.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center text-primary font-bold text-lg shrink-0">
                      {medico.nombre.split(" ").slice(-2).map((n) => n[0]).join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link href={`/medicos/${medico.id}`} className="font-semibold text-secondary hover:text-primary transition-colors">
                            {medico.nombre}
                          </Link>
                          <p className="text-sm text-gray-500">{medico.especialidad}{medico.subEspecialidad ? ` - ${medico.subEspecialidad}` : ""}</p>
                        </div>
                        <span className="flex items-center gap-1 text-sm text-yellow-500 shrink-0">
                          <Star size={14} fill="currentColor" /> {medico.experiencia} años
                        </span>
                      </div>
                      <Link href={`/medicos/${medico.id}`} className="text-sm text-gray-600 mt-2 hover:text-primary transition-colors block">{medico.descripcion}</Link>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {medico.formatoAtencion.map((f) => (
                          <span key={f} className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full ${
                            f === "telemedicina" ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"
                          }`}>
                            {f === "telemedicina" ? <Video size={12} /> : <MapPin size={12} />}
                            {f === "telemedicina" ? "Telemedicina" : "Presencial"}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Link
                          href={`/reserva?medico=${medico.id}`}
                          className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center gap-1"
                        >
                          <Calendar size={14} /> Reservar hora
                        </Link>
                        <Link
                          href={`/medicos/${medico.id}`}
                          className="border border-gray-300 text-gray-600 text-sm font-medium px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-1"
                        >
                          Ver perfil
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sticky top-24">
              <h3 className="font-semibold text-secondary mb-4">Centros disponibles</h3>
              <div className="space-y-3">
                {centrosEsp.map((centro) => (
                  <div key={centro.id} className="p-3 rounded-lg bg-gray-50">
                    <p className="font-medium text-sm text-secondary">{centro.nombre}</p>
                    <p className="text-xs text-gray-500 mt-1">{centro.direccion}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-1">
                      <Clock size={12} /> {centro.horario}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/reserva"
                className="mt-4 block w-full bg-primary text-white text-center font-medium py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Reservar hora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
