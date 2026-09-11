import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, Database, Mail } from "lucide-react"

export const metadata = {
  title: "Política de Privacidad | TeleSalud",
  description: "Política de privacidad y protección de datos de TeleSalud.",
}

const secciones = [
  {
    icon: Database,
    titulo: "1. Datos que recopilamos",
    contenido: "Recopilamos los datos que nos entregas al agendar una cita o crear una cuenta: nombre, RUT, correo electrónico, teléfono y datos de previsión de salud. En las consultas por telemedicina se genera un registro de la sesión protegido conforme a la normativa vigente.",
  },
  {
    icon: Lock,
    titulo: "2. Uso de la información",
    contenido: "Tus datos se utilizan exclusivamente para la gestión de citas, la prestación de servicios médicos, el proceso de cobro y la mejora de atención. No vendemos ni compartimos tu información con terceros fuera de los fines clínicos o legales.",
  },
  {
    icon: Shield,
    titulo: "3. Seguridad de los datos",
    contenido: "Implementamos medidas de seguridad físicas, técnicas y organizativas para proteger tu información, incluyendo cifrado en tránsito y en reposo, y controles de acceso estrictos. Los datos de salud se tratan con confidencialidad médica.",
  },
  {
    icon: Eye,
    titulo: "4. Tus derechos",
    contenido: "De acuerdo con la Ley Nº 19.628, puedes solicitar el acceso, rectificación, cancelación o bloqueo de tus datos personales escribiéndonos de manera gratuita. También puedes solicitar la entrega de tu información en formato digital.",
  },
  {
    icon: Mail,
    titulo: "5. Comunicaciones",
    contenido: "Podemos enviarte comunicaciones relacionadas con tus citas (confirmaciones, recordatorios y cambios). Solo enviaremos comunicaciones comerciales si nos has autorizado expresamente, y siempre podrás optar por no recibirlas.",
  },
]

export default function PrivacidadPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-1 text-gray-500 hover:text-primary mb-8">
          <ArrowLeft size={16} /> Volver al inicio
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-secondary mb-4">Política de Privacidad</h1>
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
          Contacto de privacidad:{" "}
          <Link href="mailto:privacidad@telesalud.cl" className="text-primary hover:underline">
            privacidad@telesalud.cl
          </Link>
        </p>
      </div>
    </div>
  )
}