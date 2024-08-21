import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './tm.css'

const Edit = ({setEdit, taskID}) => {
    const [updatedTask, setUpdatedTask] = useState('')
    const [error, setError] = useState(null);

    // Update single task
    const submitHandler = async() => {
        setEdit(false)
        console.log("updated task: " + updatedTask)
        try {
            setEdit(true)
            console.log(process.env.REACT_APP_API_URL +'/tasks/task/' + taskID)
            const response = await axios.patch(process.env.REACT_APP_API_URL +'/tasks/task/' + taskID, {
                name: updatedTask
                //WHAT SHOULD I WRITE HERE???
            })

            //getTasks()
        } catch (error) {
            console.error('Failed to edit:', error);
            setError('Failed to update the task');
        }
    }
    
    return (
        <div>
            <form className="single-task-form" onSubmit={submitHandler}>
                <h2 class="m-b-20">Edit Task</h2>
                {error && <div className="error">{error}</div>}
                <div className="form-control">
                    <label>Task ID</label>
                    <p className="task-edit-id">{taskID}</p>
                </div>
                <div className="form-control">
                    <label for="name">Name</label>
                    <input type="text" name="name" class="task-edit-name" onChange={(e) => setUpdatedTask(e.target.value)} value={updatedTask}/>
                </div>
                <div className="form-control">
                    <label for="completed">completed</label>
                    <input type="checkbox" name="completed" class="task-edit-completed" />
                </div>
                <button type="submit" class="block btn task-edit-btn">edit</button>
                <div class="form-alert"></div>
            </form>
            <a class="btn back-link">back to tasks</a>
        </div>
    )
}

export default Edit