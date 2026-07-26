import BookingFlow from "@/components/BookingFlow"

export default function ReservaPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-secondary mb-2">Reserva tu hora</h1>
          <p className="text-gray-500">
            Sin registro. Solo completa tus datos y elige la mejor opción para ti.
          </p>
        </div>
        <BookingFlow />
      </div>
    </div>
  )
}
