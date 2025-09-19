import {useState} from 'react'

const OverviewView = () => {
    const [role,setRole] = useState("user");   
  return (
    <><h3>Account Overview</h3>
                <div className="overview-stats">
                    <div className="stat-card">
                        <h4>Total Orders</h4>
                        <p className="stat-number"></p>
                    </div>
                    <div className="stat-card">
                        <h4>Wishlist Items</h4>
                        <p className="stat-number"></p>
                    </div>
                    <div className="stat-card">
                        <h4>Member Since</h4>
                        <p className="stat-number"></p>
                    </div>
                </div>
                {role === 'admin' ? 
                    <div style={{marginTop: '2rem', padding: '1rem', background: 'rgba(142, 68, 173, 0.1)', borderRadius: '10px', border: '1px solid var(--admin-color)'}}>
                        <h4 style={{color: 'var(--admin-color)', marginBottom: '1rem'}}>
                            <i className="fas fa-shield-alt"></i> Admin Privileges
                        </h4>
                        <p>You have administrator access to manage products, orders, and users.</p>
                        <button className="btn btn-admin"  style={{marginTop: '1rem'}}>
                            <i className="fas fa-tachometer-alt"></i> Go to Admin Panel
                        </button>
                    </div>
                 : null}  </>
  )
}

export default OverviewView