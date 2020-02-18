import React from "react"
// eslint-disable-next-line
// import Header from "./header"
import "../styles/index.scss"

import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  max-width: 750px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  min-height: 1vh;
`

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Layout = ({children}) => {
  return (
    <Container>
      <Content>
        {/* eslint-disable-next-line */}
        {/* <Header /> */}
        {children}
      </Content>
    </Container>
  )
}

export default Layout
