// import NavBar from "../components/NavBar"
import Register from "../../components/home/register/Register"
import LoginForm from "../../components/home/login/LoginForm"
import RegisterBtn from "../../components/home/login/RegisterBtn"
import Content from "../../components/home/content/Content"
import { useCookies } from 'react-cookie'

import '../../components/css/css/main.css'
import '../../components/css/css/util.css'

import React, { useState, useEffect } from 'react'

const Home = () => {
    const [cookie, setCookie] = useCookies(['user'])
    const [showModal, setShowModal] = useState(false); {/* home page: show the login / registery form */ }
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if(cookie.userId){
            setLoggedIn(true)
        }
    }, [cookie.userId])
    

    return (
        <div className="container-login100-22">

            {/* Login Form */}
            {!loggedIn && !showModal && (
            <div className="wrap-login100-2 p-l-55 p-r-55 p-t-65">
                <LoginForm setLoggedIn={setLoggedIn}/>
                <RegisterBtn setShowModal={setShowModal}/>
            </div>
            )}

            {/* Register Form */}
            {!loggedIn && showModal && 
                <Register setShowModal={setShowModal} setLoggedIn={setLoggedIn}/>
            }

            {/* Logged-In */}
            {loggedIn &&
                <Content />
            }
        </div>
    )
}

export default Home