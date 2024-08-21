import '../css/css/main.css'
import '../css/css/util.css'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import styles from './tm.css'
import React, { useState, useEffect } from 'react'

const InsertItem = () => {
    // Post new item
    const [cookie, setCookie , removeCookie] = useCookies(['userId'])
    const userId = cookie.userId

    const[taskName, setTaskName] = useState(null)
    
    const postTask = async (e) =>{
        console.log("trying to create to task from the client")
        e.preventDefault() //prevent from refreshing
        try {
            const id = userId
            const name = taskName
            console.log(id)
            console.log(name)
            await axios.post(process.env.REACT_APP_API_URL + '/tasks', {
                id, name
            })

            console.log("POSTED TASK")
            window.location.reload(); 
            
        } catch(error) {
            console.log("failed to get tasks")
            console.log(error.message)
        }
    }


    return (
        <div>
            <form onSubmit={postTask}>
                <h2>Insert Task</h2>
                <input
                type="text"
                name="name"
                class="task-input"
                placeholder="e.g. wash dishes"
                onChange={(e) => setTaskName(e.target.value)}
                value={taskName}
                required
                />
                <button type="submit" className="block btn submit-btn">submit</button>
            
                <div className="form-alert"></div>
            </form>
        </div>
    )
}

export default InsertItem
