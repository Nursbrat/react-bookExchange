import React from 'react'
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LoginForm from './components/LoginForm/LoginForm'
import SignUpForm from './components/SignUpForm/SignUpForm'
import images from '../../constants/images'

const Auth = () => {
    return (

        <div className="auth" style={{ backgroundImage: `url(${images.authBackground})` }}>

            <div className="auth__content">
                <div className="auth__logo">
                    <img src={images.logo} alt="logo" />
                </div>

                <nav className="auth__nav">
                    <NavLink to='/login'>Войти</NavLink>
                    <NavLink to='/singup'>Регистрация</NavLink>

                </nav>

                <Routes>
                    <Route path='/login' element={LoginForm} />
                    <Route path='/signup' element={SignUpForm} />

                </Routes>

                <SignUpForm />

            </div>


        </div>

    )
}

export default Auth
