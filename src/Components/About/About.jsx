import { Box, VStack, Text, Button, Image, Link } from '@chakra-ui/react'
import React from 'react'
import { Bio } from '../../data/constants';

const About = () => {

    return (
        <Box
            w={"100%"}
            backgroundColor={"#042530"}
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
                    <Text fontSize={{ md: "1.5rem", lg: "2rem" }} color={"#F2F3F4"} fontWeight={"bold"} >I am a <Text color={"#339ec0"} display={"inline-block"} >Full stack developer</Text></Text>
                    <Text fontSize={"1rem"} color={"#F2F3F4"} >{Bio.description}
                    </Text>
                    <Link href={Bio.resume} w={{ base: "50%", sm: "40%" }} target='_blank' color={"white"} >
                        <Button
                            w={"100%"}
                            color={"#F2F3F4"}
                            backgroundColor={"#2f95b4"}
                            borderRadius={20}
                            m={5}
                            variant="unstyled"
                        >View Resume</Button>
                    </Link>
                </VStack>
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    w={{ sm: "70%", md: "50%" }}
                >
                    <Image src="/public/ProfilePic.jpg" alt='Image not found' fallbackSrc='https://via.placeholder.com/150' boxSize={"70%"} borderRadius={"50%"} border={'2px solid #339ec0'} objectFit={"cover"} draggable={"false"} />
                </Box>
            </Box>
        </Box>
    )
}

export default About
