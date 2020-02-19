/* eslint-disable */
import React from "react"
import Layout from "./layout"
import Head from "./head"

import styled from "styled-components"

const A = styled.a`
  text-decoration: none;
  color: #333;
`

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h2>Contact</h2>
      <p>
        Email:{" "}
        <A
          href="mailto:&#116;&#105;&#109;&#111;&#116;&#104;&#121;&#109;&#115;&#104;&#111;&#114;&#101;&#115;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;?subject=Portfolio%20Contact&body=Hello Timothy, I was looking at your website and "
          target="_top"
        >
          &#116;&#105;&#109;&#111;&#116;&#104;&#121;&#109;&#115;&#104;&#111;&#114;&#101;&#115;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;
        </A>
      </p>
    </Layout>
  )
}

export default Contact
