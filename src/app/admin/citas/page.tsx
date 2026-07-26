"use client"

import { useState, useMemo } from "react"
import { citas } from "@/lib/data"
import { Search, CalendarDays, Clock, User, MapPin, Video, MoreHorizontal, CheckCircle, XCircle, Eye } from "lucide-react"

export default function AdminCitasPage() {
  const [busqueda, setBusqueda] = useState("")
  const [filtroEstado, setFiltroEstado] = useState("todas")

  const filtradas = useMemo(() => {
    return citas.filter((c) => {
      if (filtroEstado !== "todas" && c.estado !== filtroEstado) return false
      if (busqueda) {
        const q = busqueda.toLowerCase()
        return c.pacienteNombre.toLowerCase().includes(q) || c.pacienteRut.includes(q) || c.id.toLowerCase().includes(q)
      }
      return true
    })
  }, [busqueda, filtroEstado])

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
        <h1 className="text-2xl font-bold text-secondary">Gestión de Citas</h1>
        <div className="flex items-center gap-3">
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            value={filtroEstado}
            onChange={(e) => setFiltroEstado(e.target.value)}
          >
            <option value="todas">Todos los estados</option>
            <option value="pendiente">Pendientes</option>
            <option value="confirmada">Confirmadas</option>
            <option value="realizada">Realizadas</option>
            <option value="cancelada">Canceladas</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por paciente, RUT o código..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs text-gray-500 uppercase tracking-wider">
                <th className="px-4 py-3 font-medium">Código</th>
                <th className="px-4 py-3 font-medium">Paciente</th>
                <th className="px-4 py-3 font-medium">Médico</th>
                <th className="px-4 py-3 font-medium">Fecha</th>
                <th className="px-4 py-3 font-medium">Hora</th>
                <th className="px-4 py-3 font-medium">Modalidad</th>
                <th className="px-4 py-3 font-medium">Estado</th>
                <th className="px-4 py-3 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtradas.map((cita) => (
                <tr key={cita.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-mono text-gray-500">{cita.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <User size={14} className="text-gray-400" />
                      <div>
                        <p className="text-sm font-medium">{cita.pacienteNombre}</p>
                        <p className="text-xs text-gray-400">{cita.pacienteRut}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{cita.medicoNombre}</td>
                  <td className="px-4 py-3 text-sm">{cita.fecha}</td>
                  <td className="px-4 py-3 text-sm">{cita.hora}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${
                      cita.modalidad === "telemedicina" ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"
                    }`}>
                      {cita.modalidad === "telemedicina" ? <Video size={12} /> : <MapPin size={12} />}
                      {cita.modalidad === "telemedicina" ? "Telemedicina" : "Presencial"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-block text-xs px-2 py-1 rounded-full ${estadoBadge(cita.estado)}`}>
                      {cita.estado.charAt(0).toUpperCase() + cita.estado.slice(1)}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 hover:bg-gray-100 rounded" title="Ver detalle"><Eye size={14} className="text-gray-500" /></button>
                      <button className="p-1.5 hover:bg-green-50 rounded" title="Confirmar"><CheckCircle size={14} className="text-green-500" /></button>
                      <button className="p-1.5 hover:bg-red-50 rounded" title="Cancelar"><XCircle size={14} className="text-red-500" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtradas.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            <CalendarDays size={40} className="mx-auto mb-3 opacity-50" />
            <p>No se encontraron citas</p>
          </div>
        )}
      </div>
    </div>
  )
}
