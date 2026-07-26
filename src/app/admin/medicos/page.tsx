"use client"

import { useState, useMemo } from "react"
import { medicos, especialidades } from "@/lib/data"
import { Search, Stethoscope, MapPin, Video, Star, Edit2, ToggleLeft, ToggleRight } from "lucide-react"

export default function AdminMedicosPage() {
  const [busqueda, setBusqueda] = useState("")
  const [filtroEsp, setFiltroEsp] = useState("")

  const filtrados = useMemo(() => {
    return medicos.filter((m) => {
      if (filtroEsp && m.especialidad !== filtroEsp) return false
      if (busqueda) {
        const q = busqueda.toLowerCase()
        return m.nombre.toLowerCase().includes(q) || m.especialidad.toLowerCase().includes(q)
      }
      return true
    })
  }, [busqueda, filtroEsp])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Gestión de Médicos</h1>
        <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
          + Agregar médico
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Buscar médico..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
            </div>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" value={filtroEsp} onChange={(e) => setFiltroEsp(e.target.value)}>
              <option value="">Todas las especialidades</option>
              {especialidades.map((e) => <option key={e} value={e}>{e}</option>)}
            </select>
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {filtrados.map((medico) => (
            <div key={medico.id} className="p-4 hover:bg-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary font-bold text-sm">
                  {medico.nombre.split(" ").slice(-2).map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium text-sm text-secondary">{medico.nombre}</p>
                  <p className="text-xs text-gray-500">{medico.especialidad} • {medico.experiencia} años exp.</p>
                  <div className="flex items-center gap-2 mt-1">
                    {medico.formatoAtencion.map((f) => (
                      <span key={f} className={`inline-flex items-center gap-1 text-xs px-1.5 py-0.5 rounded ${
                        f === "telemedicina" ? "text-blue-600 bg-blue-50" : "text-green-600 bg-green-50"
                      }`}>
                        {f === "telemedicina" ? <Video size={10} /> : <MapPin size={10} />}
                        {f === "telemedicina" ? "Online" : "Presencial"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-primary" title="Editar">
                  <Edit2 size={16} />
                </button>
                <button className={`p-2 rounded-lg ${medico.disponible ? "text-green-500 hover:bg-green-50" : "text-gray-300 hover:bg-gray-100"}`} title={medico.disponible ? "Disponible" : "No disponible"}>
                  {medico.disponible ? <ToggleRight size={20} /> : <ToggleLeft size={20} />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
