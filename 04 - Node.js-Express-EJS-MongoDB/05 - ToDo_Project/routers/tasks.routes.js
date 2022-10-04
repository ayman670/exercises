const taskController = require('../controllers/tasks');
const router = require('express').Router();


//find all tasks
router.get('/tasks', taskController.index);

//create a new task
router.post('/create', taskController.create);

//update a task
router.get('/update/:id', taskController.edit);
router.put('/update/:id', taskController.update);

//delete a tasks
router.delete('/delete/:id', taskController.delete);

module.exports = router;
