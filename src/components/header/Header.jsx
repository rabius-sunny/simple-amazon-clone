import React from 'react'
import logo from '../../images/logo.png'
import './header.css'

function Header() {
    return (
        <div className="header">
            <nav>
                <div><a href="/home"><img src={logo} alt="" /></a></div>
                <div><a href="/link">Shop</a>
                    <a href="/link">Order Review</a>
                    <a href="/link">Manage Inventory</a>
                </div>
            </nav>
        </div>
    )
}

export default Header
