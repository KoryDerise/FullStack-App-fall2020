const router = require('express').Router();

const { getTasks, createTask, seedTasks, updateTask, deleteTask } = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/', createTask);
router.post('/seedtasks', seedTasks);
router.put('/', updateTask);
router.delete('/', deleteTask);

module.exports = router;