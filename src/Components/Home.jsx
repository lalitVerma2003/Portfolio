import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import About from './About/About'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import { Element } from 'react-scroll';
import Footer from './Footer'
import { Box, Button, Text } from '@chakra-ui/react'
import { IoIosArrowUp } from 'react-icons/io';

const Home = () => {

  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const handleDisplay = () => {
      window.pageYOffset > 400 ? setDisplay(true) : setDisplay(false);
    }
    window.addEventListener("scroll", handleDisplay);
    return () => {
      window.removeEventListener("scroll", handleDisplay);
    }
  })

  return (
    <>
      <Box
        position={"relative"}
        overflowX={"hidden"}
      >
        <Navbar />
        <Element name='about' >
          <About />
        </Element>
        <Box
          w={"100%"}
          bgGradient="linear(to-b, #1c1c27, #0c222d)"
        >
          <Element name='skills' >
            <Skills />
          </Element>
          <Element name='projects' >
            <Projects />
          </Element>
        </Box>
        <Element name='contact' >
          <Contact />
        </Element>
        <Footer />
      </Box>
      <Button
        display={display ? "flex" : "none"}
        position={"fixed"}
        bottom={{ base: "3%", lg: "5%" }}
        right={{ base: "2%", md: "3%", lg: "5%" }}
        zIndex={9}
        border={"2px solid white"}
        borderRadius={"50%"}
        onClick={() => window.scrollTo({ top: "0px", behavior: "smooth" })}
      ><IoIosArrowUp size={15} />
      </Button>
    </>
  )
}

export default Home
