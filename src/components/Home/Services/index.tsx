import React, { FC } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import './style.css'
import image1 from '../../../images/2.jpeg'
import image2 from '../../../images/3.jpg'
import image3 from '../../../images/4.jpeg'

const Services: FC = () => (
  <div className="services_main-wrapper">
    <Container>
      <h1 className="header">Services</h1>
      <Row>
        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Services
