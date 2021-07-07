import React, { FC } from 'react'
import { Container, Row } from 'react-bootstrap'

import './style.scss'

const Mission: FC = () => (
  <div className="mission-container">
    <Container>
      <h1 className="header">About us</h1>
      <Row>
        <p className="mission__content">
          Sedac odio aliquet, fringilla odio eget, tincidunt nunc. Duis aliquet pulvinar ante tempor
          etiam lacus eros The legal definition of a charitable organization (and of charity) varies
          between countries and in some instances regions of the country. The regulation, the tax
          treatment, and the way in which charity law affects charitable organizations also vary.
        </p>
      </Row>
    </Container>
  </div>
)

export default Mission
