"use client"

import { useState, useEffect } from "react"
import { citas, medicos, centros, especialidadesData } from "@/lib/data"
import { CalendarDays, Stethoscope, Building2, TrendingUp, Clock, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [stats, setStats] = useState({ totalCitas: 0, pendientes: 0, confirmadas: 0, realizadas: 0, canceladas: 0 })

  useEffect(() => {
    setStats({
      totalCitas: citas.length,
      pendientes: citas.filter((c) => c.estado === "pendiente").length,
      confirmadas: citas.filter((c) => c.estado === "confirmada").length,
      realizadas: citas.filter((c) => c.estado === "realizada").length,
      canceladas: citas.filter((c) => c.estado === "cancelada").length,
    })
  }, [])

  const cards = [
    { label: "Total Citas", value: stats.totalCitas, icon: CalendarDays, color: "bg-blue-500" },
    { label: "Médicos", value: medicos.length, icon: Stethoscope, color: "bg-green-500" },
    { label: "Centros", value: centros.length, icon: Building2, color: "bg-purple-500" },
    { label: "Especialidades", value: especialidadesData.length, icon: TrendingUp, color: "bg-orange-500" },
  ]

  const statusCards = [
    { label: "Pendientes", value: stats.pendientes, icon: Clock, color: "text-yellow-500", bg: "bg-yellow-50" },
    { label: "Confirmadas", value: stats.confirmadas, icon: CheckCircle, color: "text-green-500", bg: "bg-green-50" },
    { label: "Realizadas", value: stats.realizadas, icon: CheckCircle, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Canceladas", value: stats.canceladas, icon: XCircle, color: "text-red-500", bg: "bg-red-50" },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold text-secondary mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((card) => {
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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statusCards.map((card) => {
          const Icon = card.icon
          return (
            <div key={card.label} className={`${card.bg} rounded-xl p-4 border border-gray-100`}>
              <div className="flex items-center gap-3">
                <Icon size={20} className={card.color} />
                <div>
                  <p className="text-xs text-gray-500">{card.label}</p>
                  <p className={`text-xl font-bold ${card.color}`}>{card.value}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="font-semibold text-secondary mb-4">Accesos rápidos</h2>
          <div className="space-y-3">
            <Link href="/admin/citas" className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <CalendarDays size={20} className="text-primary" />
              <div>
                <p className="font-medium text-sm">Gestionar Citas</p>
                <p className="text-xs text-gray-500">Ver, confirmar y cancelar citas</p>
              </div>
            </Link>
            <Link href="/admin/medicos" className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <Stethoscope size={20} className="text-primary" />
              <div>
                <p className="font-medium text-sm">Gestionar Médicos</p>
                <p className="text-xs text-gray-500">Administrar especialistas</p>
              </div>
            </Link>
            <Link href="/admin/centros" className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <Building2 size={20} className="text-primary" />
              <div>
                <p className="font-medium text-sm">Centros Médicos</p>
                <p className="text-xs text-gray-500">Administrar centros y sucursales</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="font-semibold text-secondary mb-4">Últimas citas</h2>
          <div className="space-y-3">
            {citas.slice(0, 4).map((cita) => (
              <div key={cita.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div>
                  <p className="text-sm font-medium">{cita.pacienteNombre}</p>
                  <p className="text-xs text-gray-500">{cita.especialidad} - {cita.fecha}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  cita.estado === "confirmada" ? "bg-green-100 text-green-700" :
                  cita.estado === "pendiente" ? "bg-yellow-100 text-yellow-700" :
                  cita.estado === "realizada" ? "bg-blue-100 text-blue-700" :
                  "bg-red-100 text-red-700"
                }`}>
                  {cita.estado}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
