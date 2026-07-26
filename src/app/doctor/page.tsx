"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { citas, medicos, medicoPorEmail } from "@/lib/data"
import { CalendarDays, Clock, Users, TrendingUp, CheckCircle, XCircle, Video, MapPin } from "lucide-react"
import Link from "next/link"

export default function DoctorDashboard() {
  const router = useRouter()
  const [medicoId, setMedicoId] = useState("")
  const [medicoNombre, setMedicoNombre] = useState("")

  useEffect(() => {
    const stored = localStorage.getItem("usuario")
    if (stored) {
      const user = JSON.parse(stored)
      const id = medicoPorEmail[user.email] || ""
      setMedicoId(id)
      const med = medicos.find((m) => m.id === id)
      setMedicoNombre(med?.nombre || user.nombre)
    }
  }, [])

  const misCitas = citas.filter((c) => c.medicoId === medicoId)
  const pendientes = misCitas.filter((c) => c.estado === "pendiente")
  const confirmadas = misCitas.filter((c) => c.estado === "confirmada")
  const realizadas = misCitas.filter((c) => c.estado === "realizada")
  const hoy = misCitas.filter((c) => c.fecha === new Date().toISOString().split("T")[0])
  const proxima = misCitas.filter((c) => c.fecha >= new Date().toISOString().split("T")[0]).sort((a, b) => a.fecha.localeCompare(b.fecha)).slice(0, 5)

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-secondary">Bienvenido, {medicoNombre}</h1>
        <p className="text-gray-500">Resumen de tu agenda y actividades.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Citas", value: misCitas.length, icon: CalendarDays, color: "bg-blue-500" },
          { label: "Pendientes", value: pendientes.length, icon: Clock, color: "bg-yellow-500" },
          { label: "Confirmadas", value: confirmadas.length, icon: CheckCircle, color: "bg-green-500" },
          { label: "Hoy", value: hoy.length, icon: TrendingUp, color: "bg-purple-500" },
        ].map((card) => {
          const Icon = card.icon
          return (
            <div key={card.label} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{card.label}</p>
                  <p className="text-3xl font-bold text-secondary mt-1">{card.value}</p>
                </div>
                <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-secondary">Próximas citas</h2>
            <Link href="/doctor/citas" className="text-sm text-primary hover:underline">Ver todas</Link>
          </div>
          {proxima.length === 0 ? (
            <p className="text-sm text-gray-400 py-8 text-center">No tienes citas próximas.</p>
          ) : (
            <div className="space-y-3">
              {proxima.map((cita) => (
                <div key={cita.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-primary font-bold text-sm shrink-0">
                      {cita.pacienteNombre.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-secondary">{cita.pacienteNombre}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <CalendarDays size={12} /> {cita.fecha} <Clock size={12} className="ml-1" /> {cita.hora}
                      </p>
                      <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                        {cita.modalidad === "telemedicina" ? <Video size={10} /> : <MapPin size={10} />}
                        {cita.modalidad === "telemedicina" ? "Telemedicina" : cita.centroNombre}
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    cita.estado === "confirmada" ? "bg-green-100 text-green-700" :
                    cita.estado === "pendiente" ? "bg-yellow-100 text-yellow-700" : ""
                  }`}>
                    {cita.estado.charAt(0).toUpperCase() + cita.estado.slice(1)}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="font-semibold text-secondary mb-4">Resumen rápido</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50">
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-yellow-500" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Pendientes de confirmar</p>
                  <p className="text-xs text-gray-500">Pacientes esperando tu confirmación</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-yellow-600">{pendientes.length}</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-green-50">
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-green-500" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Confirmadas</p>
                  <p className="text-xs text-gray-500">Citas confirmadas por atender</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-green-600">{confirmadas.length}</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50">
              <div className="flex items-center gap-3">
                <TrendingUp size={20} className="text-blue-500" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Realizadas</p>
                  <p className="text-xs text-gray-500">Consultas ya atendidas</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-blue-600">{realizadas.length}</span>
            </div>

            <Link
              href="/doctor/citas"
              className="block w-full bg-primary text-white text-center font-medium py-2.5 rounded-lg hover:bg-primary-dark transition-colors mt-4"
            >
              Gestionar mis citas
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
