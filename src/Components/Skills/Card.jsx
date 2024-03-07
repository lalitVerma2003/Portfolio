import { Box, Text, VStack, HStack } from '@chakra-ui/react'
import React from 'react'
import SkillBox from './SkillBox.jsx';

const Card = ({skill}) => {

  return (
    <VStack
        alignItems={"center"}
        w={{sm:"70%",md:"70%",lg:"45%"}}
        // minH={"40vh"}
        border={'1px solid #854CE6'}
        borderRadius={20}
        backgroundColor={"#101725"}
        boxShadow={'0px 0px 8px 0px #854CE6'}
    >
        <Text fontSize={{base:"1.5rem",md:"2rem"}} p={1} color={"#F2F3F4"} >{skill.title}</Text>
        <HStack
            w={"80%"}
            // minH={"30vh"}
            mb={5}
            flexWrap={"wrap"}
            justifyContent={"space-evenly"}
            // spacing={6}
            // border={"2px solid white"}
        >
            {skill.skills.map((skill,idx)=>(
                <SkillBox key={idx} skill={skill} />
            ))}
        </HStack>
    </VStack>
  )
}

export default Card
