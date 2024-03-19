import React from 'react'
import { Text } from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-scroll';

const NavbarItems = () => {

  const navStyle={
    color: "#F2F3F4",
    boxSizing: "border-box",
    "&:hover": {
      color: "#259ec0",
      transition: "color 0.3s ease-in-out"
    }
  }

  return (
    <>
      <ChakraLink as={Link} to="about" smooth={true} duration={500}>
        <Text p={2} sx={navStyle}>About</Text>
      </ChakraLink>
      <ChakraLink as={Link} to="skills" smooth={true} duration={500}>
        <Text p={2} sx={navStyle} >Skills</Text>
      </ChakraLink>
      <ChakraLink as={Link} to="projects" smooth={true} duration={500}>
        <Text p={2} sx={navStyle} >Projects</Text>
      </ChakraLink>
      <ChakraLink as={Link} to="contact" smooth={true} duration={500}>
        <Text p={2} sx={navStyle} >Contact</Text>
      </ChakraLink>
    </>
  )
}

export default NavbarItems
