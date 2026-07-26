"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { medicos, medicoPorEmail } from "@/lib/data"
import { Clock, MapPin, Video } from "lucide-react"

export default function DoctorHorarioPage() {
  const router = useRouter()
  const [medico, setMedico] = useState<{ nombre: string; horarios: string[]; formatoAtencion: string[]; centros: string[] } | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("usuario")
    if (!stored) { router.push("/auth/login"); return }
    const user = JSON.parse(stored)
    const id = medicoPorEmail[user.email] || ""
    const med = medicos.find((m) => m.id === id)
    if (med) setMedico(med)
  }, [router])

  if (!medico) return null

  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

  return (
    <div>
      <h1 className="text-2xl font-bold text-secondary mb-6">Mi Horario</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="font-semibold text-secondary mb-4">Horarios de atención</h2>
            <div className="space-y-3">
              {medico.horarios.map((h, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-secondary">{dias[i] || `Día ${i + 1}`}</p>
                    <p className="text-sm text-gray-500">{h}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="font-semibold text-secondary mb-3">Modalidades</h2>
            <div className="space-y-2">
              {medico.formatoAtencion.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm">
                  {f === "telemedicina" ? (
                    <Video size={16} className="text-blue-500" />
                  ) : (
                    <MapPin size={16} className="text-green-500" />
                  )}
                  <span>{f === "telemedicina" ? "Telemedicina" : "Presencial"}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="font-semibold text-secondary mb-3">Estado</h2>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-sm text-gray-600">Disponible para atenciones</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
