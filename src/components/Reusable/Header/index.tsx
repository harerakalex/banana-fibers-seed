import React, { FC, useState, useEffect } from 'react'
import { Navbar, Container, Image } from 'react-bootstrap'
import { Link } from 'gatsby'
import classNames from 'classnames'

import './style.scss'
import logo from '../../../images/logo.png'

export interface ILink {
  name: string
  link: string
}
type Props = {
  menuLinks?: ILink[]
}
const Header: FC<Props> = props => {
  const { menuLinks } = props
  const menus = menuLinks?.filter(link => link.name != 'membership')
  const [activePage, setActivePage] = useState<string>('/')

  useEffect(() => {
    const pathname = window.location.pathname
    setActivePage(pathname)
  }, [])

  return (
    <Navbar sticky="top" expand="lg" variant="light" className="nav-bar">
      <Container>
        <Link to="/" className="navbar-brand">
          <Image src={logo} alt="Logo" className="nav-bar__logo" />
        </Link>

        <ul className="nav nav-bar__links-list">
          {menus &&
            menus.map(link => (
              <li key={link.name} className="nav-item nav-bar__nav-item">
                <Link
                  className={classNames({
                    'nav-link nav-bar__nav-link': true,
                    'nav-bar__activeClass': link.link === activePage
                  })}
                  to={link.link}
                >
                  {link.name}
                </Link>
              </li>
            ))}
        </ul>
      </Container>
    </Navbar>
  )
}

export default Header
