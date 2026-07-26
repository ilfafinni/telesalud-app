import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">TeleSalud</span>
            </div>
            <p className="text-gray-300 text-sm">Tu salud en un clic. Agenda, consulta y cuida de ti y tu familia desde donde estés.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Pacientes</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/reserva" className="hover:text-primary transition-colors">Reservar Hora</Link></li>
              <li><Link href="/mis-citas" className="hover:text-primary transition-colors">Mis Citas</Link></li>
              <li><Link href="/telemedicina" className="hover:text-primary transition-colors">Telemedicina</Link></li>
              <li><Link href="/medicos" className="hover:text-primary transition-colors">Especialistas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><span className="hover:text-primary transition-colors cursor-pointer">Medicina General</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Pediatría</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Cardiología</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Ginecología</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Call Center: 600 718 6000</li>
              <li>contacto@telesalud.cl</li>
              <li>
                <Link href="https://github.com" className="hover:text-primary transition-colors" target="_blank">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} TeleSalud. Todos los derechos reservados.</p>
          <p className="mt-1">
            <Link href="/terminos" className="hover:text-primary transition-colors">Términos y condiciones</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
