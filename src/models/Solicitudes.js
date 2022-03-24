export function Solicitudes(id, nombre, apellidos, cv, escuela, telefono, correo) {
    return {
        id: Number,
        nombre: String,
        apellidos: String,
        cv: String,
        escuela: String,
        telefono: Number,
        correo: String
    };
}