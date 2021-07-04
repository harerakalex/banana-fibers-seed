import React, { FC } from 'react'
import { Button, Container, Form, Row } from 'react-bootstrap'

import './style.scss'

const ContactForm: FC = () => (
  <div className="contact-form-container">
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="tel" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control as="textarea" placeholder="Your message..." />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  </div>
)

export default ContactForm
