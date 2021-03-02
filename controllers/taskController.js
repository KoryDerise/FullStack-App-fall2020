const Task = require('../models/Task');
const tasks = require('../data/tasks');

const getTasks = (req, res) => {
  return Task.find()
    .exec((err, tasks) => {
      if (err) return res.status(500).send(err.message);
      if (tasks.length === 0) return res.status(404).send("No tasks found.");
      return res.status(200).send(tasks);
    });
};

const getUserTasks = async (req, res) => {
  const userId = req.body.userId;
  return await Task.find({ userId: userId }, (err, tasks) => {
    if (err) return res.status(500).send(err.message);
    else return res.status(200).send(tasks);
  });
};

const createTask = async (req, res, next) => {
  const task = req.body;
  return await Task.create(task, (err, task) => {
    if (err) return res.status(500).send(err.message);
    return next();
  });
};

const seedTasks = async (req, res) => {
  Task.create(tasks)
    .then(tasks => res.status(200).send(tasks))
    .catch(err => res.status(500).send(err.message));
}

const updateTask = async (req, res, next) => {
  const taskId = req.body._id;

  return await Task.findByIdAndUpdate(taskId, { $set: req.body }, { new: true }, (err, task) => {
    if (err) return res.status(400).send(err.message);
    if (!task) return res.status(404).send("Task not found.");
    return next();
  });
}

const deleteTask = async (req, res, next) => {
  const taskId = req.body.taskId;

  return await Task.findByIdAndRemove(taskId, (err, task) => {
    if (err) return res.status(400).send(err.message);
    if (!task) return res.status(404).send("No task found.");
    return next();
  });
}

module.exports = { createTask, seedTasks, updateTask, getTasks, getUserTasks, deleteTask };