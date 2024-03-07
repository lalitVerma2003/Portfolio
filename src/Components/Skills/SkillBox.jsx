import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const SkillBox = ({skill}) => {

  return (
    <Flex
        align={"center"}
        // minW={"30%"}
        px={2}
        my={1}
        border={"1px solid #81858c"}
        borderRadius={10}
        transition={"transform 0.2s"}
        cursor={"pointer"}
        _hover={{
          transform: 'scale(1.1)'
        }}
    >
        <Image src={skill.image} display={"flex"} boxSize={5} />
        <Text fontSize={{base:"1rem",md:"1.5rem"}} m={2} color={"#F2F3F4"} >{skill.name}</Text>
    </Flex>
  )
}

export default SkillBox;