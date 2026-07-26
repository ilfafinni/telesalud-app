"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { medicos, centros as todosCentros } from "@/lib/data"
import { ArrowLeft, Calendar, MapPin, Video, Star, Clock, Award, Phone, Mail } from "lucide-react"

export default function MedicoProfilePage() {
  const { id } = useParams<{ id: string }>()
  const medico = medicos.find((m) => m.id === id)

  if (!medico) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary mb-2">Médico no encontrado</h2>
          <Link href="/medicos" className="text-primary hover:underline">Volver al buscador</Link>
        </div>
      </div>
    )
  }

  const centrosMedico = todosCentros.filter((c) => medico.centros.includes(c.id))

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/medicos" className="inline-flex items-center gap-1 text-gray-500 hover:text-primary mb-6">
          <ArrowLeft size={16} /> Volver a médicos
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary-dark p-8 text-white">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-3xl shrink-0">
                {medico.nombre.split(" ").slice(-2).map((n) => n[0]).join("")}
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold">{medico.nombre}</h1>
                <p className="text-primary-light text-lg">{medico.especialidad}{medico.subEspecialidad ? ` - ${medico.subEspecialidad}` : ""}</p>
                <div className="flex flex-wrap items-center gap-4 mt-3">
                  <span className="flex items-center gap-1.5 text-sm bg-white/20 px-3 py-1 rounded-full">
                    <Star size={14} /> {medico.experiencia} años de experiencia
                  </span>
                  <span className="flex items-center gap-1.5 text-sm bg-white/20 px-3 py-1 rounded-full">
                    <Award size={14} /> Especialista
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <section>
                  <h2 className="text-lg font-semibold text-secondary mb-3">Sobre el médico</h2>
                  <p className="text-gray-600 leading-relaxed">{medico.descripcion}</p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-secondary mb-3">Horarios de atención</h2>
                  <div className="space-y-2">
                    {medico.horarios.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock size={16} className="text-primary shrink-0" /> {h}
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-lg font-semibold text-secondary mb-3">Centros donde atiende</h2>
                  <div className="space-y-3">
                    {centrosMedico.map((centro) => (
                      <div key={centro.id} className="p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-secondary">{centro.nombre}</p>
                            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                              <MapPin size={14} /> {centro.direccion}
                            </p>
                            <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                              <Phone size={12} /> {centro.telefono}
                            </p>
                          </div>
                          <Link
                            href={`/reserva?medico=${medico.id}&centro=${centro.id}`}
                            className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors shrink-0"
                          >
                            <Calendar size={14} className="inline mr-1" /> Reservar
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-secondary mb-3">Modalidades</h3>
                  <div className="space-y-2">
                    {medico.formatoAtencion.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm">
                        {f === "telemedicina" ? (
                          <Video size={16} className="text-blue-500" />
                        ) : (
                          <MapPin size={16} className="text-green-500" />
                        )}
                        <span>{f === "telemedicina" ? "Telemedicina (videollamada)" : "Presencial (en centro médico)"}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-secondary mb-3">Contacto rápido</h3>
                  <div className="space-y-3">
                    <Link href={`/reserva?medico=${medico.id}`} className="block w-full bg-primary text-white text-center font-medium py-2.5 rounded-lg hover:bg-primary-dark transition-colors">
                      <Calendar size={16} className="inline mr-2" /> Reservar hora
                    </Link>
                    <Link href={`/reserva?medico=${medico.id}&modalidad=telemedicina`} className="block w-full border border-primary text-primary text-center font-medium py-2.5 rounded-lg hover:bg-primary-light transition-colors">
                      <Video size={16} className="inline mr-2" /> Agendar telemedicina
                    </Link>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-secondary mb-3">Compartir</h3>
                  <div className="flex gap-2">
                    <button className="flex-1 text-sm bg-white border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">📋 Copiar</button>
                    <button className="flex-1 text-sm bg-white border border-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">📧 Email</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
