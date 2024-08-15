
import axios from 'axios'
import { useCookies } from 'react-cookie'
import React, { useState, useEffect } from 'react'


const AddExercise = () => {
    // Post new item
    const [cookie, setCookie , removeCookie] = useCookies(['userId'])
    const userId = cookie.userId
    
    const[description, setDescription] = useState('')
    const[duration, setDuration] = useState('')
    const[date, setDate] = useState('')
    
    
    const createTask = async (e) =>{
        // setters

        console.log("trying to create exericse from the client")
        e.preventDefault() //prevent from refreshing
        try {
            await axios.post('http://localhost:5000/api/exercises/', {
                userId, description, duration, date
            })

            console.log("POSTED TASK")
            setDescription('')
            setDuration('')
            setDate('')
            //window.location.reload(); 
        } catch(error) {
            console.log("failed to get tasks")
            console.log(error.message)
        }
    }

    return (
        <div>
            <form action={process.env.REACT_APP_API_URL + '/api/exercises/'} id="exercise-form" method="post" onSubmit={createTask}>
                <h2>Add exercises</h2>
                <p><code>POST /api/users/:username/exercises</code></p>
                <input id="desc" type="text" name="description" placeholder="description*" onChange={(e) => setDescription(e.target.value)} value={description} required/>
                <input id="dur" type="text" name="duration" placeholder="duration* (mins.)" onChange={(e) => setDuration(e.target.value)} value={duration} required/>
                <input id="date" type="text" name="date" placeholder="date (yyyy-mm-dd)" onChange={(e) => setDate(e.target.value)} value={date}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default AddExercise