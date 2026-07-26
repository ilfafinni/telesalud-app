import { NextResponse } from "next/server"
import { citas } from "@/lib/data"
import type { Cita } from "@/types"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const rut = searchParams.get("rut")

  if (rut) {
    const citasPaciente = citas.filter((c) => c.pacienteRut === rut)
    return NextResponse.json(citasPaciente)
  }

  return NextResponse.json(citas)
}

export async function POST(request: Request) {
  try {
    const body: Omit<Cita, "id" | "creadaEn"> = await request.json()

    const nuevaCita: Cita = {
      ...body,
      id: `CIT-${Date.now().toString(36).toUpperCase()}`,
      creadaEn: new Date().toISOString(),
    }

    citas.push(nuevaCita)

    return NextResponse.json(nuevaCita, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Error al crear la cita" }, { status: 400 })
  }
}
