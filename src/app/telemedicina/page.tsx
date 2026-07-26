"use client"

import { useState } from "react"
import Link from "next/link"
import { Video, Mic, MicOff, VideoOff, PhoneOff, MessageSquare, Monitor, Users, Shield, ChevronRight, Clock } from "lucide-react"

export default function TelemedicinaPage() {
  const [enLlamada, setEnLlamada] = useState(false)
  const [micOn, setMicOn] = useState(true)
  const [camOn, setCamOn] = useState(true)
  const [codigo, setCodigo] = useState("")

  if (!enLlamada) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-secondary mb-4">Telemedicina</h1>
            <p className="text-gray-600 max-w-xl mx-auto">Conéctate con tu médico desde donde estés. Consulta segura, rápida y sin desplazamientos.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-semibold text-secondary mb-6">Ingresa a tu consulta</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Código de cita</label>
                    <input
                      type="text"
                      placeholder="Ej: CIT-001"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-lg"
                      value={codigo}
                      onChange={(e) => setCodigo(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={() => setEnLlamada(true)}
                    disabled={!codigo}
                    className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  >
                    <Video size={22} /> Ingresar a videollamada
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">¿No tienes una cita?</h3>
                  <Link href="/reserva" className="text-primary font-medium hover:underline flex items-center gap-1">
                    Reserva una hora de telemedicina <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <h3 className="font-semibold text-secondary mb-3">Requisitos técnicos</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <Monitor size={16} className="text-primary mt-0.5 shrink-0" />
                    <div><p className="font-medium">Dispositivo</p><p className="text-xs text-gray-400">Computador, tablet o celular con cámara</p></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users size={16} className="text-primary mt-0.5 shrink-0" />
                    <div><p className="font-medium">Internet</p><p className="text-xs text-gray-400">Conexión estable (mín. 5 Mbps)</p></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield size={16} className="text-primary mt-0.5 shrink-0" />
                    <div><p className="font-medium">Privacidad</p><p className="text-xs text-gray-400">Busca un lugar tranquilo y sin interrupciones</p></div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                    <div><p className="font-medium">Puntualidad</p><p className="text-xs text-gray-400">Conéctate 5 minutos antes de tu hora</p></div>
                  </li>
                </ul>
              </div>

              <div className="bg-primary/5 rounded-xl p-5">
                <h3 className="font-semibold text-secondary mb-2">Documentos necesarios</h3>
                <p className="text-sm text-gray-600">Ten a mano tu RUT y documento de identidad. Si tienes exámenes previos, tenlos disponibles para mostrarlos al médico.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-secondary mb-6">Beneficios de la telemedicina</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Clock, titulo: "Sin esperas", desc: "Atención puntual sin salas de espera" },
                { icon: Shield, titulo: "Segura y confidencial", desc: "Cifrado de extremo a extremo" },
                { icon: Video, titulo: "Desde cualquier lugar", desc: "Solo necesitas internet" },
              ].map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.titulo} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <Icon size={28} className="text-primary mb-3" />
                    <h3 className="font-semibold text-secondary mb-1">{b.titulo}</h3>
                    <p className="text-sm text-gray-500">{b.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-950 min-h-screen flex flex-col">
      <div className="flex-1 relative bg-gray-900 m-4 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl text-gray-500 font-bold">DR</span>
            </div>
            <p className="text-white text-xl font-medium">Dr. Carlos Muñoz</p>
            <p className="text-gray-400">Medicina General</p>
            <p className="text-gray-500 text-sm mt-2">Código: {codigo}</p>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 w-56 aspect-video bg-gray-800 rounded-xl border-2 border-gray-700 flex items-center justify-center shadow-lg">
          {camOn ? (
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-xl text-gray-500">TU</span>
            </div>
          ) : (
            <VideoOff size={32} className="text-gray-500" />
          )}
          <span className="absolute bottom-2 left-3 text-xs text-gray-400">Tú</span>
        </div>

        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 text-white text-sm px-3 py-1.5 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span>En llamada</span>
        </div>

        <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/40 text-white text-sm px-3 py-1.5 rounded-full">
          <Clock size={14} /> 12:34
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 pb-6">
        <button onClick={() => setMicOn(!micOn)} className={`p-4 rounded-full transition-all ${micOn ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-red-500 text-white"}`}>
          {micOn ? <Mic size={24} /> : <MicOff size={24} />}
        </button>
        <button onClick={() => setCamOn(!camOn)} className={`p-4 rounded-full transition-all ${camOn ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-red-500 text-white"}`}>
          {camOn ? <Video size={24} /> : <VideoOff size={24} />}
        </button>
        <button className="p-4 rounded-full bg-gray-700 text-white hover:bg-gray-600">
          <MessageSquare size={24} />
        </button>
        <button onClick={() => setEnLlamada(false)} className="p-4 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all">
          <PhoneOff size={24} />
        </button>
      </div>
    </div>
  )
}
