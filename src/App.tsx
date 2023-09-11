// import React from 'react'
import Header from "./Container/Header"
import Main from './Container/Main'
import Services from './Container/Services'
import Footer from './Container/Footer'
import Testimonials from './Container/Testimonials'
import Team from './Container/Team'
import Features from './Container/Features'
import Contact from "./Container/Contact"
import TechStack from "./Container/TechStack"

const App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <Services/>
      <Features/>
      <Team/>
      <TechStack/>

      <Testimonials/>
      {/* <ContactUS/> */}
      <Contact/>

      <Footer/>
    </>
  )
}

export default App