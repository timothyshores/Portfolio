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
        Full-time full stack web development student with experience in
        front-end development with React and back-end development with Node.js
        and Express and part-time Team Lead at Lambda School at night and on
        weekends. Passionate about learning new technologies, breaking down
        complex problems and learning from other developers. Over 6 years of
        experience in entrepreneurship, marketing, advertising, graphic design
        and an academic background in mathematics and economics.
      </p>
    </Layout>
  )
}

export default About
