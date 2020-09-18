import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import '../../assets/css/main.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div className="homepage is-preload">
      <div id="page-wrapper">
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    </div>
    </>
  )
}

export default Layout
