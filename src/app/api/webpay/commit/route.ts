import { NextResponse, NextRequest } from "next/server"
import { commitTransaction } from "@/lib/webpay"
import { citas } from "@/lib/data"

export async function GET(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get("token_ws")
    const buyOrder = request.nextUrl.searchParams.get("buyOrder")

    if (!token) {
      return NextResponse.redirect(
        new URL("/reserva?error=webpay_cancelado", request.url)
      )
    }

    const result = await commitTransaction(token)

    if (result.status === "AUTHORIZED") {
      const cita = citas.find((c) => c.id === buyOrder)
      if (cita) {
        cita.webpayToken = token
        cita.pagada = true
        cita.estado = "confirmada"
      }

      return NextResponse.redirect(
        new URL(`/reserva?confirmado=true&id=${buyOrder}`, request.url)
      )
    }

    return NextResponse.redirect(
      new URL(`/reserva?error=webpay_rechazado&id=${buyOrder}`, request.url)
    )
  } catch (error) {
    console.error("Webpay commit error:", error)
    return NextResponse.redirect(
      new URL("/reserva?error=webpay_error", request.url)
    )
  }
}
