import { Box, Button, HStack, VStack, Image, Text, Link } from '@chakra-ui/react'
import React from 'react'
import { FaGithub } from 'react-icons/fa';

const ProjectBox = ({ project }) => {

    return (
        <VStack
            w={"100%"}
            borderRadius={10}
        >
            <Box
                display={"flex"}
                flexDir={{ base: "column", sm: "row" }}
                alignItems={"center"}
                w={{base:"80%",md:"80%"}}
                p={1}
                backgroundColor={'#1C1E27'}
                borderRadius={10}
            >
                <VStack
                    w={{base:"90%",md:"50%"}}
                    justifyContent={"space-between"}
                    alignItems={"flex-start"}
                    m={{ base: 2, md: 3 }}
                >
                    <Text fontSize={{ sm: "1rem", md: "1.5rem", lg: "2rem" }} color={"#F2F3F4"} textDecoration={"underline"} >{project.title}</Text>
                    <Text fontSize={{ base: "0.8rem", md: "0.9rem", lg: "1rem" }} fontFamily={"sans-serif"} m={1} color={"#F2F3F4"} >{project.description}
                    </Text>
                    <HStack
                        flexWrap={"wrap"}
                        justifyContent={'space-evenly'}
                    >
                        {project.skills.map((skill, idx) => (
                            <Text key={idx} fontSize={{ base: "0.4rem", md: "0.6rem", lg: "0.8rem" }} backgroundColor={'#090917'} color={"#F2F3F4"} py={1} px={4} borderRadius={10} >{skill}</Text>
                        ))}
                    </HStack>
                </VStack>
                <Box
                    w={{base:"80%",md:"50%"}}
                    m={2}
                    overflow={"hidden"}
                    borderRadius={"10px 0px 0px 10px"}
                >
                    <Image src={project.image} objectFit={"cover"} _hover={{ transform: "scale(1.1)" }} transition={"transform 0.2s ease"} draggable={"false"} cursor={"pointer"} />
                </Box>
            </Box>
            <Link href={project.github} target='_blank' w={{ base: "40%", sm: "30%", md: "30%" }} >
                <Button w={"100%"} fontSize={"1.2rem"} backgroundColor="hsla(271, 100%, 50%, 1)" color={"#F2F3F4"} _hover={{
                    backgroundColor: "#b1b2b3",
                    border: "2px solid hsla(271, 100%, 50%, 1)",
                    color: "hsla(271, 100%, 50%, 1)"
                }} borderRadius={20} >Github<FaGithub style={{ marginLeft: 5 }} /></Button>
            </Link>
        </VStack>
    )
}

export default ProjectBox
