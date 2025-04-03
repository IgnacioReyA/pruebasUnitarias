import express from 'express';
import userRoutes from './src/routes/alumnos'

const app = express();
app.use(express.json());
app.use('/api/alumnos', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running'))