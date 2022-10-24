const express = require("express")
const router = express.Router()

const {getAllTasks,getTask,createTask,updateTask,deleteTask} = require('../controllers/controller.js')

router.get('/',getAllTasks)
router.post('/',createTask)
router.get('/:id',getTask)
router.put("/:id",updateTask)
router.delete("/:id",deleteTask)


module.exports =  router
