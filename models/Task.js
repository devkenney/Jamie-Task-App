const { Schema }, mongoose = require('mongoose');

const taskSchema = new Schema ({
  content: { type: String },
  completed: { type: Boolean },
  dueDate: { type: Date }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;