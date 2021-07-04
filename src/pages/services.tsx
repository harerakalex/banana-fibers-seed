import React, { FC } from 'react'

import Layout from '../components/Reusable/Layout'
import { SEO } from '../components/seo'
import ImageContainer from '../components/Reusable/ImageContainer'
import ServicesContainer from '../components/Home/Services'
import backgroundImage from '../images/1.jpg'

const Services: FC = () => (
  <Layout>
    <>
      <SEO title="Services" />
      <ImageContainer image={backgroundImage} title={'Causes we are serving'} />
      <ServicesContainer />
    </>
  </Layout>
)

export default Services
