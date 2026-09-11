import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog y noticias | TeleSalud",
  description: "Artículos, guías y consejos de nuestros especialistas para cuidar tu salud.",
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}