import React from 'react'
import { Link } from "gatsby"


const Blog = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <h1>Blog</h1>
            <p>This page will display a list of blog posts</p>
        </div>
    )
}

export default Blog;