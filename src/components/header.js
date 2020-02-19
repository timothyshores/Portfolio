import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

import styled from "styled-components"

const HeaderEl = styled.div`
  padding: 1rem 0 2rem;
  display: flex;
  justify-content: center;
`

const NavList = styled.div`
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;
  padding: 0 0 0.75rem;
`

const Header = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <HeaderEl>
        <h1>
          <Link className={headerStyles.title} to="/">
            {" "}
            {data.site.siteMetadata.title}
          </Link>
        </h1>
      </HeaderEl>
      <nav>
        <NavList>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/about"
            >
              {" "}
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/portfolio"
            >
              {" "}
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              partiallyActive={true}
              to="/blog"
            >
              {" "}
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/contact"
            >
              {" "}
              Contact
            </Link>
          </li>
        </NavList>
      </nav>
    </div>
  )
}

export default Header
