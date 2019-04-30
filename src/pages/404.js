import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const page404 = () => {
    return (
        <Layout>
            <Head title="404" />
            <h1>404 Page Not Found</h1>
            <p><Link to="/">Home</Link></p>
        </Layout>
    )
}

export default page404