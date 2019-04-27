import React from 'react'
import { Link } from "gatsby"
import './header.scss'

const Header = () => {
    return (
        <div>
            <header>
                <h1>Gatsby Bootcamp Tutorial</h1>
            </header>
            <nav>
                <ul>
                    <li><Link className="link" to="/">Home</Link></li>
                    <li><Link className="link" to="/about">About</Link></li>
                    <li><Link className="link" to="/blog">Blog</Link></li>
                    <li><Link className="link" to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;