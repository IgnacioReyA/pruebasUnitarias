class AlumnoDB {
    async getAllAlumnos() {
        return [
            { name: "Gerardo", matricula: 1178400, calificacion: 69, adeudo: false },
            { name: "Jessica", matricula: 1178401, calificacion: 92, adeudo: true },
            { name: "Juan", matricula: 1178402, calificacion: 74, adeudo: true },
            { name: "Michelle", matricula: 1178403, calificacion: 91, adeudo: false },
            { name: "Diego", matricula: 1178404, calificacion: 88, adeudo: false },
            { name: "Jesus", matricula: 1178405, calificacion: 64, adeudo: true }
        ];
    }
}

export default AlumnoDB;