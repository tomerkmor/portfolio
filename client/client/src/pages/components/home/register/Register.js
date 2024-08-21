// This page would be: signup form / login form
import { useState } from "react";
import axios from 'axios';
import { useCookies } from 'react-cookie'


const Register = ({ setShowModal, setLoggedIn}) => {
    const [username, setUserName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [phone, setPhone] = useState(null)
    const [error, setError] = useState(null)
    const [cookie, setCookie , removeCookie] = useCookies(['user'])

    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault() //prevent from refreshing
        console.log(e)
        try {
            if ((password !== confirmPassword)) {
                setError('Passwords need to match!')
                setUserName("")
                setEmail("")
                setPassword("")
                setConfirmPassword("")
                return
            }
            console.log("username: " + username)
            console.log("email: " + email)
            console.log("password: " + password)
            console.log("phone number: " + phone)
            
            const response = await axios.post(`https://portfolio-1-yf07.onrender.com/user/create`, { 
                username, 
                email,
                password,
                phone
            })
            
            setCookie('userId', response.data.data)
            console.log(response)
            console.log("UserId: " + response.data)
            setLoggedIn(true)

        } catch (error) {
            console.log(error)
            setError('This userName or Email already exits!')
            setUserName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            return
        }
    }

    return (
        <div>
            <div className="auth-modal">
                <div class="auth-modal-text">
                    <div style={{height: "7vh"}}>
                        <div className="close-icon" onClick={handleClick}>
                            X
                        </div>

                        <h2>CREATE ACCOUNT</h2>
                    </div>
                    
                    <p className="m-b-30" style={{height: "18vh"}}>By clickling SIGN IN, You agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy, by clicking <a href="">here</a></p>
                    <form className="register-form" onSubmit={handleSubmit}>
                        <input
                            value={username}
                            type="text"
                            id="username"
                            name="username"
                            placeholder="username"
                            required={true}
                            onChange={(e) => setUserName(e.target.value)}
                        />

                        <input
                            value={email}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email"
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            value={password}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <input
                            value={confirmPassword}
                            type="password"
                            id="password-check"
                            name="password-check"
                            placeholder="confirm password"
                            required={true}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <input
                            value={phone}
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="phone number"
                            required={true}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                        <input className="secondary-button" type="submit" value="Sign-Up" />
                        <p>{error}</p> {/* print the error */}
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Register
