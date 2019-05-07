import React from 'react'
import mp4 from '../videos/Baga-Beach/MP4/Baga-Beach.mp4'
import webm from '../videos/Baga-Beach/WEBM/Baga-Beach.webm'
import jpg from '../videos/Baga-Beach/Snapshots/Baga-Beach.jpg'

import landingStyles from './landing.module.scss'

const Landing = (props) => {
    return (
        <header
            className={
                `${landingStyles.vHeader} ${landingStyles.container}`
            }
        >
            <div className={landingStyles.videoWrapper}>
                <video
                    className={landingStyles.video}
                    poster={jpg}
                    autoplay="true"
                    loop="true"
                    preload="auto"
                >
                    <source src={mp4} type="video/mp4" />
                    <source src={webm} type="video/webm" />
                </video>
            </div>
            <div className={landingStyles.headerOverlay}></div>
            <div className={landingStyles.headerContent}>
                <h1 className={landingStyles.h1}>Timothy Shores</h1>
                <p className={landingStyles.p}>Full-Stack Web Developer and Software Engineer</p>
                <a href="https://github.com/timothyshores" className={landingStyles.btn}>GitHub</a>
                <a href="https://www.linkedin.com/in/timothyshores/" className={landingStyles.btn}>LinkedIn</a>
                <a href="https://twitter.com/timothymshores" className={landingStyles.btn}>Twitter</a>
            </div>
        </header>
    )
}

export default Landing;