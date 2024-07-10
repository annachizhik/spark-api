import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
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
