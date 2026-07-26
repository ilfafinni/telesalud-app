import { Medico, CentroMedico, Cita, Especialidad, Usuario } from "@/types"

export const medicos: Medico[] = [
  { id: "M001", nombre: "Dr. Carlos Muñoz", especialidad: "Medicina General", foto: "", disponible: true, centros: ["C001", "C002"], experiencia: 12, descripcion: "Médico general con amplia experiencia en atención primaria y prevención de enfermedades.", formatoAtencion: ["presencial", "telemedicina"], horarios: ["Lun-Vie 9:00-18:00", "Sáb 9:00-13:00"] },
  { id: "M002", nombre: "Dra. María González", especialidad: "Pediatría", foto: "", disponible: true, centros: ["C001", "C003"], experiencia: 15, descripcion: "Pediatra especializada en desarrollo infantil, vacunación y enfermedades respiratorias.", formatoAtencion: ["presencial", "telemedicina"], horarios: ["Lun-Vie 9:00-17:00"] },
  { id: "M003", nombre: "Dr. Pablo Soto", especialidad: "Cardiología", foto: "", disponible: true, centros: ["C002", "C005"], experiencia: 20, descripcion: "Cardiólogo con subespecialidad en electrofisiología y arritmias cardiacas.", formatoAtencion: ["presencial"], horarios: ["Lun-Jue 10:00-19:00", "Vie 10:00-15:00"] },
  { id: "M004", nombre: "Dra. Ana Torres", especialidad: "Ginecología", foto: "", disponible: true, centros: ["C002", "C004"], experiencia: 10, descripcion: "Ginecóloga obstetra con enfoque en salud integral de la mujer y gestaciones de alto riesgo.", formatoAtencion: ["presencial", "telemedicina"], horarios: ["Lun-Vie 8:30-17:30"] },
  { id: "M005", nombre: "Dr. Luis Rojas", especialidad: "Traumatología", foto: "", disponible: true, centros: ["C001", "C005"], experiencia: 18, descripcion: "Traumatólogo especializado en cirugía de rodilla y hombro, y medicina deportiva.", formatoAtencion: ["presencial"], horarios: ["Lun-Vie 9:00-18:00"] },
  { id: "M006", nombre: "Dra. Claudia Vergara", especialidad: "Neurología", foto: "", disponible: true, centros: ["C003", "C004"], experiencia: 14, descripcion: "Neuróloga con especial interés en cefaleas, epilepsia y enfermedades neurodegenerativas.", formatoAtencion: ["presencial", "telemedicina"], horarios: ["Mar-Vie 10:00-19:00"] },
  { id: "M007", nombre: "Dr. Ricardo Díaz", especialidad: "Dermatología", foto: "", disponible: true, centros: ["C001", "C003"], experiencia: 9, descripcion: "Dermatólogo especializado en cáncer de piel, dermatoscopia y tratamientos estéticos.", formatoAtencion: ["presencial", "telemedicina"], horarios: ["Lun-Sáb 9:00-18:00"] },
  { id: "M008", nombre: "Dra. Paula Herrera", especialidad: "Medicina General", foto: "", disponible: true, centros: ["C004", "C005"], experiencia: 7, descripcion: "Médica general con enfoque en salud familiar y atención integral del adulto mayor.", formatoAtencion: ["presencial", "telemedicina"], horarios: ["Lun-Vie 8:00-17:00"] },
  { id: "M009", nombre: "Dr. Andrés Muñoz", especialidad: "Oftalmología", foto: "", disponible: true, centros: ["C002"], experiencia: 16, descripcion: "Oftalmólogo especializado en cirugía de cataratas, glaucoma y degeneración macular.", formatoAtencion: ["presencial"], horarios: ["Lun-Vie 9:00-17:30"] },
  { id: "M010", nombre: "Dra. Carolina Rivas", especialidad: "Otorrinolaringología", foto: "", disponible: true, centros: ["C003", "C005"], experiencia: 11, descripcion: "ORL con subespecialidad en otología y trastornos del equilibrio.", formatoAtencion: ["presencial", "telemedicina"], horarios: ["Lun-Jue 9:00-18:00"] },
  { id: "M011", nombre: "Dr. Francisco Mora", especialidad: "Psiquiatría", foto: "", disponible: true, centros: ["C001", "C004"], experiencia: 13, descripcion: "Psiquiatra de adultos con enfoque en trastornos del ánimo, ansiedad y TDAH.", formatoAtencion: ["presencial", "telemedicina"], horarios: ["Lun-Vie 10:00-19:00"] },
  { id: "M012", nombre: "Dra. Kinesióloga Patricia Vega", especialidad: "Kinesiología", foto: "", disponible: true, centros: ["C002", "C005"], experiencia: 8, descripcion: "Kinesióloga especializada en rehabilitación deportiva y terapia manual ortopédica.", formatoAtencion: ["presencial"], horarios: ["Lun-Vie 8:00-18:00", "Sáb 9:00-14:00"] },
  { id: "M013", nombre: "Dra. Sofía Martínez", especialidad: "Nutrición", foto: "", disponible: true, centros: ["C001", "C003", "C004"], experiencia: 6, descripcion: "Nutricionista clínica con experiencia en manejo de obesidad, diabetes y nutrición deportiva.", formatoAtencion: ["presencial", "telemedicina"], horarios: ["Lun-Vie 8:30-17:30"] },
  { id: "M014", nombre: "Dr. Juan Pablo Silva", especialidad: "Cardiología", foto: "", disponible: true, centros: ["C002", "C003"], experiencia: 22, descripcion: "Cardiólogo intervencionista con amplia trayectoria en hemodinamia y angioplastías.", formatoAtencion: ["presencial"], horarios: ["Lun-Vie 9:00-17:00"] },
  { id: "M015", nombre: "Dra. Marcela Lagos", especialidad: "Pediatría", foto: "", disponible: true, centros: ["C001", "C004"], experiencia: 9, descripcion: "Pediatra con subespecialidad en neonatología y cuidados intensivos pediátricos.", formatoAtencion: ["presencial", "telemedicina"], horarios: ["Lun-Vie 9:00-18:00"] },
]

