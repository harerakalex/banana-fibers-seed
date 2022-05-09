import React, { FC } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import './style.scss'

const About: FC = () => (
  <div className="about_main-wrapper">
    <Container>
      <h1 className="header">About</h1>
      <p className="about_main-wrapper__content">
        <b>FORTHEM ORGANIZATION</b> is a nonprofit organization founded in 2021, with the main
        objective of fighting teenage pregnancies by preventing them and supporting pregnant and
        parenting teens to resolve the consequences of teenage pregnancies and save today’s youth
        and the future generations.
      </p>
    </Container>
  </div>
)

export default About
