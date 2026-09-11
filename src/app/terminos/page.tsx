import Link from "next/link"
import { ArrowLeft, FileText, Scale, UserCheck, CreditCard, ShieldCheck } from "lucide-react"

export const metadata = {
  title: "Términos y Condiciones | TeleSalud",
  description: "Términos y condiciones de uso de la plataforma TeleSalud.",
}

const secciones = [
  {
    icon: FileText,
    titulo: "1. Aceptación de los términos",
    contenido: "Al acceder y utilizar la plataforma TeleSalud, aceptas cumplir con los presentes Términos y Condiciones. Si no estás de acuerdo con alguna de sus disposiciones, te pedimos no utilizar nuestros servicios.",
  },
  {
    icon: Scale,
    titulo: "2. Servicios ofrecidos",
    contenido: "TeleSalud ofrece un sistema de agendamiento de horas médicas, consultas por telemedicina y acceso a información de salud. Los servicios se prestan de acuerdo con la disponibilidad de especialistas y centros médicos de nuestra red.",
  },
  {
    icon: UserCheck,
    titulo: "3. Responsabilidad del usuario",
    contenido: "El usuario es responsable de entregar información veraz y completa al momento de agendar una cita. TeleSalud no se hace responsable por datos incorrectos que dificulten la prestación del servicio o el cobro asociado.",
  },
  {
    icon: CreditCard,
    titulo: "4. Pagos y aranceles",
    contenido: "Los pagos pueden realizarse a través de la plataforma Webpay de Transbank. Los montos corresponden al arancel vigente según la modalidad de atención (presencial o telemedicina). En caso de cancelación, se aplicarán las políticas de reembolso establecidas por el centro médico.",
  },
  {
    icon: ShieldCheck,
    titulo: "5. Confidencialidad",
    contenido: "La información clínica de los pacientes es confidencial y está protegida conforme a la Ley Nº 19.628 sobre protección de la vida privada. TeleSalud implementa medidas de seguridad técnicas y organizativas para resguardar los datos de salud.",
  },
  {
    titulo: "6. Limitación de responsabilidad",
    icon: Scale,
    contenido: "TeleSalud actúa como facilitador entre pacientes y profesionales de la salud. La responsabilidad clínica corresponde al médico tratante. TeleSalud no se responsabiliza por daños derivados de un uso indebido de la plataforma o por eventos de fuerza mayor.",
  },
]

export default function TerminosPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-1 text-gray-500 hover:text-primary mb-8">
          <ArrowLeft size={16} /> Volver al inicio
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-secondary mb-4">Términos y Condiciones</h1>
          <p className="text-gray-600">Última actualización: 1 de julio de 2026</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8">
          {secciones.map((seccion) => {
            const Icon = seccion.icon
            return (
              <section key={seccion.titulo} className="flex gap-4">
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-secondary mb-2">{seccion.titulo}</h2>
                  <p className="text-gray-600 leading-relaxed">{seccion.contenido}</p>
                </div>
              </section>
            )
          })}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          ¿Tienes dudas sobre estos términos? Contáctanos en{" "}
          <Link href="mailto:contacto@telesalud.cl" className="text-primary hover:underline">
            contacto@telesalud.cl
          </Link>{" "}
          o al 600 718 6000.
        </p>
      </div>
    </div>
  )
}