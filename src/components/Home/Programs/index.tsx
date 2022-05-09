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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad recusandae, consequatur cum sapiente nulla repellendus blanditiis soluta id nesciunt excepturi tempore sed ex inventore atque corporis repellat molestiae. Ex, quo.
              </Card.Text>
              {/* <Button variant="primary">Donate</Button> */}
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={image2} />
            <Card.Body>
              <Card.Title>Career guidance for teenagers</Card.Title>
              <Card.Text>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati cum, sapiente explicabo asperiores neque nobis temporibus officia animi quidem ex placeat expedita. Vitae corporis minus, rerum expedita aliquam hic perferendis!
              </Card.Text>
              {/* <Button variant="primary">Donate</Button> */}
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={image3} />
            <Card.Body>
              <Card.Title>Financial support</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deserunt ipsa expedita iure placeat? Aliquam iusto id tenetur ut perferendis accusantium dignissimos cumque ducimus quibusdam quidem. Tempore nisi vel ducimus.
              </Card.Text>
              {/* <Button variant="primary">Donate</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Programs
