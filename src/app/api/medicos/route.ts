import { NextResponse } from "next/server"
import { medicos } from "@/lib/data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const especialidad = searchParams.get("especialidad")

  if (especialidad) {
    return NextResponse.json(medicos.filter((m) => m.especialidad === especialidad))
  }

  return NextResponse.json(medicos)
}
