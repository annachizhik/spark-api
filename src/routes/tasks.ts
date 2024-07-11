import { Router, Request, Response } from 'express';
import TaskRepository from '../repositories/taskRepository';
import ITask from '../models/task';


const router = Router();
const taskRepository = new TaskRepository()

router.post('/', async (req: Request, res: Response) => {
    try {
        const dataToSave = await taskRepository.create(req.body as ITask)
        res.status(201).json(dataToSave)
    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
});

router.get('/', async (req: Request, res: Response) => {
    try {
        const data = await taskRepository.getAll();
        res.json(data)
    }
    catch (error: any) {
        res.status(500).json({ message: error.message })
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const data = await taskRepository.get(req.params.id);
        res.json(data)
    }
    catch (error: any) {
        res.status(500).json({ message: error.message })
    }
});

router.patch('/:id', async (req: Request, res: Response) => {
    try {
        const result = await taskRepository.update(
            req.params.id,
            req.body
        )
        res.send(result)
    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const data = await taskRepository.delete(req.params.id);
        res.status(204).send(`Document with ${data.title} has been deleted..`)
    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
});

export default router;