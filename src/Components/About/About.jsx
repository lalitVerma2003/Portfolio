import { Box, VStack, Text, Button, Image, Link } from '@chakra-ui/react'
import React from 'react'
import { Bio } from '../../data/constants'

const About = () => {

    return (
        <Box
            w={"100%"}
            backgroundColor={"#090917"}
        >
            <Box
                display={"flex"}
                flexDir={{ base: "column", sm: "column", md: "row" }}
                w={{ md: "90%", lg: "80%" }}
                m={"auto"}
                p={{ sm: 5, md: 10 }}
                alignItems={"center"}
            >

                <VStack
                    w={{ sm: "80%", md: "50%" }}
                    alignItems={"flex-start"}
                    p={3}
                    m={3}
                >
                    <Text fontSize={{ base: "2rem", md: "3rem" }} color={"#F2F3F4"} >Hi, I am Lalit Verma</Text>
                    <Text fontSize={{ md: "1.5rem", lg: "2rem" }} color={"#F2F3F4"} fontWeight={"bold"} >I am a <Text color={"#74278f"} display={"inline-block"} >Full stack developer</Text></Text>
                    <Text fontSize={"1rem"} color={"#F2F3F4"} >{Bio.description}
                    </Text>
                    <Link href={Bio.resume} w={{ base: "50%", sm: "40%" }} target='_blank' color={"white"} >
                        <Button
                            w={"100%"}
                            color={"#F2F3F4"}
                            backgroundColor="hsla(271, 100%, 50%, 1)"
                            background="linear-gradient(
                            225deg,
                            hsla(271, 100%, 50%, 1) 0%,
                            hsla(294, 100%, 50%, 1) 100%
                          )"
                            borderRadius={20}
                            m={5}
                            variant="unstyled"
                        >Check Resume</Button>
                    </Link>
                </VStack>
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    w={{ sm: "70%", md: "50%" }}
                >
                    <Image src="/public/ProfilePic.jpg" fallbackSrc='https://via.placeholder.com/150' boxSize={"70%"} borderRadius={"50%"} border={'2px solid #854CE6'} objectFit={"cover"} draggable={"false"} />
                </Box>
            </Box>
        </Box>
    )
}

export default About
