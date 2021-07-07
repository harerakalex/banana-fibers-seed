import React, { FC, useState, useEffect } from 'react'
import { Navbar, Container, Nav, Button, Form, Image } from 'react-bootstrap'

import './style.scss'
import logo from '../../../images/gatsby-icon.png'

type Props = {
  siteTitle?: string
}
const Header: FC<Props> = () => {
  const [activePage, setActivePage] = useState<string>('/')

  useEffect(() => {
    const pathname = window.location.pathname
    setActivePage(pathname)
  }, [])

  return (
    <Navbar sticky="top" expand="lg" variant="light" className="nav-bar">
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} alt="Logo" className="nav-bar__logo" />
        </Navbar.Brand>
        <Nav activeKey={activePage}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/services/">Services</Nav.Link>
          <Nav.Link href="/About/">About</Nav.Link>
          <Nav.Link href="/contact/">Contact</Nav.Link>
          <Form className="d-flex">
            <Button variant="danger">Donate</Button>
          </Form>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
