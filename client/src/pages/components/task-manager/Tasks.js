import '../css/css/main.css'
import '../css/css/util.css'
import axios from 'axios'
import { useCookies } from 'react-cookie';

import './tm.css'
import React, { useState, useEffect } from 'react'

const Tasks = ({setEdit}) => {
    // Get tasks list
    const [cookie, setCookie, removeCookie] = useCookies(['userId']);
    const userId = cookie.userId;

    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getTasks = async () => {
        try {
            const response = await axios.get(process.env.REACT_APP_API_URL +'/tasks/'+userId)
            console.log(response.data.tasks)
            setTasks(response.data.tasks)
            setLoading(false);
        } catch(error) {
            setError('There was an error, please try later....');
            setLoading(false);
        }
    }

    useEffect(() => {
        getTasks()
    },[])
    
    const editClicked = () => {
        setEdit(true)
    }

    return (
        <div>
            <section>
                <p className="loadingText">Loading...</p>
                <div className="tasks">
                {tasks.map((task) => {
                    const { completed, _id: taskID, name } = task;
                    return (
                    <div key={taskID} className={`single-task ${completed ? 'task-completed' : ''}`}>
                        <h5>
                        <span>
                            <i className="far fa-check-circle"></i>
                        </span>
                        {name}
                        </h5>

                        <div className="task-links">
                        <a className="edit-link">
                            <i className="fas fa-edit" onClick={() => editClicked(taskID)}>Edit</i>
                        </a>

                        <button type="button" className="delete-btn" data-id={taskID}>
                            <i className="fas fa-trash">Delete</i>
                        </button>
                        </div>
                    </div>
                    );
                })}
                </div>
            </section>
        </div>
    )
}

export default Tasks
