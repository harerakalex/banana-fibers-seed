import React, { FC } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

import './style.css'

type Props = {
  siteTitle?: string
}
const Footer: FC<Props> = () => (
  <footer className="footer">
    <Container>
      <div className="footer-nav-container">
        <Navbar expand="lg" variant="light" className="footer-nav-bar">
          <Container fluid>
            <Navbar.Brand href="/" className="navbar-brand">
              <span>Charity</span>
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="/page-2/" className="nav-link">
                <span>Home</span>
              </Nav.Link>
              <Nav.Link href="#Services" className="nav-link">
                <span>Services</span>
              </Nav.Link>
              <Nav.Link href="#About" className="nav-link">
                <span>About</span>
              </Nav.Link>
              <Nav.Link href="#Contact" className="nav-link">
                <span>Contact</span>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </Container>
  </footer>
)

export default Footer
