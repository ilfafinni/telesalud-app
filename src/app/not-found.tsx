import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-2xl font-bold text-secondary mb-2">Página no encontrada</h1>
        <p className="text-gray-500 mb-8">La página que buscas no existe o fue movida.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="bg-primary text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors">
            Volver al inicio
          </Link>
          <Link href="/reserva" className="border border-primary text-primary font-semibold px-6 py-2.5 rounded-lg hover:bg-primary-light transition-colors">
            Reservar hora
          </Link>
        </div>
      </div>
    </div>
  )
}
