import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import mp4 from "../videos/Baga-Beach/MP4/Baga-Beach.mp4"
import webm from "../videos/Baga-Beach/WEBM/Baga-Beach.webm"
import jpg from "../videos/Baga-Beach/Snapshots/Baga-Beach.jpg"

import landingStyles from "./landing.module.scss"

const Landing = props => {
  return (
    <header className={`${landingStyles.vHeader} ${landingStyles.container}`}>
      <div className={landingStyles.videoWrapper}>
        {/* eslint-disable-next-line */}
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
        <p className={landingStyles.p}>
          Full-Stack Web Developer and Software Engineer
        </p>
        <div className="navigation">
          <button
            className={landingStyles.btn}
            onClick={() => scrollTo("#about")}
          >
            About
          </button>
          <button
            className={landingStyles.btn}
            onClick={() => scrollTo("#portfolio")}
          >
            Portfolio
          </button>
        </div>
        <div className="social-links">
          <a
            href="https://github.com/timothyshores"
            target="_blank"
            rel="noopener noreferrer"
            className={landingStyles.btn}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/timothyshores/"
            target="_blank"
            rel="noopener noreferrer"
            className={landingStyles.btn}
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/timothymshores"
            target="_blank"
            rel="noopener noreferrer"
            className={landingStyles.btn}
          >
            Twitter
          </a>
        </div>
      </div>
    </header>
  )
}

export default Landing
