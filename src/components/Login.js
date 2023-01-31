import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
export default function Login() {
    return (
        <div className="container">
            <div className="row">
                <div className='col-12  d-flex justify-content-center mt-5'>
                    <div className="col-md-6">
                        <h3>Login As_User</h3>
                        <hr className='custom-login-h d-lg-block d-md-block d-none'/>
                    </div>
                </div>
                <div className="d-flex col-12 justify-content-center mb-5">
                    <form className='col-md-6 py-4 px-5  login-border rounded-4'>
                        {/* Email Input */}
                        <div className="form-outline mb-4">
                            <label className="form-label main-login-text-color" for="Email">Email/Username</label>
                            <input type="email" id="Email" className="form-control" placeholder='user@gmail.com' />
                        </div>

                        {/* Password Input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" for="password">Password</label>
                            <input type="password" id="password" className="form-control" placeholder='Password' />
                        </div>


                        <div className="row mb-4">
                            <div className="col d-flex justify-content-start">
                                <input className="form-check-input custom-checkbox" type="checkbox" id="checkbox" />
                                <label className="form-check-label text-muted ms-2" for="checkbox">Remember Me</label>
                            </div>
                            <div className="col text-end">
                                <a href="#" className='text-decoration-none forget-link-color'>Forgot your password?</a>
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="button" className="btn login-btn-color mb-4 text-light">Login</button>
                        </div>
                        <div>
                            <p>You don't have an account? <a href="#!" className='fw-bold text-decoration-none'>Create Account</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}