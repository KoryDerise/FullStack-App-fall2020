const router = require('express').Router();

const { getTasks, getUserTasks, createTask, seedTasks, updateTask, deleteTask } = require('../controllers/taskController');

router.get('/', getTasks);
router.post('/usertasks', getUserTasks);
router.post('/', createTask, getUserTasks);
router.post('/seedtasks', seedTasks);
router.put('/', updateTask, getUserTasks);
router.delete('/', deleteTask, getUserTasks);

module.exports = router;