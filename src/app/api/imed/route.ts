import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const rut = searchParams.get("rut")

  if (!rut) {
    return NextResponse.json({ error: "RUT es requerido" }, { status: 400 })
  }

  return NextResponse.json({
    mensaje: "Endpoint preparado para integración con iMed",
    rut,
    nota: "Esta ruta debe conectarse con la API de iMed para obtener datos reales del paciente.",
    datosSimulados: {
      rut,
      nombre: "Juan Pérez",
      prevision: "FONASA",
      ultimaConsulta: "2026-06-15",
    },
  })
}
