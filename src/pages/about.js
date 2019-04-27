import React from 'react'
import { Link } from "gatsby"

const About = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <h1>About</h1>
            <p>Timothy Shores is a full-time full stack web development student at Lambda School. On Friday nights he enjoys staying in and watching Game of Thrones with his girlfriend and learning about GatsbyJS</p>
        </div>
    )
}

export default About;