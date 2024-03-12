import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'
import { skills } from '../../data/constants';

const Skills = () => {

    return (
        <Box
            w={"100%"}
            p={5}
            backgroundColor={"#1C1E27"}
        >
            <VStack
                w={{base:"100%",md:"80%"}}
                m={"auto"}
                mb={10}
            >
                <Text fontSize={"2rem"} color={"#F2F3F4"} >Skills</Text>
                <Text fontSize={{base:"1rem",md:"1.5rem"}} m={2} color={"#F2F3F4"} textAlign={"center"} >Here are some of my skills on  which I have been working on past 1 year.</Text>
                <HStack
                    w={"100%"}
                    flexWrap={"wrap"}
                    spacing={6}
                    justifyContent={"space-evenly"}
                    m={5}
                >
                    {skills.map((skill,idx)=>(
                        <Card key={idx} skill={skill} />
                    ))}
                </HStack>

            </VStack>
        </Box>
    )
}

export default Skills
