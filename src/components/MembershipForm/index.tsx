import React, { ChangeEvent, FC, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

import './style.scss'

const MembershipForm: FC = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  })

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const onSubmit = () => {
    console.log(state)
  }

  return (
    <div className="membership-form-container">
      <Container>
        <h1 className="header">Become a member</h1>
        <div className="membership-form-container__form form">
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="First name"
              name="firstName"
              onChange={handleTextChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleTextChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="number"
              placeholder="Phone number"
              name="phoneNumber"
              onChange={handleTextChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleTextChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={onSubmit}>
            Register
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default MembershipForm
