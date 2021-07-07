import React, { FC } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'

import './style.scss'
import firstImage from '../../../images/1.jpg'

const Team: FC = () => (
  <div className="team-container">
    <Container>
      <h1 className="header">Team Members</h1>
      <Row>
        <Col xs={6} md={4} className="team-container__column">
          <Image src={firstImage} rounded className="team-container__image" />
          <p>John Doe</p>
          <p>CEO</p>
        </Col>
        <Col xs={6} md={4} className="team-container__column">
          <Image src={firstImage} rounded className="team-container__image" />
          <p>John Doe</p>
          <p>CEO</p>
        </Col>
        <Col xs={6} md={4} className="team-container__column">
          <Image src={firstImage} rounded className="team-container__image" />
          <p>John Doe</p>
          <p>CEO</p>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Team
