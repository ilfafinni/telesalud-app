"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, CalendarDays, Stethoscope, Building2, Settings, LogOut, ArrowLeft } from "lucide-react"

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/citas", label: "Citas", icon: CalendarDays },
  { href: "/admin/medicos", label: "Médicos", icon: Stethoscope },
  { href: "/admin/centros", label: "Centros", icon: Building2 },
]

export default function AdminSidebar() {
  const pathname = usePathname()

  const handleLogout = () => {
    localStorage.removeItem("usuario")
    window.location.href = "/auth/login"
  }

  return (
    <aside className="w-64 bg-secondary text-white min-h-screen flex flex-col">
      <div className="p-4 border-b border-white/10">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">T</span>
          </div>
          <span className="font-bold">Admin TeleSalud</span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon
          const active = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                active ? "bg-white/10 text-white font-medium" : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={18} /> {link.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-white/10 space-y-2">
        <Link href="/" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
          <ArrowLeft size={16} /> Volver al sitio
        </Link>
        <button onClick={handleLogout} className="flex items-center gap-2 text-sm text-gray-300 hover:text-red-300 transition-colors w-full">
          <LogOut size={16} /> Cerrar sesión
        </button>
      </div>
    </aside>
  )
}
