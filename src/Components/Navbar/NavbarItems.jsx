import React from 'react'
import { HStack, Text } from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-scroll';

const NavbarItems = () => {

  return (
    <>
      <ChakraLink as={Link} to="about" smooth={true} duration={500}>
        <Text color={"#F2F3F4"}  >About</Text>
      </ChakraLink>
      <ChakraLink as={Link} to="skills" smooth={true} duration={500}>
        <Text color={"#F2F3F4"}  >Skills</Text>
      </ChakraLink>
      <ChakraLink as={Link} to="projects" smooth={true} duration={500}>
        <Text color={"#F2F3F4"}  >Projects</Text>
      </ChakraLink>
      <ChakraLink as={Link} to="contact" smooth={true} duration={500}>
        <Text color={"#F2F3F4"}  >Contact</Text>
      </ChakraLink>
    </>
  )
}

export default NavbarItems
