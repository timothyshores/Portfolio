module.exports = {
    siteMetadata: {
        title: `Gatsby Bootcamp Tutorial`,
        author: `Timothy Shores`
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`
    ]
}