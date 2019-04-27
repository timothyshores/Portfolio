import React from "react"
import { Link } from "gatsby"

const Index = () => {
    return (
        <div>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <h1>Gatsby JS - The Great Gatsby Bootcamp</h1>
            <h5>This repo is a follow along codebase to the <a href="https://youtu.be/8t0vNu2fCCM">The Great Gatsby Bootcamp</a> by Andrew Mead on YouTube</h5>
        </div>
    )
}

export default Index;