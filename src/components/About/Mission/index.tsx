import React, { FC } from 'react'
import { Container, Row } from 'react-bootstrap'

import './style.scss'

const Mission: FC = () => (
  <div className="mission-container">
    <Container>
      <div className="mission-container__content-wrapper">
        <h1 className="header">About us</h1>
        <Row>
          <p className="mission-container__content">
            <b>FORTHEM ORGANIZATION</b> is a nonprofit organization founded in 2021, with the main
            objective of fighting teenage pregnancies by preventing them and supporting pregnant and
            parenting teens to resolve the consequences of teenage pregnancies and save today’s
            youth and the future generations.
          </p>
        </Row>
      </div>

      <div className="mission-container__content-wrapper">
        <h1 className="header">Our Vision</h1>
        <Row>
          <p className="mission-container__content">
            To prevent teenage pregnancies by raising awareness among teenagers and the society as a
            whole on the effects and consequences of early pregnancies on youth.
          </p>
        </Row>
      </div>

      <div className="mission-container__content-wrapper">
        <h1 className="header">Our Mission</h1>
        <Row>
          <p className="mission-container__content">
            To prevent teenage pregnancies and overcoming their negative effects.
          </p>
        </Row>
      </div>

      <div className="mission-container__content-wrapper">
        <h1 className="header">Our Objectives</h1>
        <Row>
          <p className="mission-container__content">
            To educate teenagers about sexual reproductive health, To support pregnant and parenting
            teens. To advocate for teenage mothers and their children to prevent future negative
            impact. To raise awareness on prevention of teenage pregnancies by building a positive
            Mindset.
          </p>
        </Row>
      </div>
    </Container>
  </div>
)

export default Mission
