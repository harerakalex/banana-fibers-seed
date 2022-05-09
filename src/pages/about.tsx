import React, { FC } from 'react'

import Layout from '../components/Reusable/Layout'
import { SEO } from '../components/seo'
import ImageContainer from '../components/Reusable/ImageContainer'
import Mission from '../components/About/Mission'
import Team from '../components/About/Team'

import backgroundImage from '../images/team1.jpg'

const About: FC = () => (
  <Layout>
    <>
      <SEO title="About" />
      <ImageContainer image={backgroundImage} title={'About'} />
      <Mission />
      <Team />
    </>
  </Layout>
)

export default About
