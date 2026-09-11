"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Video,
  Mic,
  MicOff,
  VideoOff,
  PhoneOff,
  MessageSquare,
  Shield,
  ChevronRight,
  Clock,
  Stethoscope,
  HeartPulse,
  FileText,
  CreditCard,
  Mail,
  CheckCircle,
  Star,
  ArrowRight,
  Wifi,
  Laptop,
} from "lucide-react"

const PASOS = [
  { num: 1, titulo: "Reserva tu hora", desc: "Selecciona especialidad, doctor y horario", icon: FileText },
  { num: 2, titulo: "Confirma el pago", desc: "Paga en 15 min por Webpay o Servipag", icon: CreditCard },
  { num: 3, titulo: "Prepárate", desc: "Recibe link de Google Meet por email", icon: Video },
  { num: 4, titulo: "Inicia la atención", desc: "Conéctate 15 min antes de tu hora", icon: Clock },
  { num: 5, titulo: "Post-atención", desc: "Recibe indicaciones, boleta y encuesta", icon: Mail },
]

const REQUISITOS = [
  { icon: Laptop, titulo: "Dispositivo", desc: "Computador, tablet o celular con cámara y micrófono" },
  { icon: Wifi, titulo: "Internet estable", desc: "Conexión mínima de 5 Mbps (WiFi o datos)" },
  { icon: Shield, titulo: "Privacidad", desc: "Busca un lugar tranquilo y sin interrupciones" },
  { icon: Clock, titulo: "Puntualidad", desc: "Conéctate 5 minutos antes de tu hora agendada" },
]

const FAQ = [
  {
    pregunta: "¿Cuánto dura una consulta de telemedicina?",
    respuesta: "Las consultas duran aproximadamente 20-30 minutos, igual que una atención presencial.",
  },
  {
    pregunta: "¿Qué pasa si no puedo asistir a mi cita?",
    respuesta: "Puedes cancelar o reprogramar hasta 2 horas antes sin costo. Si no te presentas, se cobra el 100%.",
  },
  {
    pregunta: "¿Necesito descargar alguna aplicación?",
    respuesta: "No. Usamos Google Meet, que funciona directamente desde tu navegador. Solo necesitas un enlace que recibirás por email.",
  },
  {
    pregunta: "¿Puedo usar Isapre o Fonasa?",
    respuesta: "Sí. Aceptamos Fonasa, Consalud, Esencial e Isalud. Los valores varían según tu plan.",
  },
  {
    pregunta: "¿El médico puede recetar medicamentos?",
    respuesta: "Sí. El médico emite receta electrónica que puedes descargar o recibir por email.",
  },
]

