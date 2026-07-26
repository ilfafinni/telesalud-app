"use client"

import { useState } from "react"
import { Video, Mic, MicOff, VideoOff, PhoneOff, MessageSquare } from "lucide-react"

export default function TelemedicinaPage() {
  const [enLlamada, setEnLlamada] = useState(false)
  const [micOn, setMicOn] = useState(true)
  const [camOn, setCamOn] = useState(true)
  const [codigo, setCodigo] = useState("")

  return (
    <div className="bg-gray-900 min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Telemedicina</h1>
          <p className="text-gray-400">Conéctate con tu médico desde donde estés.</p>
        </div>

        {!enLlamada ? (
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto bg-primary-light rounded-full flex items-center justify-center mb-4">
                  <Video size={36} className="text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-secondary mb-2">Ingresa a tu consulta</h2>
                <p className="text-sm text-gray-500">
                  Usa el código de tu cita para ingresar a la videollamada con tu médico.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Código de cita</label>
                  <input
                    type="text"
                    placeholder="Ej: CIT-001"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-mono"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                  />
                </div>
                <button
                  onClick={() => setEnLlamada(true)}
                  disabled={!codigo}
                  className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Video size={20} /> Ingresar
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-700 mb-2">¿No tienes una cita?</h3>
                <a href="/reserva" className="text-primary text-sm font-medium hover:underline">
                  Reserva una hora de telemedicina
                </a>
              </div>
            </div>

            <div className="mt-6 bg-gray-800 rounded-xl p-4">
              <h3 className="text-white font-medium mb-3">Recomendaciones:</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Conéctate 5 minutos antes de tu hora agendada.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Busca un lugar tranquilo con buena iluminación.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Asegúrate de tener una conexión a internet estable.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Ten a mano tu RUT y documento de identidad.
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-gray-800 rounded-xl aspect-video flex items-center justify-center mb-4 relative">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl text-gray-400 font-bold">DR</span>
                </div>
                <p className="text-white font-medium">Dr. Carlos Muñoz</p>
                <p className="text-gray-400 text-sm">Medicina General</p>
                {!camOn && (
                  <div className="mt-4 bg-yellow-500/20 text-yellow-400 text-sm px-4 py-1 rounded-full inline-block">
                    Cámara apagada
                  </div>
                )}
              </div>

              <div className="absolute bottom-4 right-4 w-48 aspect-video bg-gray-700 rounded-lg border-2 border-gray-600 flex items-center justify-center">
                <span className="text-sm text-gray-400">Tu video</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setMicOn(!micOn)}
                className={`p-4 rounded-full transition-colors ${
                  micOn ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-red-500 text-white"
                }`}
              >
                {micOn ? <Mic size={22} /> : <MicOff size={22} />}
              </button>
              <button
                onClick={() => setCamOn(!camOn)}
                className={`p-4 rounded-full transition-colors ${
                  camOn ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-red-500 text-white"
                }`}
              >
                {camOn ? <Video size={22} /> : <VideoOff size={22} />}
              </button>
              <button className="p-4 rounded-full bg-gray-700 text-white hover:bg-gray-600">
                <MessageSquare size={22} />
              </button>
              <button
                onClick={() => setEnLlamada(false)}
                className="p-4 rounded-full bg-red-500 text-white hover:bg-red-600"
              >
                <PhoneOff size={22} />
              </button>
            </div>

            <p className="text-center text-gray-400 text-sm mt-4">
              Llamada en curso... (simulación)
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
