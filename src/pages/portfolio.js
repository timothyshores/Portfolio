import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Card from "../components/card"

import image1 from "../images/victor-freitas-usNAh-a1kgc-unsplash.jpg"
import image2 from "../images/robin-worrall-FPt10LXK0cg-unsplash.jpg"
import image3 from "../images/brendan-church-pKeF6Tt3c08-unsplash.jpg"

const Portfolio = () => {
  return (
    <Layout>
      <Head title="Portfolio 💻" />
      <h3 id="portfolio">Portfolio</h3>
      <Card
        name="Recruiter Rules"
        image={image3}
        handle="bdchu614"
        credit="Brendan Church"
        description="Full-Stack application using Node.js, Express.js, React, Firebase,
          Stripe, Axios, Semantic UI and more."
        github="https://github.com/labs13-recruiter-rule"
        demo="https://recruiterrules.com/"
        alt="one way traffic signs"
      />
      <Card
        name="Tweetmate"
        image={image2}
        handle="robin_rednine"
        credit="Robin Worrall"
        description="Back End RESTful API using Node.js and Express.js"
        github="https://github.com/pat-pyschographic-analysis-of-text/Backend"
        demo="https://tweetmate.netlify.com/"
        alt="people holding mobile phones"
      />
      <Card
        name="Weight Lifting Journal"
        image={image1}
        handle="victorfreitas"
        credit="Victor Freitas"
        description="Front end React app that allows uses to store workout out data
          including exercises, sets, reps and weight that is stored in a Node.js
          back end API"
        github="https://github.com/weightlifting-journal-build-week/front-end"
        demo="https://weight-lifting-journal.netlify.com/"
        alt="barbell loaded with weight plates"
      />
    </Layout>
  )
}

export default Portfolio
