import '../../components/css/css/main.css'
import '../../components/css/css/util.css'

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import InsertItem from '../../components/task-manager/InsertItem'
import Tasks from '../../components/task-manager/Tasks'
import Edit from '../../components/task-manager/Edit'
import Container from '../../components/Container'

const TaskManager = () => {
    const [edit, setEdit] = useState(false)
    const [currentTaskId, setCurrentTaskId] = useState(null);

    const [cookie, setCookie , removeCookie] = useCookies(['userid'])
    const navigate = useNavigate()

    useEffect(() => {
        // if there's no authntication key - go back to the main page
        if(!cookie.userId){
            navigate('/')
        }
    }, [cookie.userId])

    return (
        <Container title="Task Manager" subtitle="Add, Edit and Delete tasks">
                { !edit ? 
                    <div>
                        <InsertItem /> 
                        <Tasks setEdit={setEdit} setCurrentTaskId={setCurrentTaskId}/>
                    </div>
                    : 
                    <Edit setEdit={setEdit} taskID={currentTaskId}/>
                }
        </Container>
        
    )
}

export default TaskManager