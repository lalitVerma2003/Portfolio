import { Box, FormControl, Input, Text, VStack, Button, Textarea } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {

    return (
        <Box
            w={"100%"}
            // minH={"50vh"}
            backgroundColor={"#1C1E27"}
            py={5}
        //     background={`linear-gradient(
        //     38.73deg,
        //     rgba(204, 0, 187, 0.15) 0%,
        //     rgba(201, 32, 184, 0) 50%
        //   ),
        //   linear-gradient(
        //     141.27deg,
        //     rgba(0, 70, 209, 0) 50%,
        //     rgba(0, 70, 209, 0.15) 100%
        //   )`}
        >
            <VStack
                w={{ sm: "100%", md: "90%", lg: "80%" }}
                m={"auto"}
                // p={10}
                alignItems={"center"}
                // border={"1px solid white"}
            >
                <Text fontSize={{ base: "2rem", md: "2.5rem" }} color={"#F2F3F4"} >Contact</Text>
                <Text fontSize={{ sm: "0,5rem", md: "1rem", lg: "1.5rem" }} textAlign={"center"} color={"#F2F3F4"} >Feel free to reach out to me for any questions or opportunities!</Text>
                <VStack
                    w={{ base: "90%",sm:"80%",md: "70%", lg: "60%" }}
                    minH={"auto"}
                    m={5}
                    backgroundColor={"#090917"}
                    borderRadius={20}
                    alignItems={"flex-start"}
                    p={5}
                    // border={"2px solid white"}
                >
                    <Text fontSize={{ sm: "1rem", md: "1.5rem", lg: "2rem" }} color={"#F2F3F4"} >Email me</Text>
                    <FormControl>
                        <Input placeholder='Your Email' _placeholder={{ color: '#b1b2b3', opacity: "0.6" }} border={'1px solid #b1b2b3'} p={5} my={2} color={'#F2F3F4'} />
                    </FormControl>
                    <FormControl>
                        <Input placeholder='Your Name' _placeholder={{ color: '#b1b2b3', opacity: "0.6" }} border={'1px solid #b1b2b3'} p={5} my={2} color={'#F2F3F4'} />
                    </FormControl>
                    <FormControl>
                        <Input placeholder='Subject' _placeholder={{ color: '#b1b2b3', opacity: "0.6" }} border={'1px solid #b1b2b3'} p={5} my={2} color={'#F2F3F4'} />
                    </FormControl>
                    <FormControl>
                        <Textarea placeholder='Message' _placeholder={{ color: '#b1b2b3', opacity: "0.6" }} border={'1px solid #b1b2b3'} p={5} my={2} color={'#F2F3F4'} resize={"none"} rows={5} cols={10} />
                    </FormControl>
                    <Button
                        w={"100%"}
                        backgroundColor="hsla(271, 100%, 50%, 1)"
                        background="linear-gradient(
                    225deg,
                    hsla(271, 100%, 50%, 1) 0%,
                    hsla(294, 100%, 50%, 1) 100%
                  )"
                        _hover={{

                        }}
                    >Send</Button>
                </VStack>
            </VStack>
        </Box>
    )
}

export default Contact
