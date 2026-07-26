"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { UserPlus, CheckCircle } from "lucide-react"

export default function RegistroPage() {
  const router = useRouter()
  const [step, setStep] = useState<"form" | "done">("form")
  const [form, setForm] = useState({ nombre: "", rut: "", email: "", telefono: "", password: "", prevision: "" })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setStep("done")
    setLoading(false)
  }

  if (step === "done") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
          <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle size={32} className="text-green-600" />
          </div>
          <h2 className="text-xl font-semibold text-secondary mb-2">¡Registro exitoso!</h2>
          <p className="text-gray-500 mb-6">Tu cuenta ha sido creada. Ya puedes iniciar sesión.</p>
          <button
            onClick={() => router.push("/auth/login")}
            className="bg-primary text-white font-semibold px-8 py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto bg-primary rounded-xl flex items-center justify-center mb-4">
            <span className="text-white font-bold text-2xl">T</span>
          </div>
          <h1 className="text-2xl font-bold text-secondary">Crear cuenta</h1>
          <p className="text-gray-500 mt-1">Regístrate para gestionar tus citas y más.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
            <input type="text" required placeholder="Juan Pérez" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">RUT</label>
            <input type="text" required placeholder="12.345.678-9" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary" value={form.rut} onChange={(e) => setForm({ ...form, rut: e.target.value })} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" required placeholder="tu@email.com" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <input type="tel" required placeholder="+569 1234 5678" className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Previsión</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary" value={form.prevision} onChange={(e) => setForm({ ...form, prevision: e.target.value })}>
              <option value="">Selecciona...</option>
              <option value="FONASA">FONASA</option>
              <option value="Banmédica">Banmédica</option>
              <option value="Consalud">Consalud</option>
              <option value="Colmena">Colmena</option>
              <option value="Cruz Blanca">Cruz Blanca</option>
              <option value="Nueva Masvida">Nueva Masvida</option>
              <option value="Vida Tres">Vida Tres</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input type="password" required placeholder="Mínimo 6 caracteres" minLength={6} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          </div>
          <button type="submit" disabled={loading} className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50">
            <UserPlus size={18} /> {loading ? "Registrando..." : "Crear cuenta"}
          </button>
          <div className="text-center text-sm text-gray-500">
            ¿Ya tienes cuenta?{" "}
            <Link href="/auth/login" className="text-primary font-medium hover:underline">Inicia sesión</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
