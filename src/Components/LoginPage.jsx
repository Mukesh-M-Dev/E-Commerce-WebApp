import React from 'react'

const LoginPage = ({checkAccess,checkAuthPage}) => {
    function selectRole(){

    }
    function showRegister(){

    }
  return (
     <div id="login-page" className="">
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <div className="auth-logo" id="auth-logo">
                        <i className="fas fa-shopping-bag"></i>
                    </div>
                    <h2 className="auth-title">Welcome Back</h2>
                    <p className="auth-subtitle">Sign in to your account</p>
                </div>

                <div className="role-selector">
                    <button className="role-btn active" data-role="user" onClick={selectRole('user')}>
                        <i className="fas fa-user"></i>
                        Customer
                    </button>
                    <button className="role-btn" data-role="admin" onClick={selectRole('admin')}>
                        <i className="fas fa-user-shield"></i>
                        Admin
                    </button>
                </div>

                <form id="login-form">
                    <div className="form-group">
                        <label className="form-label" label="login-email">Email Address</label>
                        <input type="email" id="login-email" className="form-input" required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" label="login-password">Password</label>
                        <input type="password" id="login-password" className="form-input" required/>
                    </div>
                    <button type="submit" className="btn btn-primary" id="login-btn" onClick={checkAccess}>
                        <i className="fas fa-sign-in-alt"></i>
                        Sign In
                    </button>
                </form>

                <div className="auth-links">
                    <p>Don't have an account? <a href="#" className="auth-link" onClick={()=>checkAuthPage("Signup")}>Sign up</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage