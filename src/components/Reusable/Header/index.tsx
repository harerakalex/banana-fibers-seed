import React, { FC } from 'react'
import { Link } from 'gatsby'
import { Navbar, Container, Nav } from 'react-bootstrap'

import './style.css'

type Props = {
  siteTitle: string
}
const Header: FC<Props> = ({ siteTitle }) => (
  <Navbar fixed="top" expand="lg" variant="light" className="nav-bar">
    <Container>
      <Navbar.Brand href="#">Charity</Navbar.Brand>
      <Nav>
        <Nav.Link href="/page-2/">Home</Nav.Link>
        <Nav.Link href="#Services">Services</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#Contact">Contact</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)

export default Header
