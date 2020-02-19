import React from "react"
import Layout from "./layout"
import Head from "./head"
import styled from "styled-components"

const H2 = styled.h2`
  margin-top: 35px;
`

const About = () => {
  return (
    <Layout>
      <Head title="About 🤷‍♂️" />
      <H2 id="about">About</H2>
      <p>
        Timothy Shores is a full-time full stack web development student during
        the day and a part-time Team Lead at Lambda School.
      </p>
    </Layout>
  )
}

export default About
