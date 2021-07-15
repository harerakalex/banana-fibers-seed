import React, { FC } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

import './style.scss'
import logo from '../../../images/gatsby-icon.png'

const Partners: FC = () => (
  <section className="partners-container">
    <Container>
      <h1 className="header">Our Partners</h1>
      <Row className="partners-container__partner-row">
        <Col md={6} className="partners-container__icon-wrapper">
          <a
            href="https://www.facebook.com/harera.kalex/"
            target="_blank"
            className="partners-container__facabook"
          >
            <Image src={logo} alt="Logo" className="partners-container__partner-image" />
          </a>
          <a
            href="https://www.facebook.com/harera.kalex/"
            target="_blank"
            className="partners-container__twitter"
          >
            <Image src={logo} alt="Logo" className="partners-container__partner-image" />
          </a>
          <a
            href="https://www.facebook.com/harera.kalex/"
            target="_blank"
            className="partners-container__instagram"
          >
            <Image src={logo} alt="Logo" className="partners-container__partner-image" />
          </a>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Partners
