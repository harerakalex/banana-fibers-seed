import React, { FC } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import './style.scss'
import image1 from '../../../images/2.jpeg'
import image2 from '../../../images/3.jpg'
import image3 from '../../../images/4.jpeg'

const Programs: FC = () => (
  <div className="services_container">
    <Container>
      <h1 className="header">Programs</h1>
      <Row>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Campaign against teenage pregnancies root cause mindset</Card.Title>
              <Card.Text>
                where we will be having different topics, schecks, debates, conferences,
                competitions and much more; with the aim of discussing with youth subjects in line
                with their mindsets and perceptions towards their lives circumstances, and ways the
                mindset can be controlled to give them the right effective reactions or actions
                towards those different life circumstances they face in their day to day lives.
              </Card.Text>
              <Button variant="primary">Donate</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>Career guidance for teenagers</Card.Title>
              <Card.Text>
                In this program we focus on the dreams those teenagers and youth in general have,
                and meet them at their schools( in secondary schools) and both boys and girls alike,
                because we believe pregnancy doesn't occur from the participation of the girl child
                alone, even the boy child takes part in this act.
              </Card.Text>
              <Button variant="primary">Donate</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Financial support</Card.Title>
              <Card.Text>
                In providing basic supports to poor teenage mothers, we visit them, get to
                understand their situation, collect their testimonies for the next generation
                lessons, and we give them basic needs for every day to day life
              </Card.Text>
              <Button variant="primary">Donate</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Programs
