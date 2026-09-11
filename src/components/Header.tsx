"use client"

import Link from "next/link"
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  User,
  LogIn,
  Search,
  Facebook,
  Instagram,
  Youtube,
  Stethoscope,
  Smile,
  FlaskConical,
  Building2,
  Pill,
  Shield,
  Heart,
  Activity,
  Calendar,
  ArrowRight,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [serviciosOpen, setServiciosOpen] = useState(false)
  const [usuario, setUsuario] = useState<{ nombre: string; rol: string } | null>(null)
  const [mobileServiciosOpen, setMobileServiciosOpen] = useState(false)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem("usuario")
      if (!stored) return
      const parsed = JSON.parse(stored)
      queueMicrotask(() => setUsuario(parsed))
    } catch {
      /* ignore */
    }
  }, [])

  const openServicios = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setServiciosOpen(true)
  }

  const closeServicios = () => {
    closeTimeoutRef.current = setTimeout(() => setServiciosOpen(false), 120)
  }

  const serviciosCategorias = [
    {
      titulo: "Ambulatorios",
      items: [
        { label: "Medicina General", href: "/especialidades/E01", icon: Stethoscope },
        { label: "Telemedicina", href: "/telemedicina", icon: Activity },
        { label: "Kinesiología", href: "/especialidades/kinesiologia", icon: Heart },
      ],
    },
    {
      titulo: "Dental",
      items: [
        { label: "Odontología General", href: "/especialidades/dental", icon: Smile },
      ],
    },
    {
      titulo: "Exámenes",
      items: [
        { label: "Laboratorio", href: "/especialidades/laboratorio", icon: FlaskConical },
        { label: "Imagenología", href: "/especialidades/imagenologia", icon: Shield },
      ],
    },
    {
      titulo: "Hospitalarios",
      items: [
        { label: "Cirugía", href: "/especialidades/cirugia", icon: Building2 },
        { label: "Medicina Interna", href: "/especialidades/medicina-interna", icon: Pill },
      ],
    },
  ]

  return (
    <header className="sticky top-0 z-50">
      {/* ── Top Utility Bar ── */}
      <div className="bg-primary text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-4">
            <a
              href="tel:6007186000"
              className="flex items-center gap-1.5 hover:text-primary/80 transition-colors"
            >
              <Phone size={12} />
              <span className="font-medium">600 718 6000</span>
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/portal"
              className="flex items-center gap-1 hover:text-primary/80 transition-colors font-medium"
            >
              <User size={12} /> MiPortal
            </Link>
            <span className="text-white/30">|</span>
            <Link
              href="/redsalud"
              className="flex items-center gap-1 hover:text-primary/80 transition-colors font-medium"
            >
              <Building2 size={12} /> MiRedSalud
            </Link>
            <span className="text-white/30">|</span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary/80 transition-colors"
            >
              <Facebook size={12} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary/80 transition-colors"
            >
              <Instagram size={12} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary/80 transition-colors"
            >
              <Youtube size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar ── */}
      <div className="bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-secondary block leading-tight">
                  TeleSalud
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-primary/5 transition-colors text-sm"
              >
                Inicio
              </Link>

              {/* Servicios Mega-Menu Trigger */}
              <div className="relative" onMouseEnter={openServicios} onMouseLeave={closeServicios}>
                <button
                  className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-primary/5 transition-colors text-sm"
                  onClick={() => setServiciosOpen(!serviciosOpen)}
                >
                  Servicios <ChevronDown size={14} className={`transition-transform ${serviciosOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Mega-Menu Dropdown */}
                {serviciosOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2"
                    onMouseEnter={openServicios}
                    onMouseLeave={closeServicios}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-[680px]">
                      <div className="grid grid-cols-4 gap-6">
                        {serviciosCategorias.map((cat) => (
                          <div key={cat.titulo}>
                            <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-3">
                              {cat.titulo}
                            </h4>
                            <ul className="space-y-1">
                              {cat.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors group"
                                    onClick={() => setServiciosOpen(false)}
                                  >
                                    <item.icon size={16} className="text-primary/40 group-hover:text-primary transition-colors" />
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <Link
                          href="/especialidades"
                          className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                          onClick={() => setServiciosOpen(false)}
                        >
                          Ver todas las especialidades <ArrowRight size={14} />
                        </Link>
                        <Link
                          href="/reserva"
                          className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                          onClick={() => setServiciosOpen(false)}
                        >
                          <Calendar size={14} /> Reservar Hora
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/especialidades"
                className="text-gray-700 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-primary/5 transition-colors text-sm"
              >
                Especialidades
              </Link>
              <Link
                href="/medicos"
                className="text-gray-700 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-primary/5 transition-colors text-sm"
              >
                Médicos
              </Link>
              <Link
                href="/centros"
                className="text-gray-700 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-primary/5 transition-colors text-sm"
              >
                Centros
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-primary/5 transition-colors text-sm"
              >
                Blog
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <button className="p-2 text-gray-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                <Search size={20} />
              </button>

              {/* Auth / User */}
              {usuario ? (
                <Link
                  href={usuario.rol === "medico" ? "/doctor" : "/admin"}
                  className="hidden lg:flex items-center gap-2 text-primary font-medium px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors text-sm border border-primary/20"
                >
                  <User size={16} /> {usuario.nombre.split(" ")[0]}
                </Link>
              ) : (
                <Link
                  href="/auth/login"
                  className="hidden lg:flex items-center gap-1 text-gray-600 hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  <LogIn size={16} /> Ingresar
                </Link>
              )}

              {/* CTA Button */}
              <Link
                href="/reserva"
                className="hidden md:inline-flex items-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-all shadow-md shadow-primary/20 text-sm"
              >
                <Calendar size={16} />
                Reservar Hora
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4">
            {/* CTA at top */}
            <Link
              href="/reserva"
              className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-5 py-3 rounded-xl hover:bg-primary/90 transition-all shadow-md shadow-primary/20 text-sm mb-4"
              onClick={() => setMenuOpen(false)}
            >
              <Calendar size={16} /> Reservar Hora
            </Link>

            {/* Main Links */}
            <div className="space-y-1 mb-2">
              <MobileLink href="/" label="Inicio" onClick={() => setMenuOpen(false)} />
              <MobileLink href="/especialidades" label="Especialidades" onClick={() => setMenuOpen(false)} />
              <MobileLink href="/medicos" label="Médicos" onClick={() => setMenuOpen(false)} />
              <MobileLink href="/centros" label="Centros" onClick={() => setMenuOpen(false)} />
              <MobileLink href="/blog" label="Blog" onClick={() => setMenuOpen(false)} />
            </div>

            {/* Servicios Accordion */}
            <button
              className="flex items-center justify-between w-full text-gray-700 font-medium px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm"
              onClick={() => setMobileServiciosOpen(!mobileServiciosOpen)}
            >
              Servicios
              <ChevronDown
                size={16}
                className={`transition-transform ${mobileServiciosOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServiciosOpen && (
              <div className="pl-4 pb-2 space-y-1">
                {serviciosCategorias.map((cat) => (
                  <div key={cat.titulo}>
                    <p className="text-xs font-bold text-secondary uppercase tracking-wider px-4 pt-3 pb-1">
                      {cat.titulo}
                    </p>
                    {cat.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        <item.icon size={14} className="text-primary/50" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-1 mt-2">
              <MobileLink href="/reserva" label="Reservar Hora" onClick={() => setMenuOpen(false)} />
              <MobileLink href="/mis-citas" label="Mis Citas" onClick={() => setMenuOpen(false)} />
              <MobileLink href="/telemedicina" label="Telemedicina" onClick={() => setMenuOpen(false)} />
              <MobileLink href="/convenios" label="Convenios y Seguros" onClick={() => setMenuOpen(false)} />
            </div>

            <hr className="my-4 border-gray-100" />

            {/* Auth */}
            {usuario ? (
              <Link
                href={usuario.rol === "medico" ? "/doctor" : "/admin"}
                className="flex items-center gap-2 text-primary font-medium px-4 py-3 rounded-xl hover:bg-primary/5 transition-colors text-sm"
                onClick={() => setMenuOpen(false)}
              >
                <User size={16} />
                {usuario.rol === "medico" ? "Panel Médico" : "Panel Admin"} ({usuario.nombre})
              </Link>
            ) : (
              <Link
                href="/auth/login"
                className="flex items-center gap-2 text-gray-700 font-medium px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm"
                onClick={() => setMenuOpen(false)}
              >
                <LogIn size={16} /> Iniciar Sesión
              </Link>
            )}

            {/* Phone + Social */}
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
              <a
                href="tel:6007186000"
                className="flex items-center gap-2 text-primary font-medium text-sm"
              >
                <Phone size={14} /> 600 718 6000
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Youtube size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function MobileLink({
  href,
  label,
  onClick,
}: {
  href: string
  label: string
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      className="block text-gray-700 hover:text-primary font-medium px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm"
      onClick={onClick}
    >
      {label}
    </Link>
  )
}
