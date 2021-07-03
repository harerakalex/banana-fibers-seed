import React, { FC } from 'react'

import Layout from '../components/Reusable/Layout'
import { SEO } from '../components/seo'
import Landing from '../components/Home/Landing'
import Services from '../components/Home/Services'
import About from '../components/Home/About'

// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

const IndexPage: FC = () => (
  <Layout>
    <>
      <SEO title="Home" />
      <Landing />
      <Services />
      <About />
    </>
  </Layout>
)

export default IndexPage
