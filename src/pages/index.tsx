import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Reusable/Layout'
import { SEO } from '../components/seo'

import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
  <Layout>
    <>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </>
  </Layout>
)

export default IndexPage
