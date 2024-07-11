import ITask from "../models/task";
import IRepository from "./repository";
import TaskModel from './../database/schemas/task'

export default class TaskRepository implements IRepository<ITask> {
    async create(data: ITask): Promise<ITask> {
        const task = new TaskModel(data);
        const savedTask = await task.save() as ITask;
        
        console.log(`savedTask ${savedTask}`)

        return savedTask;
    }

    async getAll(): Promise<ITask[]> {
        return await TaskModel.find() as ITask[]
    }

    async get(id: string): Promise<ITask> {
        return await TaskModel.findById(id) as ITask
    }

    async update(id: string, data: any): Promise<ITask> {
        const options = { new: true };
        return await TaskModel.findByIdAndUpdate(id, data, options) as ITask
    }

    async delete(id: string): Promise<ITask> {
        return await TaskModel.findByIdAndDelete(id) as ITask
    }

}