export const especialidadesData: Especialidad[] = [
  { id: "E01", nombre: "Medicina General", descripcion: "Atención primaria para todas tus necesidades de salud, prevención y chequeos generales.", icono: "Stethoscope", medicos: ["M001", "M008"] },
  { id: "E02", nombre: "Pediatría", descripcion: "Atención especializada para niños y adolescentes, desde recién nacidos hasta jóvenes.", icono: "Baby", medicos: ["M002", "M015"] },
  { id: "E03", nombre: "Cardiología", descripcion: "Diagnóstico y tratamiento de enfermedades del corazón y el sistema circulatorio.", icono: "Heart", medicos: ["M003", "M014"] },
  { id: "E04", nombre: "Ginecología", descripcion: "Salud integral de la mujer, control ginecológico, embarazo y parto.", icono: "Activity", medicos: ["M004"] },
  { id: "E05", nombre: "Traumatología", descripcion: "Diagnóstico y tratamiento de lesiones del sistema musculoesquelético.", icono: "Bone", medicos: ["M005"] },
  { id: "E06", nombre: "Neurología", descripcion: "Trastornos del sistema nervioso central y periférico.", icono: "Brain", medicos: ["M006"] },
  { id: "E07", nombre: "Dermatología", descripcion: "Cuidado de la piel, diagnóstico de enfermedades cutáneas y cáncer de piel.", icono: "Paintbrush", medicos: ["M007"] },
  { id: "E08", nombre: "Oftalmología", descripcion: "Salud visual, diagnóstico y tratamiento de enfermedades oculares.", icono: "Eye", medicos: ["M009"] },
  { id: "E09", nombre: "Otorrinolaringología", descripcion: "Trastornos del oído, nariz y garganta.", icono: "Ear", medicos: ["M010"] },
  { id: "E10", nombre: "Psiquiatría", descripcion: "Salud mental, diagnóstico y tratamiento de trastornos psiquiátricos.", icono: "Heart", medicos: ["M011"] },
  { id: "E11", nombre: "Kinesiología", descripcion: "Rehabilitación física y terapia para recuperación de lesiones y movilidad.", icono: "Activity", medicos: ["M012"] },
  { id: "E12", nombre: "Nutrición", descripcion: "Asesoría nutricional para alimentación saludable, control de peso y enfermedades metabólicas.", icono: "Apple", medicos: ["M013"] },
]

export const especialidades = especialidadesData.map((e) => e.nombre)

