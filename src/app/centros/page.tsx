"use client"

import { useState, useMemo } from "react"
import { centros } from "@/lib/data"
import { Search, Building2, MapPin, Phone, Clock, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

export default function CentrosPage() {
  const [busqueda, setBusqueda] = useState("")
  const [regionFiltro, setRegionFiltro] = useState("")
  const [expandido, setExpandido] = useState<string | null>(null)

  const regiones = [...new Set(centros.map((c) => c.region))]

  const filtrados = useMemo(() => {
    return centros.filter((c) => {
      if (regionFiltro && c.region !== regionFiltro) return false
      if (busqueda) {
        const q = busqueda.toLowerCase()
        return c.nombre.toLowerCase().includes(q) || c.ciudad.toLowerCase().includes(q) || c.direccion.toLowerCase().includes(q)
      }
      return true
    })
  }, [busqueda, regionFiltro])

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">Nuestra Red de Centros</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Atención integral en todo Chile con la calidad y confianza de TeleSalud.</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative flex-1 min-w-[250px]">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Buscar por nombre, ciudad o dirección..." className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
          </div>
          <select className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" value={regionFiltro} onChange={(e) => setRegionFiltro(e.target.value)}>
            <option value="">Todas las regiones</option>
            {regiones.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        <div className="grid gap-6">
          {filtrados.map((centro) => (
            <div key={centro.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <button onClick={() => setExpandido(expandido === centro.id ? null : centro.id)} className="w-full p-6 text-left">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                      <Building2 size={28} className="text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-secondary">{centro.nombre}</h2>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-500">
                        <span className="flex items-center gap-1"><MapPin size={14} /> {centro.direccion}</span>
                        <span className="flex items-center gap-1"><Phone size={14} /> {centro.telefono}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="flex items-center gap-1 text-xs text-gray-400"><Clock size={12} /> {centro.horario}</span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{centro.ciudad}</span>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{centro.region}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400 shrink-0">
                    {expandido === centro.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
              </button>

              {expandido === centro.id && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4">
                    <h3 className="text-sm font-semibold text-secondary mb-3">Servicios disponibles</h3>
                    <div className="flex flex-wrap gap-2">
                      {centro.servicios.map((s) => (
                        <Link key={s} href={`/especialidades?q=${encodeURIComponent(s)}`} className="text-sm bg-primary-light text-primary px-3 py-1.5 rounded-lg hover:bg-primary hover:text-white transition-colors">
                          {s}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link href={`/reserva?centro=${centro.id}`} className="bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-colors">
                      Reservar hora en este centro
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filtrados.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <Building2 size={48} className="mx-auto mb-4 opacity-50" />
            <p>No se encontraron centros con esos criterios.</p>
          </div>
        )}
      </div>
    </div>
  )
}
