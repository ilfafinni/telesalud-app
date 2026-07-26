import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    api: "iMed Integration - TeleSalud",
    version: "1.0.0",
    descripcion: "API de integración con iMed para obtener y sincronizar datos de pacientes",
    autenticacion: {
      tipo: "Bearer Token",
      configuracion: "Agregar IMED_API_KEY y IMED_API_URL en variables de entorno (.env.local)",
      ejemplo: 'IMED_API_KEY=tu_token_aqui\nIMED_API_URL=https://api.imed.cl/v1',
    },
    endpoints: [
      {
        metodo: "GET",
        ruta: "/api/imed?rut={rut}",
        descripcion: "Obtiene datos de un paciente desde iMed por su RUT",
        ejemplo: "/api/imed?rut=12345678-9",
        respuesta: {
          rut: "string",
          nombre: "string",
          apellidoPaterno: "string",
          apellidoMaterno: "string",
          fechaNacimiento: "string (YYYY-MM-DD)",
          sexo: "string (M/F)",
          prevision: "string",
          telefono: "string",
          email: "string",
          direccion: "string",
          comuna: "string",
        },
      },
      {
        metodo: "PUT",
        ruta: "/api/imed",
        descripcion: "Actualiza o crea un paciente en iMed",
        body: {
          rut: "string (requerido)",
          nombre: "string",
          apellidoPaterno: "string",
          telefono: "string",
          email: "string",
        },
      },
      {
        metodo: "POST",
        ruta: "/api/imed/sync",
        descripcion: "Ejecuta sincronización manual con iMed",
        body: {
          accion: '"sync-pacientes" | "sync-citas" | "sync-all"',
        },
      },
    ],
    mapaCampos: {
      "TeleSalud -> iMed": {
        pacienteRut: "rut",
        pacienteNombre: "nombre + apellidoPaterno + apellidoMaterno",
        pacienteEmail: "email",
        pacienteTelefono: "telefono",
        prevision: "prevision",
      },
      "iMed -> TeleSalud": {
        rut: "pacienteRut",
        nombre: "pacienteNombre",
        email: "pacienteEmail",
        telefono: "pacienteTelefono",
        prevision: "prevision (para bono electrónico)",
      },
    },
    estadoActual: "Simulación - Sin conexión real con iMed",
    comoActivar: [
      "1. Solicitar credenciales de API a iMed",
      "2. Crear archivo .env.local en la raíz del proyecto",
      "3. Agregar IMED_API_KEY y IMED_API_URL",
      "4. El sistema detectará automáticamente las credenciales y activará la integración real",
    ],
  })
}
