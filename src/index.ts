import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import taskRoutes from './routes/tasks';

// upload variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoString = process.env.MONGO_DB_URL || ''

// connect DB
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});

// Add this error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