export const centros: CentroMedico[] = [
  { id: "C001", nombre: "Centro Médico Santiago", direccion: "Av. Libertador Bernardo O'Higgins 4850", ciudad: "Santiago", region: "Metropolitana", telefono: "600 718 6000", horario: "Lun-Vie 8:00-20:00 / Sáb 9:00-14:00", servicios: ["Medicina General", "Pediatría", "Traumatología", "Dermatología", "Psiquiatría", "Nutrición", "Laboratorio", "Imagenología"] },
  { id: "C002", nombre: "Centro Médico Providencia", direccion: "Av. Salvador 100", ciudad: "Providencia", region: "Metropolitana", telefono: "600 718 6000", horario: "Lun-Vie 8:00-20:00 / Sáb 9:00-14:00", servicios: ["Medicina General", "Cardiología", "Ginecología", "Oftalmología", "Kinesiología", "Laboratorio"] },
  { id: "C003", nombre: "Centro Médico Vitacura", direccion: "Av. Tabancura 1185", ciudad: "Vitacura", region: "Metropolitana", telefono: "600 718 6000", horario: "Lun-Vie 8:30-19:30 / Sáb 9:00-13:00", servicios: ["Pediatría", "Neurología", "Dermatología", "Otorrinolaringología", "Nutrición", "Cardiología"] },
  { id: "C004", nombre: "Centro Médico La Florida", direccion: "Av. Vicuña Mackenna 7747", ciudad: "La Florida", region: "Metropolitana", telefono: "600 718 6000", horario: "Lun-Vie 8:00-19:00 / Sáb 9:00-14:00", servicios: ["Medicina General", "Ginecología", "Neurología", "Psiquiatría", "Pediatría", "Nutrición", "Laboratorio"] },
  { id: "C005", nombre: "Centro Médico Maipú", direccion: "Alberto Llona 1770", ciudad: "Maipú", region: "Metropolitana", telefono: "600 718 6000", horario: "Lun-Vie 8:00-19:00 / Sáb 9:00-13:00", servicios: ["Cardiología", "Traumatología", "Otorrinolaringología", "Kinesiología", "Medicina General"] },
  { id: "C006", nombre: "Centro Médico Viña del Mar", direccion: "Av. San Martín 150", ciudad: "Viña del Mar", region: "Valparaíso", telefono: "600 718 6000", horario: "Lun-Vie 9:00-18:00 / Sáb 9:00-13:00", servicios: ["Medicina General", "Pediatría", "Ginecología", "Dermatología", "Nutrición"] },
  { id: "C007", nombre: "Centro Médico Concepción", direccion: "Av. Paicaví 123", ciudad: "Concepción", region: "Biobío", telefono: "600 718 6000", horario: "Lun-Vie 8:30-18:30 / Sáb 9:00-13:00", servicios: ["Medicina General", "Cardiología", "Traumatología", "Kinesiología", "Oftalmología"] },
]

export let citas: Cita[] = [
  { id: "CIT-001", pacienteRut: "12345678-9", pacienteNombre: "Juan Pérez", pacienteEmail: "juan@email.com", pacienteTelefono: "+56912345678", medicoId: "M001", medicoNombre: "Dr. Carlos Muñoz", especialidad: "Medicina General", centroId: "C001", centroNombre: "Centro Médico Santiago", fecha: "2026-07-28", hora: "10:00", modalidad: "presencial", estado: "confirmada", motivo: "Control general", creadaEn: "2026-07-25T12:00:00Z" },
  { id: "CIT-002", pacienteRut: "12345678-9", pacienteNombre: "Juan Pérez", pacienteEmail: "juan@email.com", pacienteTelefono: "+56912345678", medicoId: "M003", medicoNombre: "Dr. Pablo Soto", especialidad: "Cardiología", centroId: "C002", centroNombre: "Centro Médico Providencia", fecha: "2026-08-01", hora: "15:30", modalidad: "telemedicina", estado: "pendiente", motivo: "Chequeo cardiológico", creadaEn: "2026-07-25T14:00:00Z" },
  { id: "CIT-003", pacienteRut: "98765432-1", pacienteNombre: "María López", pacienteEmail: "maria@email.com", pacienteTelefono: "+56998765432", medicoId: "M004", medicoNombre: "Dra. Ana Torres", especialidad: "Ginecología", centroId: "C002", centroNombre: "Centro Médico Providencia", fecha: "2026-07-29", hora: "11:30", modalidad: "presencial", estado: "confirmada", motivo: "Control ginecológico anual", creadaEn: "2026-07-24T10:00:00Z" },
  { id: "CIT-004", pacienteRut: "55555555-5", pacienteNombre: "Pedro Ramírez", pacienteEmail: "pedro@email.com", pacienteTelefono: "+56955555555", medicoId: "M007", medicoNombre: "Dr. Ricardo Díaz", especialidad: "Dermatología", centroId: "C001", centroNombre: "Centro Médico Santiago", fecha: "2026-07-30", hora: "14:00", modalidad: "telemedicina", estado: "realizada", motivo: "Consulta por lunar sospechoso", creadaEn: "2026-07-23T16:00:00Z" },
  { id: "CIT-005", pacienteRut: "11111111-1", pacienteNombre: "Ana Soto", pacienteEmail: "ana@email.com", pacienteTelefono: "+56911111111", medicoId: "M011", medicoNombre: "Dr. Francisco Mora", especialidad: "Psiquiatría", centroId: "C004", centroNombre: "Centro Médico La Florida", fecha: "2026-08-05", hora: "16:00", modalidad: "telemedicina", estado: "pendiente", motivo: "Sesión de seguimiento", creadaEn: "2026-07-22T09:00:00Z" },
]

