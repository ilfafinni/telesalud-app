import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">TeleSalud</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">Tu salud en un clic. Agenda, consulta y cuida de ti y tu familia desde donde estés.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Pacientes</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/reserva" className="hover:text-primary transition-colors">Reservar Hora</Link></li>
              <li><Link href="/mis-citas" className="hover:text-primary transition-colors">Mis Citas</Link></li>
              <li><Link href="/telemedicina" className="hover:text-primary transition-colors">Telemedicina</Link></li>
              <li><Link href="/medicos" className="hover:text-primary transition-colors">Especialistas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Servicios</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/especialidades/E01" className="hover:text-primary transition-colors">Medicina General</Link></li>
              <li><Link href="/especialidades/E02" className="hover:text-primary transition-colors">Pediatría</Link></li>
              <li><Link href="/especialidades/E03" className="hover:text-primary transition-colors">Cardiología</Link></li>
              <li><Link href="/especialidades/E04" className="hover:text-primary transition-colors">Ginecología</Link></li>
              <li><Link href="/especialidades" className="hover:text-primary transition-colors">Ver todas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Convenios</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li><Link href="/convenios" className="hover:text-primary transition-colors">FONASA</Link></li>
              <li><Link href="/convenios" className="hover:text-primary transition-colors">ISAPREs</Link></li>
              <li><Link href="/convenios" className="hover:text-primary transition-colors">Seguros</Link></li>
              <li><Link href="/convenios" className="hover:text-primary transition-colors">Convenios</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-400">Contacto</h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>600 718 6000</li>
              <li>contacto@telesalud.cl</li>
              <li className="pt-2">
                <Link href="/auth/login" className="text-primary hover:text-primary-light transition-colors font-medium text-sm">
                  Acceso Administrativo
                </Link>
              </li>
              <li>
                <Link href="/api/imed/docs" className="text-gray-400 hover:text-gray-200 transition-colors text-xs">
                  API iMed Docs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} TeleSalud. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link href="/terminos" className="hover:text-primary transition-colors">Términos</Link>
            <Link href="/privacidad" className="hover:text-primary transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
