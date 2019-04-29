import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from './blog.module.scss'

const Blog = () => {
    const data = useStaticQuery(graphql`
        query BlogQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date(formatString: "MMMM Do, YYYY")
                        },
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    const { edges: blogPosts } = data.allMarkdownRemark

    return (
        <Layout>
            <ol className={blogStyles.posts}>
                {blogPosts.map(blogPost => {
                    const { title, date } = blogPost.node.frontmatter;
                    const { slug: url } = blogPost.node.fields;

                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${url}`}>
                                <h2>{title}</h2>
                                <p>Posted On: {date}</p>
                            </Link>
                        </li>
                    )
                })}

            </ol>
        </Layout>
    )
}

export default Blog;