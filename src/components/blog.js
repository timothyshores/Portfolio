import React from 'react'
import Layout from './layout'
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from './blog.module.scss'
import Head from './head'

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

    const { edges: blogPosts } = data.allMarkdownRemark;

    const filteredBlogPosts =
        blogPosts.filter(
            blogPost =>
                blogPost.node.frontmatter.date <= (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, 10)
        );

    const sortedBlogPosts = filteredBlogPosts.sort((a, b) => (a.node.frontmatter.date < b.node.frontmatter.date) ? 1 : -1);

    return (
        <Layout>
            <Head title="Blog" />
            <ol className={blogStyles.posts}>
                {sortedBlogPosts.map(blogPost => {
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