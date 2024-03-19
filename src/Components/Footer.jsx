import { HStack, Image, Link, Text, Tooltip, VStack, Button } from '@chakra-ui/react'
import React from 'react'
import NavbarItems from './Navbar/NavbarItems'
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {

    return (
        <VStack
            w={"100%"}
            backgroundColor={"#1c1c27"}
        >
            <VStack
                w={{ base: "100%", md: "70%" }}
                m={{base:2,md:5}}
            >
                <HStack
                    w={{ base: "100%", sm: "80%", md: "60%" }}
                    justifyContent={"space-evenly"}
                    flexWrap={"wrap"}
                    m={2}
                >
                    <NavbarItems />
                </HStack>
                <HStack
                    w={{ base: "60%", sm: "40%", md: "30%" }}
                    justifyContent={"space-evenly"}
                >
                    <Tooltip label="geeksforgeeks" hasArrow >
                        <Link color={"#F2F3F4"} href='https://auth.geeksforgeeks.org/user/lalitver9yav' target="_blank"  >
                            <Image src='/GFGIcon.png' alt='icon' boxSize={10} />
                        </Link>
                    </Tooltip>
                    <Tooltip label="leetcode" hasArrow >
                        <Link color={"#F2F3F4"} href='https://leetcode.com/Lalitverma/' target='_blank' >
                            <Image src='/LeetcodeIcon.png' alt='icon' boxSize={8} />
                        </Link>
                    </Tooltip>
                    <Tooltip label="linkedin" target="_blank" hasArrow arrowSize={10} >
                        <Link href='https://www.linkedin.com/in/lalit-verma-128505227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ' target='_blank' color={"#F2F3F4"} >
                            <FaLinkedin size={30} />
                        </Link>
                    </Tooltip>
                </HStack>
                <Text color={"#F2F3F4"} >&copy; 2024 Lalit Verma.All rights reserved</Text>
            </VStack>
        </VStack>
    )
}

export default Footer
