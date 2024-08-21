import { useState } from "react"
import "../../../../index.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const LoginForm = ({setLoggedIn}) => {
    const [username, setUserName] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(null)
    const [cookie, setCookie , removeCookie] = useCookies(['userid'])

    //const navigate = useNavigate()
    //navigate('/main')
    const handleSubmit = async (e) => {
        e.preventDefault() //prevent from refreshing
        try {
            const response = await axios.post('https://portfolio-1-yf07.onrender.com/user/login' , { username, password })
            const success = (response.status === 200)
            console.log("user's id = response.data.data: ", response.data.data)

            if (success){
                setCookie('userId', response.data.data)
                setLoggedIn(true)
            } 

            if(!success){
                setError('Wrong Username or Password')
                setUserName("")
                setPassword("")
                return
            }

        } catch (error) {
            console.log(error)
            alert("Wrong Username or Password")
            setUserName("")
            setPassword("")
            return
        }
    }

    return (
        <div>
            <form className="login100-form2 validate-form" autoComplete="off" onSubmit={handleSubmit}>
                
                {/* Login title */}
                <span className="login100-form-title p-b-20">
                    Login
                </span>
                

                {/* UserName Label */}
                <div className="wrap-input100 validate-input m-b-23" data-validate="Username is required">
                    <span className="label-input100">User Name</span>
                    <input
                        autoComplete="off"
                        id="UserName"
                        className="input100"
                        type="text"
                        name="username"
                        required={true}
                        placeholder="Type your UserName"
                        onChange={(e) => setUserName(e.target.value)}
                        value={username}
                    />

                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                </div>


                {/* Password Label */}
                <div className="wrap-input100 validate-input m-b-30" data-validate="Password is required">
                    <span className="label-input100">Password</span>
                    <input 
                        className="input100" 
                        type="password" 
                        name="pass" 
                        required={true} 
                        placeholder="Type your password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        />
                    <span className="focus-input100" data-symbol="&#xf190;"></span>
                </div>


                {/* Login Button */}
                <div className="container-login100-form-btn ">
                    <div className="wrap-login100-form-btn">
                        <div className="login100-form-bgbtn"></div>
                        <button className="login100-form-btn">
                            Login
                        </button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default LoginForm
