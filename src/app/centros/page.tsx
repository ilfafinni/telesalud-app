"use client"

import { useState, useMemo } from "react"
import { centros } from "@/lib/data"
import {
  Search,
  Building2,
  MapPin,
  Phone,
  Clock,
  ChevronDown,
  ChevronUp,
  Navigation,
  CalendarCheck,
  ArrowRight,
  Stethoscope,
  MapPinned,
  Globe,
} from "lucide-react"
import Link from "next/link"

const servicioColores: Record<string, string> = {
  "Medicina General": "bg-primary-light text-primary",
  Pediatría: "bg-sky-100 text-sky-700",
  Cardiología: "bg-rose-100 text-rose-700",
  Traumatología: "bg-amber-100 text-amber-700",
  Dermatología: "bg-pink-100 text-pink-700",
  Psiquiatría: "bg-violet-100 text-violet-700",
  Nutrición: "bg-emerald-100 text-emerald-700",
  Laboratorio: "bg-slate-100 text-slate-700",
  Imagenología: "bg-indigo-100 text-indigo-700",
  Ginecología: "bg-fuchsia-100 text-fuchsia-700",
  Oftalmología: "bg-blue-100 text-blue-700",
  Kinesiología: "bg-orange-100 text-orange-700",
  Neurología: "bg-teal-100 text-teal-700",
  Otorrinolaringología: "bg-cyan-100 text-cyan-700",
}

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
        return (
          c.nombre.toLowerCase().includes(q) ||
          c.ciudad.toLowerCase().includes(q) ||
          c.direccion.toLowerCase().includes(q)
        )
      }
      return true
    })
  }, [busqueda, regionFiltro])

  const totalServicios = [...new Set(centros.flatMap((c) => c.servicios))].length

  return (
    <div className="min-h-screen">
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-secondary to-secondary-dark text-white">
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-accent/10" />
        <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-primary/30" />
        <div className="relative max-w-7xl mx-auto px-4 py-14 md:py-20">
          <span className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
            <MapPinned size={14} className="text-accent" />
            Centros Médicos
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-5">Nuestra Red de Centros</h1>
          <p className="text-white/70 mt-4 max-w-2xl">
            Atención integral en todo Chile con la calidad y confianza de TeleSalud.
            Encuentra el centro más cercano a ti.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-3xl">
            <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <Building2 size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold">{centros.length}</p>
                <p className="text-xs text-white/70">Centros</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <Globe size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold">{regiones.length}</p>
                <p className="text-xs text-white/70">Regiones</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/10 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <Stethoscope size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalServicios}</p>
                <p className="text-xs text-white/70">Especialidades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Search + filter bar */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-5 mb-8 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nombre, ciudad o dirección..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
            <select
              className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={regionFiltro}
              onChange={(e) => setRegionFiltro(e.target.value)}
            >
              <option value="">Todas las regiones</option>
              {regiones.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">
              {filtrados.length} centro{filtrados.length !== 1 ? "s" : ""} encontrado{filtrados.length !== 1 ? "s" : ""}
            </p>
          </div>

          {/* Centre cards */}
          <div className="grid gap-5">
            {filtrados.map((centro) => (
              <div
                key={centro.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Card header (always visible) */}
                <button
                  onClick={() => setExpandido(expandido === centro.id ? null : centro.id)}
                  className="w-full p-5 md:p-6 text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <div className="w-14 h-14 bg-primary-light rounded-2xl flex items-center justify-center shrink-0">
                        <Building2 size={26} className="text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h2 className="text-lg md:text-xl font-semibold text-secondary truncate">
                            {centro.nombre}
                          </h2>
                          <span className="text-xs bg-primary-light text-primary px-2.5 py-0.5 rounded-full font-medium shrink-0">
                            {centro.region}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-sm text-gray-500">
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin size={14} className="text-primary shrink-0" /> {centro.direccion}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Phone size={14} className="text-primary shrink-0" /> {centro.telefono}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock size={14} className="text-primary shrink-0" /> {centro.horario}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-400 shrink-0 mt-1">
                      {expandido === centro.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>
                </button>

                {/* Expanded details */}
                {expandido === centro.id && (
                  <div className="px-5 md:px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4 grid md:grid-cols-2 gap-6">
                      {/* Left: services */}
                      <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                          Servicios disponibles
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {centro.servicios.map((s) => (
                            <Link
                              key={s}
                              href={`/especialidades?q=${encodeURIComponent(s)}`}
                              className={`text-sm px-3 py-1.5 rounded-lg hover:opacity-80 transition-opacity font-medium ${
                                servicioColores[s] ?? "bg-primary-light text-primary"
                              }`}
                            >
                              {s}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Right: quick info + actions */}
                      <div className="flex flex-col gap-3">
                        <div className="bg-gray-50 rounded-xl p-4 space-y-2.5">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin size={14} className="text-primary shrink-0" />
                            <span>{centro.ciudad}, {centro.region}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone size={14} className="text-primary shrink-0" />
                            <span>{centro.telefono}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock size={14} className="text-primary shrink-0" />
                            <span>{centro.horario}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                          <Link
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(centro.direccion + ", " + centro.ciudad + ", Chile")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium border border-gray-200 text-gray-600 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                          >
                            <Navigation size={15} /> Cómo llegar
                          </Link>
                          <Link
                            href={`/reserva?centro=${centro.id}`}
                            className="inline-flex items-center gap-2 text-sm font-medium bg-primary text-white px-5 py-2.5 rounded-xl hover:bg-primary-dark transition-colors"
                          >
                            <CalendarCheck size={15} /> Reservar hora <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtrados.length === 0 && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 size={32} className="text-gray-300" />
              </div>
              <p className="text-gray-500 font-medium">No se encontraron centros con esos criterios.</p>
              <p className="text-sm text-gray-400 mt-1">Intenta con otro nombre, ciudad o región.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
