"use client"

import Link from "next/link"
import { Phone, Menu, X, ChevronDown, User, LogIn } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [serviciosOpen, setServiciosOpen] = useState(false)
  const [usuario, setUsuario] = useState<{ nombre: string; rol: string } | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("usuario")
    if (stored) {
      try { setUsuario(JSON.parse(stored)) } catch { /* ignore */ }
    }
  }, [])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-secondary">TeleSalud</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="text-gray-600 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">Inicio</Link>
            <Link href="/especialidades" className="text-gray-600 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">Especialidades</Link>
            <Link href="/medicos" className="text-gray-600 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">Médicos</Link>
            <Link href="/centros" className="text-gray-600 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">Centros</Link>

            <div className="relative group">
              <button
                className="flex items-center gap-1 text-gray-600 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                onMouseEnter={() => setServiciosOpen(true)}
                onMouseLeave={() => setServiciosOpen(false)}
              >
                Servicios <ChevronDown size={14} />
              </button>
              {serviciosOpen && (
                <div
                  className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-2 w-56"
                  onMouseEnter={() => setServiciosOpen(true)}
                  onMouseLeave={() => setServiciosOpen(false)}
                >
                  <Link href="/reserva" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary">Reservar Hora</Link>
                  <Link href="/mis-citas" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary">Mis Citas</Link>
                  <Link href="/telemedicina" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary">Telemedicina</Link>
                  <Link href="/convenios" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary">Convenios y Seguros</Link>
                </div>
              )}
            </div>

            {usuario ? (
              <Link
                href={usuario.rol === "medico" ? "/doctor" : "/admin"}
                className="flex items-center gap-2 bg-primary/10 text-primary font-medium px-3 py-2 rounded-lg hover:bg-primary/20 transition-colors text-sm ml-2"
              >
                <User size={16} /> {usuario.nombre.split(" ")[0]}
              </Link>
            ) : (
              <Link href="/auth/login" className="flex items-center gap-1 text-gray-500 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm ml-2">
                <LogIn size={16} /> Ingresar
              </Link>
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-2 text-primary ml-4">
            <Phone size={16} />
            <span className="text-sm font-medium">600 718 6000</span>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-2 pt-4">
              <Link href="/" className="text-gray-600 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50" onClick={() => setMenuOpen(false)}>Inicio</Link>
              <Link href="/especialidades" className="text-gray-600 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50" onClick={() => setMenuOpen(false)}>Especialidades</Link>
              <Link href="/medicos" className="text-gray-600 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50" onClick={() => setMenuOpen(false)}>Buscador de Médicos</Link>
              <Link href="/centros" className="text-gray-600 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50" onClick={() => setMenuOpen(false)}>Centros Médicos</Link>
              <Link href="/reserva" className="text-gray-600 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50" onClick={() => setMenuOpen(false)}>Reservar Hora</Link>
              <Link href="/mis-citas" className="text-gray-600 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50" onClick={() => setMenuOpen(false)}>Mis Citas</Link>
              <Link href="/telemedicina" className="text-gray-600 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50" onClick={() => setMenuOpen(false)}>Telemedicina</Link>
              <Link href="/convenios" className="text-gray-600 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50" onClick={() => setMenuOpen(false)}>Convenios y Seguros</Link>
              <hr className="border-gray-100" />
              {usuario ? (
                <Link href={usuario.rol === "medico" ? "/doctor" : "/admin"} className="text-gray-600 hover:text-primary font-medium px-3 py-2" onClick={() => setMenuOpen(false)}>
                  {usuario.rol === "medico" ? "Panel Médico" : "Panel Admin"} ({usuario.nombre})
                </Link>
              ) : (
                <Link href="/auth/login" className="text-gray-600 hover:text-primary font-medium px-3 py-2" onClick={() => setMenuOpen(false)}>Iniciar Sesión</Link>
              )}
              <Link href="/reserva" className="bg-primary text-white text-center font-medium px-5 py-2.5 rounded-lg hover:bg-primary-dark mt-2" onClick={() => setMenuOpen(false)}>Reservar Hora</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
