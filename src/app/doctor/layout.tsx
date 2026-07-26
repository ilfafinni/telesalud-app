"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import DoctorSidebar from "@/components/doctor/DoctorSidebar"

export default function DoctorLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [autenticado, setAutenticado] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("usuario")
    if (!stored) {
      router.push("/auth/login")
      return
    }
    try {
      const usuario = JSON.parse(stored)
      if (usuario.rol !== "medico") {
        router.push("/admin")
        return
      }
      setAutenticado(true)
    } catch {
      router.push("/auth/login")
    }
  }, [router])

  if (!autenticado) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DoctorSidebar />
      <div className="flex-1 p-8">{children}</div>
    </div>
  )
}
