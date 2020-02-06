import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        # date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`

const Blog = props => {
  const { title, date } = props.data.markdownRemark.frontmatter
  const { html } = props.data.markdownRemark
  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export default Blog
