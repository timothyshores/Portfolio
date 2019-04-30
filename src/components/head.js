import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const { title: siteTitle } = data.site.siteMetadata;

    return (
        <Helmet title={`${title} | ${siteTitle}`} />
    )
}

export default Head