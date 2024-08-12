import '../../components/css/css/main.css'
import '../../components/css/css/util.css'

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

import InsertItem from '../../components/task-manager/InsertItem'
import Tasks from '../../components/task-manager/Tasks'
import Edit from '../../components/task-manager/Edit'

const TaskManager = () => {
    const [edit, setEdit] = useState(false)

    const [cookie, setCookie , removeCookie] = useCookies(['userid'])
    const navigate = useNavigate()
    useEffect(() => {
        // if there's no authntication key - go back to the main page
        if(!cookie.userId){
            navigate('/')
        }
    }, [cookie.userId])

    return (
        <div className="container-login100-22">
            <div className="wrap-login100-2">
                <div className="title p-t-45 p-b-25">
                    <h1>Task Manager <br /></h1>
                    <h4>Add, Edit and Delete tasks</h4>  
                </div>
                { !edit ? 
                    <div>
                        <InsertItem /> 
                        <Tasks setEdit={setEdit}/>
                    </div>
                    : 
                    <Edit setEdit={setEdit}/>
                }
                
            </div>
        </div>
    )
}

export default TaskManager