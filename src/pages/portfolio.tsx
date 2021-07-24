import React, { FC } from 'react'

import Layout from '../components/Reusable/Layout'
import { SEO } from '../components/seo'
import ImageContainer from '../components/Reusable/ImageContainer'
import PortfolioContainer from '../components/Portfolio'
import backgroundImage from '../images/1.jpg'

const Portfolio: FC = () => (
  <Layout>
    <>
      <SEO title="PortFolio" />
      <ImageContainer image={backgroundImage} title={'What we are doing'} />
      <PortfolioContainer />
    </>
  </Layout>
)

export default Portfolio
