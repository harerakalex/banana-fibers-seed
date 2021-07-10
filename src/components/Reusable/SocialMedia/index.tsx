import React, { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

import './style.scss'

const SocialMedia: FC = () => (
  <section className="social-media-container">
    <Container>
      <Row>
        <Col md={8}>
          <span className="social-media-container__title">
            Together we are stronger. Join the conversation.
          </span>
        </Col>
        <Col md={4} className="social-media-container__icon-wrapper">
          <a
            href="https://www.facebook.com/harera.kalex/"
            target="_blank"
            className="social-media-container__facabook"
          >
            <FaFacebook
              onClick={() => console.log('hello')}
              className="social-media-container__icon"
            />
          </a>
          <a
            href="https://www.facebook.com/harera.kalex/"
            target="_blank"
            className="social-media-container__twitter"
          >
            <FaTwitter className="social-media-container__icon" />
          </a>
          <a
            href="https://www.facebook.com/harera.kalex/"
            target="_blank"
            className="social-media-container__instagram"
          >
            <FaInstagram className="social-media-container__icon" />
          </a>
        </Col>
      </Row>
    </Container>
  </section>
)

export default SocialMedia
