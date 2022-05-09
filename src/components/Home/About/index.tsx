import React, { FC } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import './style.scss'

const About: FC = () => (
  <div className="about_main-wrapper">
    <Container>
      <h1 className="header">About</h1>
      <p className="about_main-wrapper__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, doloremque? Velit, possimus sed? Nam vel ad facere, labore illum distinctio iusto delectus, in culpa repellat porro ullam cupiditate amet provident?
      </p>
    </Container>
  </div>
)

export default About
