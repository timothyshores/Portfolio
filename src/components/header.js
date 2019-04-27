import React from 'react'
import { Link } from "gatsby"
import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <div>
            <header className={headerStyles.header}>
                <h1><Link className={headerStyles.title} to="/">Gatsby Bootcamp Tutorial</Link></h1>
            </header>
            <nav>
                <ul>
                    <li><Link className={headerStyles.link} to="/">Home</Link></li>
                    <li><Link className={headerStyles.link} to="/about">About</Link></li>
                    <li><Link className={headerStyles.link} to="/blog">Blog</Link></li>
                    <li><Link className={headerStyles.link} to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;