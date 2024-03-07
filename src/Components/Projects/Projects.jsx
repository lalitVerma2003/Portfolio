import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import ProjectBox from './ProjectBox'
import { projects } from '../../data/constants';

const Projects = () => {

    return (
        <VStack
            w={"100%"}
            // minH={"100vh"}
            justifyContent={"center"}
            backgroundColor={"#090917"}
        >
            <VStack
                w={{sm:"90%",md:"90%",lg:"90%"}}
                my={5}
                // minH={"80vh"}
                // border={"2px solid white"}
            >
                <Text fontSize={"2rem"} color={"#F2F3F4"} >Projects</Text>
                <Text fontSize={{base:"1rem",md:"1.5rem"}} m={2} color={"#F2F3F4"} textAlign={"center"} >I have worked on projects based on web development.</Text>
                <VStack
                    w={{sm:"90%",md:"90%",lg:"70%"}}
                    m={2}
                    justifyContent={"space-evenly"}
                    spacing={6}
                    // border={"2px solid white"}
                >
                    {projects.map((project,idx)=>(
                        <ProjectBox key={idx} project={project} />
                    ))}
                </VStack>
            </VStack>

        </VStack>
    )
}

export default Projects
