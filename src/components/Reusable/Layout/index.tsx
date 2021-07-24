/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FC, ReactElement } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Header from '../Header'
import Footer from '../Footer'
import './style.css'

type Props = {
  children: ReactElement
}
const Layout: FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <div className="main-wrapper">
      <Helmet title={data.site.siteMetadata?.title || `FORTHEM`}></Helmet>
      <Header menuLinks={data.site.siteMetadata.menuLinks} />
      <main>{children}</main>
      <Footer menuLinks={data.site.siteMetadata.menuLinks} />
      {/* <footer
        style={{
          marginTop: `2rem`
        }}
      >
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </div>
  )
}

export default Layout
