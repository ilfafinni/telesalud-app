import { NextResponse } from "next/server"

interface IMedConfig {
  baseUrl: string
  apiKey: string
  enabled: boolean
}

const imedConfig: IMedConfig = {
  baseUrl: process.env.IMED_API_URL || "https://api.imed.cl/v1",
  apiKey: process.env.IMED_API_KEY || "",
  enabled: !!process.env.IMED_API_KEY,
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const rut = searchParams.get("rut")

  if (!rut) {
    return NextResponse.json({ error: "RUT es requerido" }, { status: 400 })
  }

  if (imedConfig.enabled) {
    try {
      const response = await fetch(`${imedConfig.baseUrl}/pacientes/${rut}`, {
        headers: { Authorization: `Bearer ${imedConfig.apiKey}` },
      })
      const data = await response.json()
      return NextResponse.json(data)
    } catch (error) {
      return NextResponse.json({
        error: "Error al conectar con iMed",
        mensaje: "La integración con iMed está configurada pero falló la conexión.",
        detalle: error instanceof Error ? error.message : "Error desconocido",
      }, { status: 502 })
    }
  }

  return NextResponse.json({
    mensaje: "Endpoint preparado para integración con iMed",
    integracionActiva: false,
    configuracion: {
      url: imedConfig.baseUrl,
      estado: "Requiere configuración - Agregar IMED_API_KEY en .env",
    },
    rutConsultado: rut,
    datosSimulados: {
      rut,
      nombre: "Juan",
      apellidoPaterno: "Pérez",
      apellidoMaterno: "González",
      fechaNacimiento: "1985-06-15",
      sexo: "M",
      prevision: "FONASA",
      telefono: "+56912345678",
      email: "juan.perez@email.com",
      direccion: "Av. Siempre Viva 123",
      comuna: "Santiago",
    },
    docs: "Ver /api/imed/docs para documentación de integración",
  })
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()

    if (imedConfig.enabled) {
      const response = await fetch(`${imedConfig.baseUrl}/pacientes`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${imedConfig.apiKey}`,
        },
        body: JSON.stringify(body),
      })
      const data = await response.json()
      return NextResponse.json(data)
    }

    return NextResponse.json({
      mensaje: "Datos recibidos para sincronizar con iMed (modo simulación)",
      integracionActiva: false,
      datosRecibidos: body,
      accion: "Pendiente de integración real con iMed",
    })
  } catch {
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 400 })
  }
}
