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
// API to get tasks for a specific lead
exports.byLeads = async (req, res) => {
  try {
      const leadId = req.params.leadId;
      
      // Fetch all tasks related to the given leadId
      const tasks = await Task.find({ leadId }).populate('userId', 'name');  // Optional: populate user info
      res.status(200).json(tasks);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching tasks for lead', error });
  }
};
const Lead = require('../models/Lead');

// Create a new task for a specific lead
exports.createTaskForLead = async (req, res) => {
    try {
        const { leadId, userId, status, priority, dueDate, outcome, note } = req.body;

        // Create a new task
        const newTask = new Task({
            leadId,
            userId,
            status,
            priority,
            dueDate,
            outcome,
            note
        });

        const savedTask = await newTask.save();

        // Find the lead and push the task ID to the tasks array
        const lead = await Lead.findById(leadId);
        lead.tasks.push(savedTask._id);
        await lead.save();

        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
};
