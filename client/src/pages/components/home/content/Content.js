
import '../../css/css/main.css'
import '../../css/css/util.css'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { useState, useEffect } from 'react'
const Content = () => {
    const [username, setUsername] = useState(null)
    const [cookie, setCookie , removeCookie] = useCookies(['userId'])
    const userId = cookie.userId

    const getUsername = async () => {
        try {
            const response = await axios.get('http://localhost:5000/user?id='+userId)
            console.log("response.data: " , response.data)
            console.log("userList = response.data.data: " , response.data.data)
            setUsername("Tomer")
        } catch(error) {
            console.log(error)
            setUsername("Fail to get username")
        }
    }


    useEffect(() => {
        getUsername()
    },[])

    return (
        <div className="wrap-login100-2">
            <div className="title p-t-45 p-b-25">
                <h1>Hello {username}! <br /></h1>
                <h4>Welcome to my website :)</h4>  
            </div>
            
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
                <p><a href="/roman-numeral-converter" className="unavailable">Roman Numeral Converter</a></p>
                <p><a href="/phone-converter" className="unavailable">U.S Telephone Number Validor</a></p>
                <p><a href="/cash-register">Cash Register</a></p>
                <p><a href="/poki-wiki" className="unavailable">Pokemon Wiki</a></p>
                <br /><br />

                <h2>Node.JS Microservices:</h2>
                <p><a href="/timestamp" className="unavailable">Timestamp</a></p>
                <p><a href="/header-parser" className="unavailable">Header Parser</a></p>
                <p><a href="/url-shortener"className="unavailable">Url Shortener</a></p>
                <p><a href="/exercise-tracker"className="unavailable">Exercise Tracker</a></p>
                <p><a href="/file-metadata"className="unavailable">File Metadata</a></p>

            </div>
        </div>
    )
}

export default Content