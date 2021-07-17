import React, { FC } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'

import './style.scss'
import firstImage from '../../images/3.jpg'

const Portfolio: FC = () => (
  <div className="portfolio-container">
    <Container>
      <h1 className="header">Our work</h1>
      <Row className="portfolio-container__card mt-4 mb-4">
        <Col xs={6} md={6} className="portfolio-container__column">
          <Image src={firstImage} fluid className="portfolio-container__image" />
        </Col>
        <Col xs={6} md={6} className="portfolio-container__column">
          <div className="mt-4 mb-4 ml-3 mr=3">
            <h3>John Doe</h3>
            <p className="portfolio-container__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero possimus ad minima
              maiores laboriosam consequatur temporibus ullam amet fugiat deserunt pariatur nemo hic
              dignissimos eum ipsum, quis perferendis repudiandae? Ratione.
            </p>
            <a className="px-4 py-3 my-4 rounded portfolio-container__button">Visit work</a>
          </div>
        </Col>
      </Row>

      <Row className="portfolio-container__card mt-5 mb-5">
        <Col xs={6} md={6} className="portfolio-container__column">
          <Image src={firstImage} fluid className="portfolio-container__image" />
        </Col>
        <Col xs={6} md={6} className="portfolio-container__column">
          <div className="mt-4 mb-4 ml-3 mr=3">
            <h3>John Doe</h3>
            <p className="portfolio-container__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero possimus ad minima
              maiores laboriosam consequatur temporibus ullam amet fugiat deserunt pariatur nemo hic
              dignissimos eum ipsum, quis perferendis repudiandae? Ratione.
            </p>
            <a className="px-4 py-3 my-4 rounded portfolio-container__button">Visit work</a>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Portfolio
