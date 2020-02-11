import React from "react"
import { FullPage, Slide } from "react-full-page"

import Landing from "../components/landing"
import Footer from "../components/footer"
import Portfolio from "./portfolio"
import About from "./about"

const Index = () => {
  return (
    <>
      <Landing />
      <About />
      <Portfolio />
      <Footer />
    </>
  )
}

export default Index
