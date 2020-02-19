import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import styled from "styled-components"

const H3 = styled.h3`
  margin-top: 35px;
`

const About = () => {
  return (
    <Layout>
      <Head title="About 🤷‍♂️" />
      <H3 id="about">About</H3>
      <p>
        Timothy Shores is a full-time full stack web development student during
        the day and a part-time Team Lead at Lambda School.
      </p>
    </Layout>
  )
}

export default About
