import React from 'react'
import { Link } from "gatsby"

const Contact = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
            <h1>Contact</h1>
            <p>Timothy Shores is a full-time full stack web development student at Lambda School. On Friday nights he enjoys staying in and watching Game of Thrones with his girlfriend and learning about GatsbyJS</p>
            <ul>
                <li>GitHub: <Link to="https://github.com/timothyshores">@timothyshores</Link></li>
                <li>LinkedIn: <Link to="https://www.linkedin.com/in/timothyshores/">Timothy Shores</Link></li>
                <li>Twitter: <Link to="https://twitter.com/timothymshores">@timothymshores</Link></li>

            </ul>
        </div>
    )
}

export default Contact;