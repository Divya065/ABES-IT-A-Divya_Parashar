import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <div>
            <div>
                <ul id='nav'>
                    <li><img src="https://logowik.com/content/uploads/images/chef-restaurant5078.logowik.com.webp" alt="Logo" height={50} /></li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Menu</li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar