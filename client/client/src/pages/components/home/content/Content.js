
import '../../css/css/main.css'
import '../../css/css/util.css'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useState, useEffect } from 'react'

import Title from '../../Title'

const Content = () => {
    const [username, setUsername] = useState(null)
    const [cookie, setCookie , removeCookie] = useCookies(['userId'])
    const userId = cookie.userId
    const [logout, setLogout] = useState(false)

    const getUsername = async () => {
        try {
            const response = await axios.get('https://portfolio-1-yf07.onrender.com/user?id='+userId)
            console.log("response.data: " , response.data.user[0])
            console.log("userList = response.data.data: " , response.data.data)
            setUsername(response.data.user[0].username)
        } catch(error) {
            console.log(error)
            setUsername("{Failed to get username}")
        }
    }

    useEffect(() => {
        getUsername()
    },[])

    return (
        <div className="wrap-login100-2">
                <Title title={"hello " + username + "!"} subtitle={"Welcome to my website :)"} logout={!logout}/>

            <br />
            <div class="lists p-r-30 p-l-30">
                <h2>My Apps:</h2>
                <p>This one, the one you are already using! :)</p>
                <p><a href="/my-list">Plano - Checker App</a></p>
                <p><a href="/task-manager">Task Manager</a></p>
                <p><a href="/Store" className="unavailable">Store</a></p>
                <br /><br />

                <h2>Pure JS exercises:</h2>
                <p><a href="/palindrome">Palindrome</a></p>
                <p><a href="/roman-numeral-converter">Roman Numeral Converter</a></p>
                <p><a href="/phone-converter">U.S Telephone Number Validor</a></p>
                <p><a href="/cash-register">Cash Register</a></p>
                <p><a href="/poki-wiki">Pokemon Wiki</a></p>
                <br /><br />

                <h2>Node.JS Microservices:</h2>
                <p><a href="/timestamp">Timestamp</a></p>
                <p><a href="/header-parser">Header Parser</a></p>
                <p><a href="/url-shortener">Url Shortener</a></p>
                <p><a href="/exercise-tracker">Exercise Tracker</a></p>
                <p><a href="/file-metadata">File Metadata</a></p>

            </div>
        </div>
    )
}

export default Content