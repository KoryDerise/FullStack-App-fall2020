const Task = require('../models/Task');
const tasks = require('../data/tasks');

const getTasks = (req, res) => {
  return Task.find()
    .exec((err, tasks) => {
      if (err) return res.status(500).send(err.message);
      if (tasks.length === 0) return res.status(404).send("No tasks found.");
      return res.status(200).send(tasks);
    });
}

const getUserTasks = async (req, res) => {
  const userId = req.body.userId;
  await Task.find({ userId: userId }, (err, users) => {
    if (err) res.status(500).send(err.message);
    else res.status(200).send(users);
  });
}

const createTask = async (req, res) => {
  const task = req.body;
  await Task.create(task)
    .then(task => res.status(200).send(task))
    .catch(err => res.status(500).send(err.message));
};

const seedTasks = async (req, res) => {
  Task.create(tasks)
    .then(tasks => res.status(200).send(tasks))
    .catch(err => res.status(500).send(err.message));
}

const updateTask = async (req, res) => {

  const taskId = req.body.id;
  return Task.findByIdAndUpdate(taskId, { $set: req.body }, { new: true }, (err, task) => {
    console.log(task);
    if (err) return res.status(400).send(err.message);
    if (!task) return res.status(404).send("Task not found.");
    return res.status(200).send(task);
  });
}

const deleteTask = async (req, res) => {
  const taskId = req.body.id;
  return Task.findByIdAndRemove(taskId, (err, task) => {
    if (err) return res.status(400).send(err.message);
    if (!task) return res.status(404).send("No task found.");
    return res.status(200).send(task);
  });
}

module.exports = { createTask, seedTasks, updateTask, getTasks, getUserTasks, deleteTask };