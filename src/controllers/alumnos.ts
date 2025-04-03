import AlumnoDB from '../db/alumnos';

class AlumnoController {
    private AlumnoDB: AlumnoDB;

    constructor() {
        this.AlumnoDB = new AlumnoDB(); 
    }

    async getAlumnosConMensajes() {
        const alumnos = await this.AlumnoDB.getAllAlumnos();
        return alumnos.map((alumno, index) => {
            let mensaje = '';

            if (alumno.calificacion > 90 && !alumno.adeudo) {
                mensaje = 'Te graduaste con honores.';
            } else if (alumno.calificacion > 90 && alumno.adeudo) {
                mensaje = 'Tenías honores, pero tienes un adeudo.';
            } else if (alumno.calificacion >= 70 && alumno.calificacion <= 90) {
                mensaje = 'Pasaste muy apenas.';
            } else if (alumno.calificacion < 70 && !alumno.adeudo) {
                mensaje = 'Como no tienes adeudo, tienes derecho a un examen de recuperación.';
            } else if (alumno.calificacion < 70 && alumno.adeudo) {
                mensaje = 'Expulsado.';
            }

            return {
                matricula: `A0${alumno.matricula}`, 
                name: alumno.name,
                mensaje
            };
        });
    }
}

export default AlumnoController;