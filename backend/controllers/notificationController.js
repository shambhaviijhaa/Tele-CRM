const Notification = require('../models/Notification');

// Get all notifications
exports.getNotifications = async (req, res) => {
  const notifications = await Notification.find();
  res.json(notifications);
};

// Create a new notification
exports.createNotification = async (req, res) => {
  const { userId, notificationType, message } = req.body;
  const newNotification = new Notification({ userId, notificationType, message });
  await newNotification.save();
  res.json(newNotification);
};
