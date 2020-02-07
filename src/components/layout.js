import React from "react"
// eslint-disable-next-line
// import Header from "./header"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        {/* eslint-disable-next-line */}
        {/* <Header /> */}
        {props.children}
      </div>
    </div>
  )
}

export default Layout
