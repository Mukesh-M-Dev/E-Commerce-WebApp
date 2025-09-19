import React from 'react'

const SettingsView = () => {
  return (<>
    <h3>Account Settings</h3>
                <form className="settings-form">
                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-input" id="profile-name-input" value="${currentUser.name}" required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-input" id="profile-email-input" value="${currentUser.email}" required/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input type="tel" className="form-input" id="profile-phone-input" value="${currentUser.phone || ''}" placeholder="Enter phone number"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Address</label>
                        <textarea className="form-textarea" id="profile-address-input" placeholder="Enter your address"></textarea>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary">
                            <i className="fas fa-save"></i> Save Changes
                        </button>
                    </div>
                </form>
                </>
  )
}

export default SettingsView