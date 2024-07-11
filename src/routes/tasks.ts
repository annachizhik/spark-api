import { Router, Request, Response } from 'express';
import TaskModel from '../models/task';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
    const task = new TaskModel({
        title: req.body.title,
        description: req.body.description,
        isCompleted: false,
    });

    try {
        const dataToSave = await task.save();
        res.status(201).json(dataToSave)
    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
});

router.get('/', async (req: Request, res: Response) => {
    try {
        const data = await TaskModel.find();
        res.json(data)
    }
    catch (error: any) {
        res.status(500).json({ message: error.message })
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const data = await TaskModel.findById(req.params.id);
        res.json(data)
    }
    catch (error: any) {
        res.status(500).json({ message: error.message })
    }
});

router.patch('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await TaskModel.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const data = await TaskModel.findByIdAndDelete(id)
        res.status(204).send(`Document with ${data!.title} has been deleted..`)
    }
    catch (error: any) {
        res.status(400).json({ message: error.message })
    }
});

export default router;