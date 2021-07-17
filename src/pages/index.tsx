import React, { FC } from 'react'

import Layout from '../components/Reusable/Layout'
import { SEO } from '../components/seo'
import Landing from '../components/Home/Landing'
import Programs from '../components/Home/Programs'
import About from '../components/Home/About'
import SocialMedia from '../components/Reusable/SocialMedia'
import Partners from '../components/Home/Partners'
import Membership from '../components/Home/Membership'

// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

const IndexPage: FC = () => (
  <Layout>
    <>
      <SEO title="Home" />
      <Landing />
      <Programs />
      <About />
      <Partners />
      <Membership />
      <SocialMedia />
    </>
  </Layout>
)

export default IndexPage
