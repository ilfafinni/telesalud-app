const COMMERCE_CODE = process.env.WEBPAY_COMMERCE_CODE || "597055555532"
const API_KEY = process.env.WEBPAY_API_KEY || "579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C"
const ENVIRONMENT = process.env.WEBPAY_ENV || "integration"

const BASE_URL = ENVIRONMENT === "production"
  ? "https://webpay3g.transbank.cl"
  : "https://webpay3gint.transbank.cl"

interface TransbankResponse {
  token: string
  url: string
}

interface TransbankCommitResponse {
  vci: string
  amount: number
  status: string
  buy_order: string
  session_id: string
  card_detail: { card_number: string }
  accounting_date: string
  transaction_date: string
  authorization_code: string
  payment_type_code: string
  response_code: number
  installments_number: number
}

export async function createTransaction(
  amount: number,
  buyOrder: string,
  sessionId: string,
  returnUrl: string
): Promise<TransbankResponse> {
  const body = {
    buy_order: buyOrder,
    session_id: sessionId,
    amount,
    return_url: returnUrl,
  }

  const res = await fetch(`${BASE_URL}/rswebpaytransaction/api/webpay/v1.2/transactions`, {
    method: "POST",
    headers: {
      "Tbk-Api-Key-Id": COMMERCE_CODE,
      "Tbk-Api-Key-Secret": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    const error = await res.text()
    throw new Error(`Webpay create error: ${res.status} ${error}`)
  }

  return res.json()
}

export async function commitTransaction(token: string): Promise<TransbankCommitResponse> {
  const res = await fetch(
    `${BASE_URL}/rswebpaytransaction/api/webpay/v1.2/transactions/${token}`,
    {
      method: "PUT",
      headers: {
        "Tbk-Api-Key-Id": COMMERCE_CODE,
        "Tbk-Api-Key-Secret": API_KEY,
        "Content-Type": "application/json",
      },
    }
  )

  if (!res.ok) {
    const error = await res.text()
    throw new Error(`Webpay commit error: ${res.status} ${error}`)
  }

  return res.json()
}
