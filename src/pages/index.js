import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Landing from "../components/landing"
import Card from "../components/card"

import image1 from "../images/victor-freitas-usNAh-a1kgc-unsplash.jpg"

const Index = () => {
  return (
    <>
      <Landing />
      <Layout>
        <Head title="🏠 Home" />
        <h2>Portfolio Projects</h2>
        <hr />
        <Card
          name="Recruiter Rules"
          description="Full-Stack application using Node.js, Express.js, React, Firebase,
          Stripe, Axios, Semantic UI and more."
        />
        <Card
          name="Tweetmate"
          description="Back End RESTful API using Node.js and Express.js"
        />
        <Card
          name="Weight Lifting Journal"
          image={image1}
          handle="victorfreitas"
          credit="Victor Freitas"
          description="Front end React app that allows uses to store workout out data
          including exercises, sets, reps and weight that is stored in a Node.js
          back end API"
        />
      </Layout>
    </>
  )
}

export default Index
