"use client"

import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/reserva", label: "Reservar Hora" },
    { href: "/mis-citas", label: "Mis Citas" },
    { href: "/telemedicina", label: "Telemedicina" },
  ]

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

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-600 hover:text-primary font-medium transition-colors">
                {link.label}
              </Link>
            ))}
            <Link href="/reserva" className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors">
              Reservar Hora
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-2 text-primary">
            <Phone size={18} />
            <span className="text-sm font-medium">600 718 6000</span>
          </div>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-600 hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link href="/reserva" className="bg-primary text-white px-5 py-2 rounded-lg font-medium text-center" onClick={() => setMenuOpen(false)}>
                Reservar Hora
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
