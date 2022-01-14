import React from 'react'
import Header from '../Header'
import SignIn from './SignInForm'
import SignUp from './SignUpForm'
import { Routes, Route, useNavigate } from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Header />
            <div className="container">
                <div className="signIn__content">
                    <Routes>
                        <Route path="signin" element={<SignIn />} />
                        <Route path="signup" element={<SignUp />} />
                    </Routes>
                </div>
            </div>
        </div>

    )
}

export default Auth
