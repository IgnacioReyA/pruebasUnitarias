import { Request, Response, NextFunction} from 'express'
import AlumnoController from '../controllers/alumnos';

const alumnoController = new AlumnoController();

class AlumnoHttpHandler {

    async getAlumnos(request: Request, response: Response, next: NextFunction) {
        try {
            const Alumnos = await alumnoController.getAlumnosConMensajes();
            response.json(Alumnos)
        } catch (error) {
            next(error)
        }
    }
}

export default AlumnoHttpHandler;