import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"

const Header = () => {
  return (
    <StaticQuery 
      query={graphql`
      query {
        wpgraphql{
          generalSettings { 
                title 
              }
          menu(id: "dGVybToy") {
            menuItems {
              edges {
                node {
                  label
                }
              }
            }
          }
        }
      }
      `}
      render={data => (
        <div id="header">
        <div>
          <div id="logo">
            <h1>
              <Link to="/">
                {data.wpgraphql.generalSettings.title}
              </Link>
            </h1>
          </div>
          <nav id="nav">
            <ul>
              {data.wpgraphql.menu.menuItems.edges.map(({ node }) => {
                return (
                  <li className={(node.label.toLowerCase() === 'download' ? 'current_page_item' : '')}>
                    <Link to={`/${node.label.toLowerCase()}`}>
                      {node.label}
                    </Link>
                  </li>
              )})}
              <li>
                <a href='http://twitter.com/reactforums' target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div> 
      )}
    />
  )
}

export default Header
