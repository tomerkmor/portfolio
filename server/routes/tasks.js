import express from 'express'

const router = express.Router();

import {
    getAllTasks,
    createTask,
    getSingleTask,
    updateSingleTask,
    deleteSingleTask
} from '../controllers/tasks.js'
import { getUser2 } from '../controllers/posts.js';

router.route('/task-manager/:id').get(getAllTasks)
router.route('/task-manager').post(createTask)
router.route('/:id').get(getSingleTask).patch(updateSingleTask).delete(deleteSingleTask)

//module.exports = router2
export default router;




