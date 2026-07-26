import { NextResponse } from "next/server"
import { citas } from "@/lib/data"

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await request.json()
  const index = citas.findIndex((c) => c.id === id)

  if (index === -1) {
    return NextResponse.json({ error: "Cita no encontrada" }, { status: 404 })
  }

  citas[index] = { ...citas[index], ...body }
  return NextResponse.json(citas[index])
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const index = citas.findIndex((c) => c.id === id)

  if (index === -1) {
    return NextResponse.json({ error: "Cita no encontrada" }, { status: 404 })
  }

  citas.splice(index, 1)
  return NextResponse.json({ message: "Cita eliminada" })
}