export default function TelemedicinaPage() {
  const [enLlamada, setEnLlamada] = useState(false)
  const [micOn, setMicOn] = useState(true)
  const [camOn, setCamOn] = useState(true)
  const [codigo, setCodigo] = useState("")
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null)

  if (!enLlamada) {
    return (
      <div className="min-h-screen">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-secondary via-[#1a4a7a] to-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-4 py-2 rounded-full mb-6">
                  <HeartPulse size={16} className="text-accent" />
                  Telemedicina en todo Chile
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  Consulta médica{" "}
                  <span className="text-accent">desde donde estés</span>
                </h1>
                <p className="text-white/80 text-lg mb-8 max-w-lg leading-relaxed">
                  Atención médica online con profesionales validados. Sin traslados, sin
                  esperas, con la misma calidad que una consulta presencial.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/reserva"
                    className="inline-flex items-center gap-2 bg-accent text-secondary font-semibold px-8 py-4 rounded-xl hover:bg-amber-400 transition-colors text-lg shadow-lg shadow-amber-500/25"
                  >
                    Reserva ahora <ArrowRight size={20} />
                  </Link>
                  <a
                    href="#como-funciona"
                    className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg"
                  >
                    Cómo funciona
                  </a>
                </div>
              </div>

              <div className="hidden lg:flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-primary/80 rounded-2xl flex items-center justify-center mb-5">
                      <Stethoscope size={36} className="text-white" />
                    </div>
                    <p className="text-white font-semibold text-lg mb-1">Medicina General</p>
                    <p className="text-white/60 text-sm mb-3">desde $12.110</p>
                    <div className="w-full bg-white/10 rounded-xl p-4 mt-2">
                      <p className="text-white/60 text-xs mb-1">Especialidades desde</p>
                      <p className="text-white font-bold text-xl">$23.000</p>
                      <p className="text-white/40 text-xs">20+ especialidades</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-accent text-secondary font-bold px-5 py-2.5 rounded-xl shadow-lg text-sm">
                    Agenda hoy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Precios */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-3">Nuestros planes de telemedicina</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Atención profesional a precios accesibles. Pago particular o con convenio Fonasa/Isapre.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <Stethoscope size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">Medicina General</h3>
                <p className="text-gray-500 text-sm mb-6">Consulta con médico general vía videollamada. Ideal para consultas de salud general y chequeos.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                    <span className="text-sm text-gray-600">Particular</span>
                    <span className="font-bold text-secondary text-lg">$32.590</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/10">
                    <div>
                      <span className="text-sm text-gray-600">Fonasa</span>
                      <span className="text-xs text-primary ml-2">Copago</span>
                    </div>
                    <span className="font-bold text-primary text-lg">$12.110</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary shrink-0" /> Duración: 20-30 min</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary shrink-0" /> Receta electrónica</li>
                  <li className="flex items-center gap-2"><CheckCircle size={14} className="text-primary shrink-0" /> Indicaciones por email</li>
                </ul>
                <Link href="/reserva" className="block text-center bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary-dark transition-colors">
                  Reservar consulta
                </Link>
              </div>

              <div className="bg-secondary rounded-2xl border-2 border-accent/30 p-8 hover:shadow-lg transition-shadow relative">
                <div className="absolute -top-3 right-6 bg-accent text-secondary font-bold text-xs px-4 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                  <Star size={12} fill="currentColor" /> Popular
                </div>
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                  <HeartPulse size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Especialidades</h3>
                <p className="text-white/60 text-sm mb-6">Consulta con especialista. Más de 20 especialidades médnicas disponibles.</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-sm text-white/80">Copago Fonasa</span>
                    <span className="font-bold text-accent text-lg">~$23.000</span>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg">
                    <p className="text-xs text-white/50 mb-2">Especialidades disponibles:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {["Cardiología", "Dermatología", "Ginecología", "Pediatría", "Psiquiatría", "Nutrición", "Oftalmología", "Traumatología"].map((s) => (
                        <span key={s} className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-md">{s}</span>
                      ))}
                      <span className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-md">+12 más</span>
                    </div>
                  </div>
                </div>
                <Link href="/reserva" className="block text-center bg-accent text-secondary font-semibold py-3 rounded-xl hover:bg-amber-400 transition-colors">
                  Reservar especialidad
                </Link>
              </div>
            </div>

            <p className="text-center text-gray-400 text-sm mt-8">Aceptamos: Fonasa · Consalud · Esencial · Isalud · Particular · Webpay · Servipag · Banco Estado</p>
          </div>
        </section>

        {/* Cómo funciona — 5 pasos */}
        <section id="como-funciona" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-secondary mb-3">¿Cómo funciona?</h2>
              <p className="text-gray-500 max-w-lg mx-auto">En 5 simples pasos tienes tu consulta médica online. Rápido, seguro y sin complicaciones.</p>
            </div>

            {/* Timeline horizontal (desktop) */}
            <div className="hidden lg:block mb-12">
              <div className="relative flex items-start justify-between max-w-5xl mx-auto">
                <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />
                <div className="absolute top-6 left-0 h-0.5 bg-primary" style={{ width: "100%" }} />
                {PASOS.map((paso) => {
                  const Icon = paso.icon
                  return (
                    <div key={paso.num} className="relative flex flex-col items-center text-center w-1/5 px-2">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10 border-4 border-gray-50 shadow-md">
                        <span className="text-white font-bold text-sm">{paso.num}</span>
                      </div>
                      <div className="mt-4">
                        <Icon size={20} className="text-primary mx-auto mb-2" />
                        <h3 className="font-semibold text-secondary text-sm mb-1">{paso.titulo}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{paso.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Timeline vertical (mobile) */}
            <div className="lg:hidden space-y-0">
              {PASOS.map((paso, i) => {
                const Icon = paso.icon
                return (
                  <div key={paso.num} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center z-10 shrink-0">
                        <span className="text-white font-bold text-xs">{paso.num}</span>
                      </div>
                      {i < PASOS.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 my-1" />}
                    </div>
                    <div className="bg-white rounded-xl border border-gray-100 p-4 mb-3 flex-1 shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon size={16} className="text-primary" />
                        <h3 className="font-semibold text-secondary text-sm">{paso.titulo}</h3>
                      </div>
                      <p className="text-gray-500 text-sm">{paso.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Requisitos técnicos */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-3">Requisitos técnicos</h2>
              <p className="text-gray-500 max-w-lg mx-auto">Antes de tu consulta, verifica que cuentas con lo necesario para una experiencia óptima.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {REQUISITOS.map((r) => {
                const Icon = r.icon
                return (
                  <div key={r.titulo} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-primary/30 transition-colors">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-secondary mb-2">{r.titulo}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-10 max-w-2xl mx-auto bg-primary/5 border border-primary/10 rounded-2xl p-6">
              <h3 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                <FileText size={18} className="text-primary" /> Documentos que debes tener a mano
              </h3>
              <p className="text-gray-600 text-sm">Tu RUT y documento de identidad. Si tienes exámenes previos o imágenes médicas, tenlos listos para mostrar durante la consulta.</p>
            </div>
          </div>
        </section>

        {/* CTA intermedio: Ingresar a consulta existente */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-secondary mb-2">¿Ya tienes una cita agendada?</h2>
              <p className="text-gray-500 mb-6">Ingresa el código de tu cita para conectarte con tu médico.</p>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Ej: CIT-001"
                  className="flex-1 border border-gray-300 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-lg"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                />
                <button
                  onClick={() => setEnLlamada(true)}
                  disabled={!codigo}
                  className="bg-primary text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-primary-dark transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                >
                  <Video size={20} /> Ingresar
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-3">Preguntas frecuentes</h2>
              <p className="text-gray-500">Resolvemos tus dudas sobre la telemedicina</p>
            </div>
            <div className="space-y-3">
              {FAQ.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setFaqAbierta(faqAbierta === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-secondary pr-4">{item.pregunta}</span>
                    <ChevronRight
                      size={18}
                      className={`text-gray-400 shrink-0 transition-transform duration-200 ${faqAbierta === i ? "rotate-90" : ""}`}
                    />
                  </button>
                  {faqAbierta === i && (
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {item.respuesta}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-secondary to-primary">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Tu salud no puede esperar</h2>
            <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">Agenda tu consulta de telemedicina hoy y recibe atención profesional desde la comodidad de tu hogar.</p>
            <Link
              href="/reserva"
              className="inline-flex items-center gap-2 bg-accent text-secondary font-bold px-10 py-4 rounded-xl hover:bg-amber-400 transition-colors text-lg shadow-lg shadow-amber-500/25"
            >
              Reservar mi consulta <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </div>
    )
  }

  // ─── Video call simulation (preserved) ───
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
