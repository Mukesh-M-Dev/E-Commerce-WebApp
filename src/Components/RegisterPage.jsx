import React from 'react'

export const RegisterPage = ({checkAuthPage}) => {
    function showLogin(){

    }
    function selectRegisterRole(){
        
    }
  return (
    <div id="register-page" className="">
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <div className="auth-logo" id="register-auth-logo">
                        <i className="fas fa-shopping-bag"></i>
                    </div>
                    <h2 className="auth-title">Create Account</h2>
                    <p className="auth-subtitle">Join TechMart today</p>
                </div>

                <div className="role-selector">
                    <button className="role-btn active" data-role="user" onClick={selectRegisterRole('user')}>
                        <i className="fas fa-user"></i>
                        Customer
                    </button>
                    <button className="role-btn" data-role="admin" onClick={selectRegisterRole('admin')}>
                        <i className="fas fa-user-shield"></i>
                        Admin
                    </button>
                </div>

                <form id="register-form">
                    <div className="form-group">
                        <label className="form-label" for="register-name">Full Name</label>
                        <input type="text" id="register-name" className="form-input" required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="register-email">Email Address</label>
                        <input type="email" id="register-email" className="form-input" required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="register-password">Password</label>
                        <input type="password" id="register-password" className="form-input" required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" for="register-confirm">Confirm Password</label>
                        <input type="password" id="register-confirm" className="form-input" required/>
                    </div>
                    <div className="form-group" id="admin-key-group" style={{display: "none;"}}>
                        <label className="form-label" for="admin-key">Admin Key</label>
                        <input type="text" id="admin-key" className="form-input" placeholder="Enter admin registration key"/>
                        <small style={{color: "var(--text-muted);", ["font-size"]:"0.8rem;"}}>Contact system administrator for admin key</small>
                    </div>
                    <button type="submit" className="btn btn-primary" id="register-btn">
                        <i className="fas fa-user-plus"></i>
                        Create Account
                    </button>
                </form>

                <div className="auth-links">
                    <p>Already have an account? <a href="#" className="auth-link" onClick={()=>checkAuthPage("Login")}>Sign in</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

