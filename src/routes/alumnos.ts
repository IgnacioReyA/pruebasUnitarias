import express from 'express';
import AlumnoHttpHandler from '../handlers/alumnos'

const router = express.Router();

const alumnoHttpHandler = new AlumnoHttpHandler();

router.get('/', alumnoHttpHandler.getAlumnos);

export default router;