import React, {useState , useEffect} from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useNavigate } from "react-router-dom";

import Title from '../../components/list/title/Title'
import ShowList from '../../components/list/list/ShowList'
import Search from '../../components/list/bottom/Search'
import AddItem from '../../components/list/bottom/AddItem'
import NavBar from '../../components/list/NavBar/NavBar'

import '../../../App.css'


function List() {
    
    const userId = cookie.userId
    const [auth, setAuth] = useState(false)

    const [userText , setUserText] = useState("")
    const [userList , setUserList] = useState([])

    const [itemDeleted, setItemDeleted] = useState(1)
    const [toggle , setToggle] = useState(false)

    const [cookie, setCookie , removeCookie] = useCookies(['userid'])
    const navigate = useNavigate()
    useEffect(() => {
        // if there's no authntication key - go back to the main page
        if(!cookie.userId){
            navigate('/')
        }
    }, [cookie.userId])
    
    const getUserList = async () => {
        try {
            const response = await axios.get('http://localhost:5000/user/list?id='+userId)
            console.log("lfdsjnkaafldjksldsfjklskdfa" , response.data.data)
            setUserList(response.data.data)
            setAuth(true)
        } catch(error) {
            alert("Unathorized Attemp!")
            //navigate('/main')
        }
    }

    useEffect(() => {
        getUserList()
    },[userId , itemDeleted])

    return (
        <div className="App-header link">
            {auth && (
                <div className="listDiv" style={{ width: "90%"}}>
                    <NavBar user={userId} toggle={toggle} setToggle={setToggle} />
                    {!toggle && (
                        <div>
                            <Title />
                            <ShowList userText={userText} itemDeleted={itemDeleted} setItemDeleted={setItemDeleted} userList={userList} setUserList={setUserList}/>
                            
                            <div>
                                <Search setUserText={setUserText}/>
                                <AddItem />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )}

export default List;



