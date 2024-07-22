import mongoose from 'mongoose';
import ITask from '../../models/task';

const taskSchema = new mongoose.Schema<ITask>({
  title: {
    required: true,
    type: String
  },
  status: {
    required: true,
    type: Number
  },
  createdAt: {
    required: true,
    type: Date
  },
  sortId: {
    required: true,
    type: Number
  },
  editedAt: {
    required: false,
    type: Date
  },
  deletedAt: {
    required: false,
    type: Date
  },
  writing: {
    required: false,
    type: String
  },
  parentId: {
    required: false,
    type: String
  },
  description: {
    required: false,
    type: String
  }
})

export default mongoose.model('Task', taskSchema)