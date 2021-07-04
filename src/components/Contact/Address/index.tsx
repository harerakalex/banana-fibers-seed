import React, { FC } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Services: FC = () => (
  <div className="address-container">
    <Container>
      <Row>
        <Col>
          <FontAwesomeIcon icon={faPhoneAlt} /> +250 780 289 165
        </Col>

        <Col>
          <FontAwesomeIcon icon={faEnvelope} /> Hareraloston@gmail.com
        </Col>

        <Col>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Rubangura House 2nd Floor No 212
        </Col>
      </Row>
    </Container>
  </div>
)

export default Services
