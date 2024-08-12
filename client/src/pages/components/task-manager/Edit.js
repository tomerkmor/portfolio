import React, { useState, useEffect } from 'react'
import styles from './tm.css'

const Edit = ({setEdit}) => {
    // Update single task


    const returnClicked = () => {
        setEdit(false)
    }
    
    return (
        <div>
            <form className="single-task-form">
                <h2 class="m-b-20">Edit Task</h2>
                <div className="form-control">
                    <label>Task ID</label>
                    <p className="task-edit-id">1278dsa789121</p>
                </div>
                <div className="form-control">
                    <label for="name">Name</label>
                    <input type="text" name="name" class="task-edit-name" />
                </div>
                <div className="form-control">
                    <label for="completed">completed</label>
                    <input type="checkbox" name="completed" class="task-edit-completed" />
                </div>
                <button type="submit" class="block btn task-edit-btn">edit</button>
                <div class="form-alert"></div>
            </form>
            <a class="btn back-link" onClick={returnClicked}>back to tasks</a>
        </div>
    )
}

export default Edit