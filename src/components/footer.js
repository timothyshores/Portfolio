import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const FooterEl = styled.footer`
  margin-top: 3rem;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <FooterEl>
      <p>
        Created by {data.site.siteMetadata.author}, © {new Date().getFullYear()}
      </p>
    </FooterEl>
  )
}

export default Footer
