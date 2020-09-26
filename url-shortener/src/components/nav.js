import React from 'react'

const Nav = () => {
    return (
        <div className='nav-panel'>
            <div className='nav-links'>
                <p>Features</p>
                <p>Pricing</p>
                <p>Resources</p>
            </div>
            <div className='nav-user'>
                <p>Login</p>
                <div className='user-signup'>
                    <p>Sign Up</p>
                </div>
            </div>
        </div>
    )
}

export default Nav