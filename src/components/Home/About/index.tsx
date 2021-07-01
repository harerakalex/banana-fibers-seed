import React, { FC } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import './style.css'

const About: FC = () => (
  <div className="about_main-wrapper">
    <Container>
      <h1 className="header">About</h1>
      <p className="about-content">
        Sedac odio aliquet, fringilla odio eget, tincidunt nunc. Duis aliquet pulvinar ante tempor
        etiam lacus eros The legal definition of a charitable organization (and of charity) varies
        between countries and in some instances regions of the country. The regulation, the tax
        treatment, and the way in which charity law affects charitable organizations also vary.
      </p>
    </Container>
  </div>
)

export default About
