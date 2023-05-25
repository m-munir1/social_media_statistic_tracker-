import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <section id="login-wrapper">
                <div className="opacity"></div>
                <div className="container lin">

                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className="row login-main">
                                <div className="col-md-6 p-0">
                                    <div className="login-left">
                                        <a href=""><img src="" /></a>
                                        <div>
                                            <h2>Please Sign in to continue!</h2>
                                            <p>We will verify your account and you will get an activation email from admin. You can check your course details and progress from your profile page.</p>
                                            <div className="line"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 p-0">
                                    <div className="login-right">
                                        <form className="login-form" action="" method=" ">
                                            <h2>SignIn</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                            <div className="form-group one">
                                                <label>E-mail</label>
                                                <input type="email" name="" placeholder="example@mail.com" className="form-control" />
                                            </div>
                                            <div className="form-group two mb-5">
                                                <label>Password</label>
                                                <input type="password" name="" placeholder="6+ strong character" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <Link to="/" className="btn login-btn rounded-pill" >Login</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login