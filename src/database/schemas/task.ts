import mongoose from 'mongoose';
import ITask from '../../models/task';

const taskSchema = new mongoose.Schema<ITask>({
  title: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  isCompleted: {
    required: true,
    type: Boolean
  }
})

export default mongoose.model('Task', taskSchema)