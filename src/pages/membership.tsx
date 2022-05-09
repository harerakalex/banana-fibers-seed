import React, { FC } from 'react'

import Layout from '../components/Reusable/Layout'
import { SEO } from '../components/seo'
import ImageContainer from '../components/Reusable/ImageContainer'
import MembershipForm from '../components/MembershipForm'
import backgroundImage from '../images/team1.jpg'

const Membership: FC = () => (
  <Layout>
    <>
      <SEO title="Membership" />
      <ImageContainer image={backgroundImage} title={'Join us'} />
      <MembershipForm />
    </>
  </Layout>
)

export default Membership
