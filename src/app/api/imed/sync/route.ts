import { NextResponse } from "next/server"

interface SyncResult {
  pacientesSincronizados: number
  citasSincronizadas: number
  errores: string[]
  timestamp: string
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { accion } = body

    const resultado: SyncResult = {
      pacientesSincronizados: 0,
      citasSincronizadas: 0,
      errores: [],
      timestamp: new Date().toISOString(),
    }

    if (accion === "sync-pacientes") {
      resultado.pacientesSincronizados = 5
      resultado.citasSincronizadas = 3
    }

    return NextResponse.json({
      estado: "simulado",
      mensaje: "Sincronización con iMed ejecutada en modo simulación",
      resultado,
      pasosSiguientes: [
        "1. Configurar variables de entorno IMED_API_KEY e IMED_API_URL en .env.local",
        "2. Verificar credenciales con iMed",
        "3. Habilitar integración real cambiando el flag enabled en api/imed/route.ts",
        "4. Probar con un RUT real de paciente",
        "5. Monitorear logs de sincronización",
      ],
      docs: "Documentación de integración disponible en /api/imed/docs",
    })
  } catch {
    return NextResponse.json({ error: "Error al procesar sincronización" }, { status: 400 })
  }
}

export async function GET() {
  const ultimaSync = new Date().toISOString()

  return NextResponse.json({
    servicio: "iMed Sync",
    estado: "simulado",
    ultimaSincronizacion: ultimaSync,
    integracionActiva: false,
    programacion: "Manual - Pendiente programación automática",
    endpoints: {
      "GET /api/imed": "Obtener datos de paciente por RUT",
      "PUT /api/imed": "Actualizar datos de paciente en iMed",
      "POST /api/imed/sync": "Ejecutar sincronización manual",
      "GET /api/imed/docs": "Documentación de integración",
    },
  })
}
