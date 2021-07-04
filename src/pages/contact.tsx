import React, { FC } from 'react'

import Layout from '../components/Reusable/Layout'
import { SEO } from '../components/seo'
import ImageContainer from '../components/Reusable/ImageContainer'
import Address from '../components/Contact/Address'
import ContactForm from '../components/Contact/ContactForm'
import backgroundImage from '../images/1.jpg'

const Contact: FC = () => (
  <Layout>
    <>
      <SEO title="Contact" />
      <ImageContainer image={backgroundImage} title={'Contact'} />
      <Address />
      <ContactForm />
    </>
  </Layout>
)

export default Contact
