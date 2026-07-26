export interface Medico {
  id: string
  nombre: string
  especialidad: string
  foto: string
  disponible: boolean
}

export interface CentroMedico {
  id: string
  nombre: string
  direccion: string
  ciudad: string
  telefono: string
}

export interface HorarioDisponible {
  fecha: string
  hora: string
  medicoId: string
  centroId: string
}

export interface Cita {
  id: string
  pacienteRut: string
  pacienteNombre: string
  pacienteEmail: string
  pacienteTelefono: string
  medicoId: string
  medicoNombre: string
  especialidad: string
  centroId: string
  centroNombre: string
  fecha: string
  hora: string
  modalidad: "presencial" | "telemedicina"
  estado: "confirmada" | "pendiente" | "cancelada" | "realizada"
  motivo: string
  creadaEn: string
}

export interface Paciente {
  rut: string
  nombre: string
  email: string
  telefono: string
}
