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
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-relative-images`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        }
    ]
}