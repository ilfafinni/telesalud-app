"use client"

import { useState, useMemo } from "react"
import { centros } from "@/lib/data"
import { Search, Building2, MapPin, Phone, Clock, Edit2 } from "lucide-react"

export default function AdminCentrosPage() {
  const [busqueda, setBusqueda] = useState("")

  const filtrados = useMemo(() => {
    if (!busqueda) return centros
    const q = busqueda.toLowerCase()
    return centros.filter((c) => c.nombre.toLowerCase().includes(q) || c.ciudad.toLowerCase().includes(q) || c.direccion.toLowerCase().includes(q))
  }, [busqueda])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary">Centros Médicos</h1>
        <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
          + Agregar centro
        </button>
      </div>

      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Buscar centro..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filtrados.map((centro) => (
            <div key={centro.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center shrink-0">
                    <Building2 size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">{centro.nombre}</h3>
                    <div className="text-xs text-gray-500 mt-1 space-y-1">
                      <div className="flex items-center gap-1"><MapPin size={12} /> {centro.direccion}</div>
                      <div className="flex items-center gap-1"><Phone size={12} /> {centro.telefono}</div>
                      <div className="flex items-center gap-1"><Clock size={12} /> {centro.horario}</div>
                    </div>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-primary">
                  <Edit2 size={16} />
                </button>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-2">Servicios disponibles:</p>
                <div className="flex flex-wrap gap-1.5">
                  {centro.servicios.map((s) => (
                    <span key={s} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
