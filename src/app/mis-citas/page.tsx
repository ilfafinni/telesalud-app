"use client"

import { useState } from "react"
import { citas } from "@/lib/data"
import { Calendar, Clock, MapPin, Video, Search, XCircle } from "lucide-react"
import Link from "next/link"

export default function MisCitasPage() {
  const [rut, setRut] = useState("")
  const [buscado, setBuscado] = useState(false)

  const citasPaciente = buscado && rut
    ? citas.filter((c) => c.pacienteRut === rut)
    : []

  const estadoBadge = (estado: string) => {
    const styles: Record<string, string> = {
      confirmada: "bg-green-100 text-green-700",
      pendiente: "bg-yellow-100 text-yellow-700",
      cancelada: "bg-red-100 text-red-700",
      realizada: "bg-blue-100 text-blue-700",
    }
    return styles[estado] || "bg-gray-100 text-gray-700"
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-secondary mb-2">Mis Citas</h1>
          <p className="text-gray-500">Ingresa tu RUT para consultar tus horas agendadas.</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Ingresa tu RUT (ej: 12345678-9)"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && setBuscado(true)}
            />
            <button
              onClick={() => setBuscado(true)}
              disabled={!rut}
              className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              <Search size={18} /> Buscar
            </button>
          </div>
        </div>

        {buscado && citasPaciente.length === 0 && (
          <div className="text-center py-12">
            <XCircle size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">No encontramos citas para este RUT.</p>
            <Link href="/reserva" className="text-primary font-medium hover:underline mt-2 inline-block">
              Reservar una hora
            </Link>
          </div>
        )}

        {citasPaciente.length > 0 && (
          <div className="space-y-4">
            {citasPaciente.map((cita) => (
              <div key={cita.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${estadoBadge(cita.estado)}`}>
                      {cita.estado.charAt(0).toUpperCase() + cita.estado.slice(1)}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400 font-mono">{cita.id}</span>
                </div>

                <h3 className="font-semibold text-secondary mb-3">{cita.medicoNombre}</h3>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    {cita.fecha}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    {cita.hora} hrs
                  </div>
                  <div className="flex items-center gap-2">
                    {cita.modalidad === "telemedicina" ? (
                      <Video size={16} className="text-primary" />
                    ) : (
                      <MapPin size={16} className="text-primary" />
                    )}
                    {cita.modalidad === "telemedicina" ? "Telemedicina" : cita.centroNombre}
                  </div>
                </div>

                {cita.estado === "pendiente" && (
                  <div className="mt-4 pt-3 border-t border-gray-100 flex gap-2">
                    <button className="text-sm text-primary font-medium hover:underline">Confirmar</button>
                    <button className="text-sm text-red-500 font-medium hover:underline">Cancelar</button>
                  </div>
                )}

                {cita.estado === "confirmada" && cita.modalidad === "telemedicina" && (
                  <div className="mt-4">
                    <Link
                      href="/telemedicina"
                      className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      <Video size={16} /> Ingresar a telemedicina
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {!buscado && (
          <div className="text-center py-12 text-gray-400">
            <Search size={48} className="mx-auto mb-4 opacity-50" />
            <p>Ingresa tu RUT para ver tus citas.</p>
          </div>
        )}
      </div>
    </div>
  )
}
