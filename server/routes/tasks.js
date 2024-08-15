import express from 'express'

const router = express.Router();

import {
    getAllTasks,
    createTask,
    getSingleTask,
    updateSingleTask,
    deleteSingleTask
} from '../controllers/tasks.js'


router.route('/:id').get(getAllTasks)
router.route('/').post(createTask)

//for edit and update:
//router.route('/:id').get(getSingleTask).patch(updateSingleTask).delete(deleteSingleTask)

//module.exports = router2
export default router;




