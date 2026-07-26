export interface Medico {
  id: string
  nombre: string
  especialidad: string
  subEspecialidad?: string
  foto: string
  disponible: boolean
  centros: string[]
  experiencia: number
  descripcion: string
  formatoAtencion: ("presencial" | "telemedicina")[]
  horarios: string[]
}

export interface CentroMedico {
  id: string
  nombre: string
  direccion: string
  ciudad: string
  region: string
  telefono: string
  horario: string
  servicios: string[]
  lat?: number
  lng?: number
}

export interface Especialidad {
  id: string
  nombre: string
  descripcion: string
  icono: string
  medicos: string[]
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
  estado: "confirmada" | "pendiente" | "cancelada" | "realizada" | "no-asistio"
  motivo: string
  creadaEn: string
  notas?: string
}

export interface Paciente {
  rut: string
  nombre: string
  email: string
  telefono: string
  prevision?: string
  fechaNacimiento?: string
  direccion?: string
}

export interface Usuario {
  id: string
  email: string
  nombre: string
  rut: string
  rol: "paciente" | "admin" | "medico"
  token?: string
}

export interface IMedPaciente {
  rut: string
  nombre: string
  apellidoPaterno: string
  apellidoMaterno: string
  fechaNacimiento: string
  sexo: string
  prevision: string
  telefono: string
  email: string
  direccion: string
  comuna: string
}
