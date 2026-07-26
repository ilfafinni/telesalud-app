"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { usuariosRegistrados } from "@/lib/data"
import { Eye, EyeOff, LogIn } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPw, setShowPw] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    await new Promise((r) => setTimeout(r, 800))

    const user = usuariosRegistrados.find((u) => u.email === email)
    if (!user) {
      setError("Usuario no encontrado. Prueba con: admin@telesalud.cl")
      setLoading(false)
      return
    }

    localStorage.setItem("usuario", JSON.stringify(user))
    router.push("/admin")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto bg-primary rounded-xl flex items-center justify-center mb-4">
            <span className="text-white font-bold text-2xl">T</span>
          </div>
          <h1 className="text-2xl font-bold text-secondary">Iniciar Sesión</h1>
          <p className="text-gray-500 mt-1">Accede a tu panel de paciente o administración.</p>
        </div>

        <form onSubmit={handleLogin} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
          {error && (
            <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-100">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="tu@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <LogIn size={18} /> {loading ? "Ingresando..." : "Ingresar"}
          </button>

          <div className="text-center text-sm text-gray-500 pt-2">
            ¿No tienes cuenta?{" "}
            <Link href="/auth/registro" className="text-primary font-medium hover:underline">
              Registrarse
            </Link>
          </div>

          <div className="text-xs text-gray-400 text-center pt-2 border-t border-gray-100">
            <p>Demo: admin@telesalud.cl / cualquier contraseña</p>
          </div>
        </form>

        <div className="text-center mt-6">
          <Link href="/reserva" className="text-sm text-gray-500 hover:text-primary">
            ¿Solo quieres reservar una hora? No necesitas cuenta → Reservar sin login
          </Link>
        </div>
      </div>
    </div>
  )
}
