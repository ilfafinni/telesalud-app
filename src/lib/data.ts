import { Medico, CentroMedico, Cita } from "@/types"

export const medicos: Medico[] = [
  { id: "M001", nombre: "Dr. Carlos Muñoz", especialidad: "Medicina General", foto: "", disponible: true },
  { id: "M002", nombre: "Dra. María González", especialidad: "Pediatría", foto: "", disponible: true },
  { id: "M003", nombre: "Dr. Pablo Soto", especialidad: "Cardiología", foto: "", disponible: true },
  { id: "M004", nombre: "Dra. Ana Torres", especialidad: "Ginecología", foto: "", disponible: true },
  { id: "M005", nombre: "Dr. Luis Rojas", especialidad: "Traumatología", foto: "", disponible: true },
  { id: "M006", nombre: "Dra. Claudia Vergara", especialidad: "Neurología", foto: "", disponible: true },
  { id: "M007", nombre: "Dr. Ricardo Díaz", especialidad: "Dermatología", foto: "", disponible: true },
  { id: "M008", nombre: "Dra. Paula Herrera", especialidad: "Medicina General", foto: "", disponible: true },
]

export const centros: CentroMedico[] = [
  { id: "C001", nombre: "Centro Médico Santiago", direccion: "Av. Libertador Bernardo O'Higgins 4850", ciudad: "Santiago", telefono: "600 718 6000" },
  { id: "C002", nombre: "Centro Médico Providencia", direccion: "Av. Salvador 100", ciudad: "Providencia", telefono: "600 718 6000" },
  { id: "C003", nombre: "Centro Médico Vitacura", direccion: "Av. Tabancura 1185", ciudad: "Vitacura", telefono: "600 718 6000" },
  { id: "C004", nombre: "Centro Médico La Florida", direccion: "Av. Vicuña Mackenna 7747", ciudad: "La Florida", telefono: "600 718 6000" },
  { id: "C005", nombre: "Centro Médico Maipú", direccion: "Alberto Llona 1770", ciudad: "Maipú", telefono: "600 718 6000" },
]

export const especialidades = [
  "Medicina General",
  "Pediatría",
  "Cardiología",
  "Ginecología",
  "Traumatología",
  "Neurología",
  "Dermatología",
  "Oftalmología",
  "Otorrinolaringología",
  "Psiquiatría",
  "Kinesiología",
  "Nutrición",
]

export let citas: Cita[] = [
  {
    id: "CIT-001",
    pacienteRut: "12345678-9",
    pacienteNombre: "Juan Pérez",
    pacienteEmail: "juan@email.com",
    pacienteTelefono: "+56912345678",
    medicoId: "M001",
    medicoNombre: "Dr. Carlos Muñoz",
    especialidad: "Medicina General",
    centroId: "C001",
    centroNombre: "Centro Médico Santiago",
    fecha: "2026-07-28",
    hora: "10:00",
    modalidad: "presencial",
    estado: "confirmada",
    motivo: "Control general",
    creadaEn: "2026-07-25T12:00:00Z",
  },
  {
    id: "CIT-002",
    pacienteRut: "12345678-9",
    pacienteNombre: "Juan Pérez",
    pacienteEmail: "juan@email.com",
    pacienteTelefono: "+56912345678",
    medicoId: "M003",
    medicoNombre: "Dr. Pablo Soto",
    especialidad: "Cardiología",
    centroId: "C002",
    centroNombre: "Centro Médico Providencia",
    fecha: "2026-08-01",
    hora: "15:30",
    modalidad: "telemedicina",
    estado: "pendiente",
    motivo: "Chequeo cardiológico",
    creadaEn: "2026-07-25T14:00:00Z",
  },
]
