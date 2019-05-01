import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const Blog = () => {
    const data = useStaticQuery(graphql`
        query BlogQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        },
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    const { edges: blogPosts } = data.allMarkdownRemark
    const filteredBlogPosts =
        blogPosts.filter(
            blogPost =>
                blogPost.node.frontmatter.date <= new Date().toISOString().substring(0, 10)
        )

    return (
        <Layout>
            <Head title="Blog" />
            <ol className={blogStyles.posts}>
                {filteredBlogPosts.map(blogPost => {
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
                }).reverse()}
            </ol>
        </Layout>
    )
}

export default Blog;