import React from "react"

import Landing from "../components/landing"
import Footer from "../components/footer"
import Portfolio from "../components/portfolio"
import About from "../components/about"
import Contact from "../components/contact"

const Index = () => {
  return (
    <div atyle={{overflowX: 'hidden'}}>
      <Landing />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default Index
