"use client"

import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import { citas, medicoPorEmail } from "@/lib/data"
import type { Cita } from "@/types"
import { Search, CalendarDays, Clock, User, MapPin, Video, CheckCircle, XCircle, Phone, Mail } from "lucide-react"

export default function DoctorCitasPage() {
  const router = useRouter()
  const [medicoId, setMedicoId] = useState("")
  const [busqueda, setBusqueda] = useState("")
  const [filtroEstado, setFiltroEstado] = useState("todas")
  const [citasList, setCitasList] = useState<Cita[]>([])

  useEffect(() => {
    const stored = localStorage.getItem("usuario")
    if (!stored) { router.push("/auth/login"); return }
    const user = JSON.parse(stored)
    const id = medicoPorEmail[user.email] || ""
    setMedicoId(id)
    setCitasList(citas.filter((c) => c.medicoId === id))
  }, [router])

  const filtradas = useMemo(() => {
    return citasList.filter((c) => {
      if (filtroEstado !== "todas" && c.estado !== filtroEstado) return false
      if (busqueda) {
        const q = busqueda.toLowerCase()
        return c.pacienteNombre.toLowerCase().includes(q) || c.pacienteRut.includes(q) || c.id.toLowerCase().includes(q)
      }
      return true
    })
  }, [citasList, busqueda, filtroEstado])

  const cambiarEstado = (citaId: string, nuevoEstado: Cita["estado"]) => {
    setCitasList((prev) => prev.map((c) => c.id === citaId ? { ...c, estado: nuevoEstado } : c))
    const idx = citas.findIndex((c) => c.id === citaId)
    if (idx !== -1) citas[idx].estado = nuevoEstado
  }

  const estadoBadge = (estado: string) => {
    const map: Record<string, string> = {
      confirmada: "bg-green-100 text-green-700",
      pendiente: "bg-yellow-100 text-yellow-700",
      cancelada: "bg-red-100 text-red-700",
      realizada: "bg-blue-100 text-blue-700",
      "no-asistio": "bg-gray-100 text-gray-700",
    }
    return map[estado] || "bg-gray-100 text-gray-700"
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-secondary">Mis Citas</h1>
          <p className="text-sm text-gray-500">{citasList.length} cita{citasList.length !== 1 ? "s" : ""} en total</p>
        </div>
        <select
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          value={filtroEstado}
          onChange={(e) => setFiltroEstado(e.target.value)}
        >
          <option value="todas">Todos</option>
          <option value="pendiente">Pendientes</option>
          <option value="confirmada">Confirmadas</option>
          <option value="realizada">Realizadas</option>
          <option value="cancelada">Canceladas</option>
        </select>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Buscar paciente por nombre o RUT..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {filtradas.map((cita) => (
            <div key={cita.id} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-primary font-bold shrink-0">
                    {cita.pacienteNombre.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">{cita.pacienteNombre}</h3>
                    <p className="text-xs text-gray-400 font-mono">{cita.pacienteRut}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-gray-500">
                      <span className="flex items-center gap-1"><CalendarDays size={12} /> {cita.fecha}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {cita.hora} hrs</span>
                      <span className={`flex items-center gap-1 ${cita.modalidad === "telemedicina" ? "text-blue-500" : "text-green-500"}`}>
                        {cita.modalidad === "telemedicina" ? <Video size={12} /> : <MapPin size={12} />}
                        {cita.modalidad === "telemedicina" ? "Telemedicina" : "Presencial"}
                      </span>
                    </div>
                    {cita.motivo && <p className="text-xs text-gray-400 mt-1">Motivo: {cita.motivo}</p>}
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Phone size={10} /> {cita.pacienteTelefono}</span>
                      <span className="flex items-center gap-1"><Mail size={10} /> {cita.pacienteEmail}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${estadoBadge(cita.estado)}`}>
                    {cita.estado.charAt(0).toUpperCase() + cita.estado.slice(1)}
                  </span>

                  {cita.estado === "pendiente" && (
                    <div className="flex gap-1">
                      <button onClick={() => cambiarEstado(cita.id, "confirmada")} className="text-xs bg-green-500 text-white px-3 py-1.5 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-1">
                        <CheckCircle size={12} /> Confirmar
                      </button>
                      <button onClick={() => cambiarEstado(cita.id, "cancelada")} className="text-xs bg-red-500 text-white px-3 py-1.5 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-1">
                        <XCircle size={12} /> Cancelar
                      </button>
                    </div>
                  )}

                  {cita.estado === "confirmada" && (
                    <button onClick={() => cambiarEstado(cita.id, "realizada")} className="text-xs bg-blue-500 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 transition-colors">
                      Marcar realizada
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtradas.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <CalendarDays size={48} className="mx-auto mb-4 opacity-50" />
            <p>No se encontraron citas</p>
          </div>
        )}
      </div>
    </div>
  )
}
