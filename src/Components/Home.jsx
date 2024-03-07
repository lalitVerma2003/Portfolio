import React from 'react'
import Navbar from './Navbar/Navbar'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import { Element } from 'react-scroll';
import Footer from './Footer'
import { Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box
      overflowX={"hidden"}
    >
      <Navbar />
        <Element name='about' >
        <About/>
      </Element>
      <Element name='skills' >
        <Skills/>
      </Element>
      <Element name='projects' >
        <Projects/>
      </Element>
      <Element name='contact' >
        <Contact/>
      </Element>
      <Footer/>
    </Box>
  )
}

export default Home
