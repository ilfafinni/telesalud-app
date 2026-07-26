"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { medicos, centros, especialidades } from "@/lib/data"
import { Search, MapPin, Video, Star, Calendar, Filter, X } from "lucide-react"

export default function MedicosPage() {
  const [busqueda, setBusqueda] = useState("")
  const [especialidadFiltro, setEspecialidadFiltro] = useState("")
  const [centroFiltro, setCentroFiltro] = useState("")
  const [modalidadFiltro, setModalidadFiltro] = useState<"todas" | "presencial" | "telemedicina">("todas")
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false)

  const filtrados = useMemo(() => {
    return medicos.filter((m) => {
      if (busqueda) {
        const q = busqueda.toLowerCase()
        const matchNombre = m.nombre.toLowerCase().includes(q)
        const matchEsp = m.especialidad.toLowerCase().includes(q)
        const matchDesc = m.descripcion.toLowerCase().includes(q)
        if (!matchNombre && !matchEsp && !matchDesc) return false
      }
      if (especialidadFiltro && m.especialidad !== especialidadFiltro) return false
      if (centroFiltro && !m.centros.includes(centroFiltro)) return false
      if (modalidadFiltro !== "todas" && !m.formatoAtencion.includes(modalidadFiltro)) return false
      return true
    })
  }, [busqueda, especialidadFiltro, centroFiltro, modalidadFiltro])

  const limpiarFiltros = () => {
    setEspecialidadFiltro("")
    setCentroFiltro("")
    setModalidadFiltro("todas")
    setBusqueda("")
  }

  const hayFiltros = especialidadFiltro || centroFiltro || modalidadFiltro !== "todas"

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-secondary mb-2">Buscador de Especialistas</h1>
          <p className="text-gray-500">Encuentra al médico que necesitas por nombre, especialidad o centro.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar médico, especialidad..."
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
            <button
              onClick={() => setFiltrosAbiertos(!filtrosAbiertos)}
              className={`px-4 py-2.5 rounded-lg border transition-colors flex items-center gap-2 ${
                filtrosAbiertos ? "border-primary bg-primary-light text-primary" : "border-gray-300 hover:border-primary"
              }`}
            >
              <Filter size={18} /> Filtros {hayFiltros && <span className="w-2 h-2 rounded-full bg-primary" />}
            </button>
          </div>

          {filtrosAbiertos && (
            <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-100">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-xs font-medium text-gray-500 mb-1">Especialidad</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  value={especialidadFiltro}
                  onChange={(e) => setEspecialidadFiltro(e.target.value)}
                >
                  <option value="">Todas las especialidades</option>
                  {especialidades.map((esp) => (
                    <option key={esp} value={esp}>{esp}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-xs font-medium text-gray-500 mb-1">Centro médico</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  value={centroFiltro}
                  onChange={(e) => setCentroFiltro(e.target.value)}
                >
                  <option value="">Todos los centros</option>
                  {centros.map((c) => (
                    <option key={c.id} value={c.id}>{c.nombre}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-xs font-medium text-gray-500 mb-1">Modalidad</label>
                <select
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  value={modalidadFiltro}
                  onChange={(e) => setModalidadFiltro(e.target.value as typeof modalidadFiltro)}
                >
                  <option value="todas">Todas</option>
                  <option value="presencial">Presencial</option>
                  <option value="telemedicina">Telemedicina</option>
                </select>
              </div>
              {hayFiltros && (
                <div className="flex items-end">
                  <button onClick={limpiarFiltros} className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600 py-2">
                    <X size={14} /> Limpiar filtros
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mb-4 text-sm text-gray-500">
          {filtrados.length} médico{filtrados.length !== 1 ? "s" : ""} encontrado{filtrados.length !== 1 ? "s" : ""}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filtrados.map((medico) => {
            const centrosMedico = centros.filter((c) => medico.centros.includes(c.id))
            return (
              <div key={medico.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center text-primary font-bold text-lg shrink-0">
                    {medico.nombre.split(" ").slice(-2).map((n) => n[0]).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-secondary">{medico.nombre}</h3>
                        <p className="text-sm text-gray-500">{medico.especialidad}</p>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-yellow-500 shrink-0">
                        <Star size={12} fill="currentColor" /> {medico.experiencia} años
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{medico.descripcion}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {medico.formatoAtencion.map((f) => (
                        <span key={f} className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${
                          f === "telemedicina" ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"
                        }`}>
                          {f === "telemedicina" ? <Video size={12} /> : <MapPin size={12} />}
                          {f === "telemedicina" ? "Telemedicina" : "Presencial"}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 text-xs text-gray-400 space-y-1">
                      {centrosMedico.slice(0, 2).map((c) => (
                        <div key={c.id} className="flex items-center gap-1">
                          <MapPin size={10} /> {c.nombre}
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <Link
                        href={`/reserva?medico=${medico.id}`}
                        className="inline-flex items-center gap-1 bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                      >
                        <Calendar size={14} /> Reservar hora
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {filtrados.length === 0 && (
          <div className="text-center py-16">
            <Search size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">No encontramos médicos con esos criterios.</p>
            <button onClick={limpiarFiltros} className="text-primary font-medium hover:underline mt-2">
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
