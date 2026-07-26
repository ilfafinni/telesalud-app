import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json({
    mensaje: "Endpoint de sincronización con iMed preparado.",
    estado: "simulado",
    nota: "Implementar lógica de autenticación y sincronización con la API de iMed.",
    pasosPendientes: [
      "Obtener credenciales de API de iMed",
      "Implementar autenticación OAuth2",
      "Mapear estructura de datos de iMed",
      "Sincronizar pacientes, citas y datos clínicos",
    ],
  })
}
