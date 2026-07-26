import { NextResponse } from "next/server"
import { createTransaction } from "@/lib/webpay"

export async function POST(request: Request) {
  try {
    const { amount, buyOrder, sessionId } = await request.json()

    if (!amount || !buyOrder) {
      return NextResponse.json(
        { error: "amount y buyOrder son requeridos" },
        { status: 400 }
      )
    }

    const returnUrl = `${request.headers.get("origin")}/api/webpay/commit?buyOrder=${buyOrder}`

    const result = await createTransaction(amount, buyOrder, sessionId, returnUrl)

    return NextResponse.json({
      token: result.token,
      url: result.url,
    })
  } catch (error) {
    console.error("Webpay create error:", error)
    return NextResponse.json(
      { error: "Error al crear transacción Webpay" },
      { status: 500 }
    )
  }
}
