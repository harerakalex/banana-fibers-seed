import React, { FC } from 'react'
import { Navbar, Container, Nav, Button, Form, Image } from 'react-bootstrap'

import './style.css'
import logo from '../../../images/gatsby-icon.png'

type Props = {
  siteTitle?: string
}
const Header: FC<Props> = () => (
  <Navbar sticky="top" expand="lg" variant="light" className="nav-bar">
    <Container>
      <Navbar.Brand href="/">
        <Image src={logo} alt="Logo" className="logo" />
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="/page-2/">Home</Nav.Link>
        <Nav.Link href="#Services">Services</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#Contact">Contact</Nav.Link>
        <Form className="d-flex">
          <Button variant="danger">Donate</Button>
        </Form>
      </Nav>
    </Container>
  </Navbar>
)

export default Header
