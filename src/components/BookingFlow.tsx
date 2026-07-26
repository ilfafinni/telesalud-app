"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { medicos, centros, especialidades } from "@/lib/data"
import { Calendar, Clock, User, MapPin, Video, ArrowLeft, CheckCircle } from "lucide-react"

type Step = "identify" | "specialty" | "doctor" | "datetime" | "confirm" | "done"

interface FormData {
  rut: string
  nombre: string
  email: string
  telefono: string
  especialidad: string
  medicoId: string
  centroId: string
  fecha: string
  hora: string
  modalidad: "presencial" | "telemedicina"
  motivo: string
}

export default function BookingFlow() {
  const router = useRouter()
  const [step, setStep] = useState<Step>("identify")
  const [form, setForm] = useState<FormData>({
    rut: "", nombre: "", email: "", telefono: "",
    especialidad: "", medicoId: "", centroId: "",
    fecha: "", hora: "", modalidad: "presencial", motivo: "",
  })
  const [citaId, setCitaId] = useState("")
  const [loading, setLoading] = useState(false)

  const updateForm = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const medicosFiltrados = form.especialidad
    ? medicos.filter((m) => m.especialidad === form.especialidad && m.disponible)
    : medicos.filter((m) => m.disponible)

  const generarHoras = () => {
    const horas: string[] = []
    for (let h = 8; h <= 18; h++) {
      horas.push(`${h.toString().padStart(2, "0")}:00`)
      if (h < 18) horas.push(`${h.toString().padStart(2, "0")}:30`)
    }
    return horas
  }

  const handleSubmit = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    const id = `CIT-${Date.now().toString(36).toUpperCase()}`
    setCitaId(id)
    setStep("done")
    setLoading(false)
  }

  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-8 text-sm">
      {["identify", "specialty", "doctor", "datetime", "confirm"].indexOf(step) > 0 ? (
        <button onClick={() => setStep("identify")} className="w-8 h-8 rounded-full bg-primary text-white text-sm font-medium">1</button>
      ) : (
        <div className="w-8 h-8 rounded-full bg-primary text-white text-sm font-medium flex items-center justify-center">1</div>
      )}
      <div className="w-8 h-0.5 bg-gray-300" />
      {["specialty", "doctor", "datetime", "confirm"].indexOf(step) > 0 ? (
        <button onClick={() => ["identify", "specialty"].includes(step) ? setStep("specialty") : {}} className="w-8 h-8 rounded-full bg-primary text-white text-sm font-medium">2</button>
      ) : (
        <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 text-sm font-medium flex items-center justify-center">2</div>
      )}
      <div className="w-8 h-0.5 bg-gray-300" />
      {["doctor", "datetime", "confirm"].indexOf(step) > 0 ? (
        <button onClick={() => ["identify", "specialty", "doctor"].includes(step) ? setStep("doctor") : {}} className="w-8 h-8 rounded-full bg-primary text-white text-sm font-medium">3</button>
      ) : (
        <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 text-sm font-medium flex items-center justify-center">3</div>
      )}
      <div className="w-8 h-0.5 bg-gray-300" />
      {["datetime", "confirm"].indexOf(step) > 0 ? (
        <button onClick={() => ["identify", "specialty", "doctor", "datetime"].includes(step) ? setStep("datetime") : {}} className="w-8 h-8 rounded-full bg-primary text-white text-sm font-medium">4</button>
      ) : (
        <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 text-sm font-medium flex items-center justify-center">4</div>
      )}
      {step === "done" ? <div className="w-8 h-0.5 bg-gray-300" /> : <div className="w-8 h-0.5 bg-gray-300" />}
      {step === "done" ? (
        <div className="w-8 h-8 rounded-full bg-primary text-white text-sm font-medium flex items-center justify-center">5</div>
      ) : (
        <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 text-sm font-medium flex items-center justify-center">5</div>
      )}
    </div>
  )

  return (
    <div className="max-w-2xl mx-auto">
      <StepIndicator />

      {/* Step 1: Identificación */}
      {step === "identify" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-semibold text-secondary mb-2">Identifícate</h2>
          <p className="text-gray-500 text-sm mb-6">No necesitas tener una cuenta. Solo dinos quién eres para agendar tu hora.</p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">RUT</label>
              <input
                type="text"
                placeholder="12.345.678-9"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={form.rut}
                onChange={(e) => updateForm("rut", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
              <input
                type="text"
                placeholder="Juan Pérez"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={form.nombre}
                onChange={(e) => updateForm("nombre", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="juan@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={form.email}
                  onChange={(e) => updateForm("email", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                <input
                  type="tel"
                  placeholder="+569 1234 5678"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={form.telefono}
                  onChange={(e) => updateForm("telefono", e.target.value)}
                />
              </div>
            </div>
            <button
              onClick={() => setStep("specialty")}
              disabled={!form.rut || !form.nombre}
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continuar
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Especialidad */}
      {step === "specialty" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <button onClick={() => setStep("identify")} className="flex items-center gap-1 text-gray-500 mb-4 hover:text-primary">
            <ArrowLeft size={16} /> Volver
          </button>
          <h2 className="text-xl font-semibold text-secondary mb-2">Elige especialidad</h2>
          <p className="text-gray-500 text-sm mb-6">Selecciona la especialidad que necesitas.</p>
          <div className="grid grid-cols-2 gap-3">
            {especialidades.map((esp) => (
              <button
                key={esp}
                onClick={() => { updateForm("especialidad", esp); setStep("doctor") }}
                className={`p-4 rounded-lg border text-left transition-all ${
                  form.especialidad === esp
                    ? "border-primary bg-primary-light text-primary"
                    : "border-gray-200 hover:border-primary hover:bg-primary-light"
                }`}
              >
                <span className="font-medium">{esp}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Médico */}
      {step === "doctor" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <button onClick={() => setStep("specialty")} className="flex items-center gap-1 text-gray-500 mb-4 hover:text-primary">
            <ArrowLeft size={16} /> Volver
          </button>
          <h2 className="text-xl font-semibold text-secondary mb-2">Selecciona tu médico</h2>
          <p className="text-gray-500 text-sm mb-6">Especialidad: <span className="font-medium text-secondary">{form.especialidad}</span></p>
          <div className="space-y-3">
            {medicosFiltrados.map((medico) => (
              <button
                key={medico.id}
                onClick={() => { updateForm("medicoId", medico.id); setStep("datetime") }}
                className={`w-full p-4 rounded-lg border text-left transition-all flex items-center gap-4 ${
                  form.medicoId === medico.id
                    ? "border-primary bg-primary-light"
                    : "border-gray-200 hover:border-primary hover:bg-gray-50"
                }`}
              >
                <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-primary font-bold">
                  {medico.nombre.split(" ").slice(-2).map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium text-secondary">{medico.nombre}</p>
                  <p className="text-sm text-gray-500">{medico.especialidad}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Fecha y Hora */}
      {step === "datetime" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <button onClick={() => setStep("doctor")} className="flex items-center gap-1 text-gray-500 mb-4 hover:text-primary">
            <ArrowLeft size={16} /> Volver
          </button>
          <h2 className="text-xl font-semibold text-secondary mb-2">Fecha y hora</h2>
          <p className="text-gray-500 text-sm mb-6">Elige cuándo quieres tu consulta.</p>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Modalidad</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => updateForm("modalidad", "presencial")}
                className={`p-4 rounded-lg border flex items-center gap-3 transition-all ${
                  form.modalidad === "presencial" ? "border-primary bg-primary-light" : "border-gray-200 hover:border-primary"
                }`}
              >
                <MapPin size={20} className={form.modalidad === "presencial" ? "text-primary" : "text-gray-400"} />
                <div className="text-left">
                  <p className="font-medium text-sm">Presencial</p>
                  <p className="text-xs text-gray-500">En centro médico</p>
                </div>
              </button>
              <button
                onClick={() => updateForm("modalidad", "telemedicina")}
                className={`p-4 rounded-lg border flex items-center gap-3 transition-all ${
                  form.modalidad === "telemedicina" ? "border-primary bg-primary-light" : "border-gray-200 hover:border-primary"
                }`}
              >
                <Video size={20} className={form.modalidad === "telemedicina" ? "text-primary" : "text-gray-400"} />
                <div className="text-left">
                  <p className="font-medium text-sm">Telemedicina</p>
                  <p className="text-xs text-gray-500">Videollamada</p>
                </div>
              </button>
            </div>
          </div>

          {form.modalidad === "presencial" && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Centro médico</label>
              <div className="space-y-2">
                {centros.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => updateForm("centroId", c.id)}
                    className={`w-full p-3 rounded-lg border text-left transition-all ${
                      form.centroId === c.id ? "border-primary bg-primary-light" : "border-gray-200 hover:border-primary"
                    }`}
                  >
                    <p className="font-medium text-sm">{c.nombre}</p>
                    <p className="text-xs text-gray-500">{c.direccion}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Fecha</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={form.fecha}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => updateForm("fecha", e.target.value)}
            />
          </div>

          {form.fecha && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Hora disponible</label>
              <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                {generarHoras().map((h) => (
                  <button
                    key={h}
                    onClick={() => updateForm("hora", h)}
                    className={`p-2 rounded-lg border text-sm transition-all ${
                      form.hora === h ? "border-primary bg-primary text-white" : "border-gray-200 hover:border-primary"
                    }`}
                  >
                    {h}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Motivo de la consulta (opcional)</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              rows={2}
              placeholder="Describe brevemente tu motivo"
              value={form.motivo}
              onChange={(e) => updateForm("motivo", e.target.value)}
            />
          </div>

          <button
            onClick={() => setStep("confirm")}
            disabled={!form.fecha || !form.hora || (form.modalidad === "presencial" && !form.centroId)}
            className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Revisar y confirmar
          </button>
        </div>
      )}

      {/* Step 5: Confirmación */}
      {step === "confirm" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <button onClick={() => setStep("datetime")} className="flex items-center gap-1 text-gray-500 mb-4 hover:text-primary">
            <ArrowLeft size={16} /> Volver
          </button>
          <h2 className="text-xl font-semibold text-secondary mb-2">Confirma tu cita</h2>
          <p className="text-gray-500 text-sm mb-6">Revisa los detalles antes de confirmar.</p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <User size={18} className="text-primary" />
              <div>
                <p className="text-sm font-medium">{form.nombre}</p>
                <p className="text-xs text-gray-500">{form.rut}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Calendar size={18} className="text-primary" />
              <div>
                <p className="text-sm font-medium">{form.fecha} a las {form.hora}</p>
                <p className="text-xs text-gray-500">{form.modalidad === "presencial" ? "Presencial" : "Telemedicina"}</p>
              </div>
            </div>
            {form.modalidad === "presencial" && (
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <MapPin size={18} className="text-primary" />
                <div>
                  <p className="text-sm font-medium">{centros.find((c) => c.id === form.centroId)?.nombre}</p>
                  <p className="text-xs text-gray-500">{centros.find((c) => c.id === form.centroId)?.direccion}</p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Clock size={18} className="text-primary" />
              <div>
                <p className="text-sm font-medium">{medicos.find((m) => m.id === form.medicoId)?.nombre}</p>
                <p className="text-xs text-gray-500">{form.especialidad}</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
          >
            {loading ? "Confirmando..." : "Confirmar y reservar"}
          </button>
        </div>
      )}

      {/* Step 6: Listo */}
      {step === "done" && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle size={32} className="text-green-600" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-secondary mb-2">¡Cita confirmada!</h2>
          <p className="text-gray-500 mb-4">Tu hora ha sido reservada exitosamente.</p>
          <div className="bg-gray-50 rounded-lg p-4 mb-6 inline-block">
            <p className="text-sm text-gray-500">Código de reserva</p>
            <p className="text-2xl font-bold text-primary">{citaId}</p>
          </div>
          <div className="space-y-3">
            <p className="text-sm text-gray-600">
              <strong>Paciente:</strong> {form.nombre} ({form.rut})
            </p>
            <p className="text-sm text-gray-600">
              <strong>Fecha:</strong> {form.fecha} a las {form.hora}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Modalidad:</strong> {form.modalidad === "presencial" ? "Presencial" : "Telemedicina"}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => { setStep("identify"); setForm({ rut: "", nombre: "", email: "", telefono: "", especialidad: "", medicoId: "", centroId: "", fecha: "", hora: "", modalidad: "presencial", motivo: "" }) }}
              className="bg-primary text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Nueva Reserva
            </button>
            <button
              onClick={() => router.push("/mis-citas")}
              className="border border-primary text-primary font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-light transition-colors"
            >
              Mis Citas
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