export const usuariosRegistrados: Usuario[] = [
  { id: "U001", email: "juan@email.com", nombre: "Juan Pérez", rut: "12345678-9", rol: "paciente" },
  { id: "U002", email: "maria@email.com", nombre: "María López", rut: "98765432-1", rol: "paciente" },
  { id: "U003", email: "admin@telesalud.cl", nombre: "Admin TeleSalud", rut: "11111111-1", rol: "admin" },
  { id: "U004", email: "carlos.munoz@telesalud.cl", nombre: "Dr. Carlos Muñoz", rut: "12121212-2", rol: "medico" },
  { id: "U005", email: "maria.gonzalez@telesalud.cl", nombre: "Dra. María González", rut: "13131313-3", rol: "medico" },
  { id: "U006", email: "pablo.soto@telesalud.cl", nombre: "Dr. Pablo Soto", rut: "14141414-4", rol: "medico" },
  { id: "U007", email: "ana.torres@telesalud.cl", nombre: "Dra. Ana Torres", rut: "15151515-5", rol: "medico" },
  { id: "U008", email: "luis.rojas@telesalud.cl", nombre: "Dr. Luis Rojas", rut: "16161616-6", rol: "medico" },
  { id: "U009", email: "claudia.vergara@telesalud.cl", nombre: "Dra. Claudia Vergara", rut: "17171717-7", rol: "medico" },
  { id: "U010", email: "ricardo.diaz@telesalud.cl", nombre: "Dr. Ricardo Díaz", rut: "18181818-8", rol: "medico" },
  { id: "U011", email: "paula.herrera@telesalud.cl", nombre: "Dra. Paula Herrera", rut: "19191919-9", rol: "medico" },
  { id: "U012", email: "andres.munoz@telesalud.cl", nombre: "Dr. Andrés Muñoz", rut: "20202020-0", rol: "medico" },
  { id: "U013", email: "carolina.rivas@telesalud.cl", nombre: "Dra. Carolina Rivas", rut: "21212121-1", rol: "medico" },
  { id: "U014", email: "francisco.mora@telesalud.cl", nombre: "Dr. Francisco Mora", rut: "22222222-2", rol: "medico" },
  { id: "U015", email: "patricia.vega@telesalud.cl", nombre: "Kine. Patricia Vega", rut: "23232323-3", rol: "medico" },
  { id: "U016", email: "sofia.martinez@telesalud.cl", nombre: "Dra. Sofía Martínez", rut: "24242424-4", rol: "medico" },
  { id: "U017", email: "juan.silva@telesalud.cl", nombre: "Dr. Juan Pablo Silva", rut: "25252525-5", rol: "medico" },
  { id: "U018", email: "marcela.lagos@telesalud.cl", nombre: "Dra. Marcela Lagos", rut: "26262626-6", rol: "medico" },
]

export const medicoPorEmail: Record<string, string> = {
  "carlos.munoz@telesalud.cl": "M001",
  "maria.gonzalez@telesalud.cl": "M002",
  "pablo.soto@telesalud.cl": "M003",
  "ana.torres@telesalud.cl": "M004",
  "luis.rojas@telesalud.cl": "M005",
  "claudia.vergara@telesalud.cl": "M006",
  "ricardo.diaz@telesalud.cl": "M007",
  "paula.herrera@telesalud.cl": "M008",
  "andres.munoz@telesalud.cl": "M009",
  "carolina.rivas@telesalud.cl": "M010",
  "francisco.mora@telesalud.cl": "M011",
  "patricia.vega@telesalud.cl": "M012",
  "sofia.martinez@telesalud.cl": "M013",
  "juan.silva@telesalud.cl": "M014",
  "marcela.lagos@telesalud.cl": "M015",
}

export const horasDisponibles = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30",
]

export const previsiones = ["FONASA", "Banmédica", "Consalud", "Colmena", "Cruz Blanca", "Nueva Masvida", "Vida Tres"]

export const comunas = [
  "Santiago", "Providencia", "Las Condes", "Vitacura", "La Florida", "Maipú",
  "Ñuñoa", "Viña del Mar", "Valparaíso", "Concepción", "Talcahuano", "La Serena",
  "Antofagasta", "Temuco", "Rancagua", "Puerto Montt",
]
