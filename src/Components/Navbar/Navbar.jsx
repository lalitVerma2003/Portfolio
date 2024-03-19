import { Button, HStack, IconButton, Text, VStack, useDisclosure, Link as ChakraLink } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-scroll';
import { Bio } from '../../data/constants';
import NavbarItems from './NavbarItems';
import { FaBars } from 'react-icons/fa';
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'


const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const handleWidth = () => {
            if (window.innerWidth >= 768)
                onClose();
        }
        window.addEventListener("resize", handleWidth);
        return () => {
            window.removeEventListener("resize", handleWidth);
        }
    })

    return (
        <HStack
            w={"100%"}
            p={2}
            justifyContent={{ base: "space-between", md: "space-evenly" }}
            backgroundColor={"#042530"}
        >
            <Text fontSize={"2rem"} color={"#F2F3F4"} display={{ base: "none", md: "flex" }} >Portfolio</Text>
            <HStack
                display={{ base: "none", md: "flex" }}
                w={{ md: "50%", lg: "40%" }}
                m={3}
                justifyContent={"space-evenly"}
            >
                <NavbarItems />
            </HStack>
            <IconButton display={{ base: "flex", md: "none" }} onClick={onOpen} ><FaBars /></IconButton>
            <ChakraLink href={`${Bio.github}`} target='_blank' style={{textDecoration:"none"}} >
                <Button
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    backgroundColor={"#2f95b4"}
                    borderRadius={20}
                    p={5}
                    variant={"unstyled"}
                ><Text color={"#F2F3F4"} textAlign={"center"} >Github Profile</Text></Button>
            </ChakraLink>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color={"#F2F3F4"} />
                    <DrawerBody
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        backgroundColor={"#090917"}
                    >
                        <VStack
                            w={"100%"}
                            h={"40vh"}
                            justifyContent={"space-evenly"}
                        >
                            <ChakraLink as={Link} to="about" smooth={true} duration={500} onClick={onClose}>
                                <Text color={"#F2F3F4"}  >About</Text>
                            </ChakraLink>
                            <ChakraLink as={Link} to="skills" smooth={true} duration={500} onClick={onClose}>
                                <Text color={"#F2F3F4"}  >Skills</Text>
                            </ChakraLink>
                            <ChakraLink as={Link} to="projects" smooth={true} duration={500} onClick={onClose}>
                                <Text color={"#F2F3F4"}  >Projects</Text>
                            </ChakraLink>
                            <ChakraLink as={Link} to="contact" smooth={true} duration={500} onClick={onClose}>
                                <Text color={"#F2F3F4"}  >Contact</Text>
                            </ChakraLink>
                        </VStack>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>

        </HStack>
    )
}

export default Navbar;