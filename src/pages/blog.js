import React from 'react'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from "gatsby"

const Blog = () => {
    const data = useStaticQuery(graphql`
        query BlogQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter 
                        {
                            title
                            date(formatString: "MMMM Do, YYYY")
                        }
                    }
                }
            }
        }
    `)

    const { edges: blogPosts } = data.allMarkdownRemark

    return (
        <Layout>
            <h3>Blog</h3>
            <p>This page will display a list of blog posts</p>
            <ol>
                {blogPosts.map(blogPost => {
                    const { title, date } = blogPost.node.frontmatter;
                    return (
                        <li>
                            <h2>{title}</h2>
                            <p>Posted On: {date}</p>
                        </li>
                    )
                })}

            </ol>
        </Layout>
    )
}

export default Blog;