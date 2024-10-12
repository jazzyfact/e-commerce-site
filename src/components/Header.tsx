import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import '../scss/header.scss'

const Header = () => {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <Link to="/">홈</Link>
                    <Link to="/cart">장바구니</Link>
                </nav>
            </header>
        </BrowserRouter>
    )
}

export default Header
