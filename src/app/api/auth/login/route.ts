import { NextResponse } from "next/server"
import { usuariosRegistrados } from "@/lib/data"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email y contraseña son requeridos" }, { status: 400 })
    }

    const usuario = usuariosRegistrados.find((u) => u.email === email)

    if (!usuario) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 })
    }

    return NextResponse.json({
      ...usuario,
      token: `tok_${Date.now()}_${usuario.id}`,
    })
  } catch {
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 400 })
  }
}
