import React, { FC } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

import './style.scss'

const ContactForm: FC = () => (
  <div className="contact-form-container">
    <Container>
      <h1 className="header">Talk to us</h1>
      <Form className="contact-form-container__form">
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="number" placeholder="Phone number" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control as="textarea" rows={5} placeholder="Your message..." />
        </Form.Group>

        <Button variant="success" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  </div>
)

export default ContactForm
