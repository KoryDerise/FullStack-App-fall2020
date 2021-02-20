const router = require('express').Router();

const { getTasks, getUserTasks, createTask, seedTasks, updateTask, deleteTask } = require('../controllers/taskController');
const { verifyToken } = require('../controllers/loginController');

router.get('/', getTasks);
router.post('/usertasks', verifyToken, getUserTasks);
router.post('/', createTask);
router.post('/seedtasks', seedTasks);
router.put('/', updateTask);
router.delete('/', deleteTask);

module.exports = router;