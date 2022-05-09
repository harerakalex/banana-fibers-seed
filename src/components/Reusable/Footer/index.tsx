import React, { FC } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'gatsby'

import './style.scss'
import { ILink } from '../Header'

type Props = {
  menuLinks?: ILink[]
}
const Footer: FC<Props> = props => {
  const { menuLinks } = props

  return (
    <footer className="footer">
      <Container>
        <div className="footer__nav-container">
          <Navbar expand="lg" variant="light" className="footer__nav-bar">
            <Container fluid>
              <Link to="/" className="navbar-brand footer__navbar-brand">
                <span>BANANA FIBRE SEEDBAG</span>
              </Link>
              <ul className="nav footer__links-list">
                {menuLinks &&
                  menuLinks.map(link => (
                    <li key={link.name} className="nav-item footer__nav-item">
                      <Link className="nav-link footer__nav-link" to={link.link}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </Container>
          </Navbar>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
