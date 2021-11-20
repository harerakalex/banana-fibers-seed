import React, { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Services: FC = () => (
  <div className="address-container">
    <Container>
      <Row>
        <Col>
          <FontAwesomeIcon icon={faPhoneAlt} /> +250 788 207 300
        </Col>

        <Col>
          <FontAwesomeIcon icon={faEnvelope} /> forthemorganization@gmail.com
        </Col>

        <Col>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Rubangura House 2nd Floor No 212
        </Col>
      </Row>
    </Container>
  </div>
)

export default Services
