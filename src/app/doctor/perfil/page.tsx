"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { medicos, centros, medicoPorEmail } from "@/lib/data"
import { Star, MapPin, Clock, Phone, Award } from "lucide-react"
import Link from "next/link"

export default function DoctorPerfilPage() {
  const router = useRouter()
  const [medico, setMedico] = useState<typeof medicos[0] | null>(null)
  const [usuario, setUsuario] = useState<{ email: string; nombre: string } | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("usuario")
    if (!stored) { router.push("/auth/login"); return }
    const user = JSON.parse(stored)
    setUsuario(user)
    const id = medicoPorEmail[user.email] || ""
    const med = medicos.find((m) => m.id === id)
    if (med) setMedico(med)
  }, [router])

  if (!medico || !usuario) return null

  const centrosMedico = centros.filter((c) => medico.centros.includes(c.id))

  return (
    <div>
      <h1 className="text-2xl font-bold text-secondary mb-6">Mi Perfil</h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-2xl shrink-0">
              {medico.nombre.split(" ").slice(-2).map((n) => n[0]).join("")}
            </div>
            <div>
              <h2 className="text-xl font-bold">{medico.nombre}</h2>
              <p className="text-primary-light">{medico.especialidad}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="flex items-center gap-1 text-sm bg-white/20 px-2.5 py-0.5 rounded-full">
                  <Star size={12} /> {medico.experiencia} años exp.
                </span>
                <span className="flex items-center gap-1 text-sm bg-white/20 px-2.5 py-0.5 rounded-full">
                  <Award size={12} /> Especialista
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <section>
            <h3 className="font-semibold text-secondary mb-2">Información de cuenta</h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Email</span>
                <span className="font-medium">{usuario.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Rol</span>
                <span className="font-medium text-primary">Médico</span>
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-secondary mb-2">Descripción</h3>
            <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-4">{medico.descripcion}</p>
          </section>

          <section>
            <h3 className="font-semibold text-secondary mb-2">Horarios</h3>
            <div className="space-y-2">
              {medico.horarios.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                  <Clock size={14} className="text-primary" /> {h}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-secondary mb-2">Centros donde atiendes</h3>
            <div className="space-y-2">
              {centrosMedico.map((c) => (
                <div key={c.id} className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-secondary">{c.nombre}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1"><MapPin size={12} /> {c.direccion}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1"><Phone size={12} /> {c.telefono}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="pt-2">
            <Link href="/doctor" className="bg-primary text-white font-medium px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors inline-block">
              Volver al dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
