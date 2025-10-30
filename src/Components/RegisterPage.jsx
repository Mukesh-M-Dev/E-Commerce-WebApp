import React, { useState } from 'react'
import adminKey from '../assets/adminKey.json'

export const RegisterPage = ({checkAuthPage, showToast}) => {
    const [userInfo,setUserInfo] = useState({
        userName:"",
        password:"",
        mail:"",
        confirmpassword:"",
        adminKey:""
    })
    function selectRegisterRole(){
        
    }
    function createUserInfo(){
        if(userInfo.userName && userInfo.password && userInfo.mail && userInfo.confirmpassword){
            if(userInfo.password === userInfo.confirmpassword){
                fetch('https://apihostpilot.azurewebsites.net/user/api/adduser',{
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name: userInfo.userName, email: userInfo.mail, password: userInfo.password})
                })
                .then(response => response.json())
                .then(data => {
                    if(data.success){
                        showToast(data.message,"success");
                        checkAuthPage("Login");
                    }else{
                        showToast(data.message,"error");
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });

                    showToast("User Created Successfulyl!!!","success");
                    checkAuthPage("Login");
            }else{
                showToast("Password Mismatch!!!","error");
            }
        }else{
            showToast("Please fill all the details!!!","error");
        }
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

                <form id="register-form" onSubmit={createUserInfo}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="register-name">Full Name</label>
                        <input type="text" value={userInfo.userName} onChange={(event)=>setUserInfo((prev)=> ({...prev,userName:event.target.value}) )} id="register-name" className="form-input" required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="register-email">Email Address</label>
                        <input type="email" value={userInfo.mail} onChange={(event)=>setUserInfo((prev)=> ({...prev,mail:event.target.value}) )} id="register-email" className="form-input" required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="register-password">Password</label>
                        <input type="password" value={userInfo.password} onChange={(event)=>setUserInfo((prev)=> ({...prev,password:event.target.value}) )} id="register-password" className="form-input" required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="register-confirm">Confirm Password</label>
                        <input type="password" value={userInfo.confirmpassword} onChange={(event)=>setUserInfo((prev)=> ({...prev,confirmpassword:event.target.value}) )} id="register-confirm" className="form-input" required/>
                    </div>
                    <div className="form-group" id="admin-key-group" style={{display: "none"}}>
                        <label className="form-label" htmlFor="admin-key">Admin Key</label>
                        <input type="text" id="admin-key" value={userInfo.adminKey} onChange={(event)=>setUserInfo((prev)=> ({...prev,adminKey:event.target.value}) )} className="form-input" placeholder="Enter admin registration key"/>
                        <small style={{color: 'var(--text-muted)', fontSize:"0.8rem"}}>Contact system administrator for admin key</small>
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

