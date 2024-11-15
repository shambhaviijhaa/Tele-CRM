const Task = require('../models/Task');

// Get all tasks
exports.getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// Create a new task
exports.createTask = async (req, res) => {
  const { leadId, userId, status, outcome, note, dueDate, priority } = req.body;
  const newTask = new Task({ leadId, userId, status, outcome, note, dueDate, priority });
  await newTask.save();
  res.json(newTask);
};
