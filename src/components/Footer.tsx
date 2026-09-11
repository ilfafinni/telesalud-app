import Link from "next/link"
import { type ComponentType } from "react"
import {
  Phone,
  Mail,
  Calendar,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Heart,
  Stethoscope,
  Baby,
  Activity,
  Shield,
  Building2,
  ShieldCheck,
  Leaf,
  BarChart3,
  ExternalLink,
} from "lucide-react"

type FooterLink = {
  label: string
  href: string
  icon: null | ComponentType<{ size?: number; className?: string }>
  external?: boolean
}

const footerSections: { titulo: string; links: FooterLink[] }[] = [
  {
    titulo: "Pacientes",
    links: [
      { label: "Reservar Hora", href: "/reserva", icon: Calendar },
      { label: "Mis Citas", href: "/mis-citas", icon: Clock },
      { label: "Telemedicina", href: "/telemedicina", icon: Activity },
      { label: "Médicos", href: "/medicos", icon: Stethoscope },
    ],
  },
  {
    titulo: "Servicios",
    links: [
      { label: "Medicina General", href: "/especialidades/E01", icon: Stethoscope },
      { label: "Pediatría", href: "/especialidades/E02", icon: Baby },
      { label: "Cardiología", href: "/especialidades/E03", icon: Heart },
      { label: "Ginecología", href: "/especialidades/E04", icon: Shield },
      { label: "Ver todas", href: "/especialidades", icon: null },
    ],
  },
  {
    titulo: "Convenios",
    links: [
      { label: "FONASA", href: "/convenios", icon: null },
      { label: "ISAPREs", href: "/convenios", icon: null },
      { label: "Seguros", href: "/convenios", icon: null },
      { label: "Convenios", href: "/convenios", icon: null },
    ],
  },
  {
    titulo: "Contacto",
    links: [
      { label: "600 718 6000", href: "tel:6007186000", icon: Phone, external: true },
      { label: "contacto@telesalud.cl", href: "mailto:contacto@telesalud.cl", icon: Mail, external: true },
      { label: "API iMed Docs", href: "/api/imed/docs", icon: ExternalLink, external: true },
    ],
  },
  {
    titulo: "Institucional",
    links: [
      { label: "Quiénes somos", href: "/institucional", icon: Building2 },
      { label: "Indicadores clínicos", href: "/indicadores", icon: BarChart3 },
      { label: "Acreditación", href: "/acreditacion", icon: ShieldCheck },
      { label: "Sostenibilidad", href: "/sostenibilidad", icon: Leaf },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">TeleSalud</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Tu salud en un clic. Agenda, consulta y cuida de ti y tu familia desde donde estés.
            </p>
          </div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <div key={section.titulo}>
              <h3 className="font-bold mb-4 text-xs uppercase tracking-widest text-white/50">
                {section.titulo}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors group"
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.icon && (
                        <link.icon size={13} className="text-primary/40 group-hover:text-primary transition-colors shrink-0" />
                      )}
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Call Center Banner */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 bg-primary/10 rounded-2xl px-6 py-4 border border-primary/20">
            <div className="flex items-center gap-2 text-white font-semibold text-sm">
              <Phone size={18} className="text-primary" />
              Call Center
            </div>
            <a
              href="tel:6007186000"
              className="text-2xl font-bold tracking-tight text-white hover:text-primary transition-colors"
            >
              600 718 6000
            </a>
            <span className="hidden sm:inline text-white/30">|</span>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Clock size={14} />
              Lun a Vie 8:00 – 20:00
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} TeleSalud. Todos los derechos reservados.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center text-gray-500 hover:text-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center text-gray-500 hover:text-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center text-gray-500 hover:text-primary transition-all"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <Link href="/terminos" className="hover:text-primary transition-colors">
                Términos
              </Link>
              <Link href="/privacidad" className="hover:text-primary transition-colors">
                Privacidad
              </Link>
              <Link href="/auth/login" className="hover:text-primary transition-colors">
                Acceso Administrativo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
