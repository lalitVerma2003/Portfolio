import { Box, FormControl, Input, Text, VStack, Button, Textarea, useToast } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const process=import.meta.env;
    const {register,handleSubmit,reset,formState:{errors}}=useForm();
    const toast=useToast();

    const sendEmail = (formData) => {
        emailjs
          .send(process.VITE_REACT_YOUR_SERVICE_ID, process.VITE_REACT_YOUR_TEMPLATE_ID, formData, {
            publicKey: process.VITE_REACT_YOUR_PUBLIC_KEY,
          })
          .then(
            () => {
              console.log('SUCCESS!');
              reset({user_email:"",user_name:"",message:""});
              toast({
                title: 'Message Sent',
                status: 'success',
                duration: 4000, 
                isClosable: true, 
              });
            },
            (error) => {
              console.log('FAILED...', error);
            },
          );
      };

    return (
        <Box
            w={"100%"}
            backgroundColor={"#08242f"}
            py={5}
        >
            <VStack
                w={{ sm: "100%", md: "90%", lg: "80%" }}
                m={"auto"}
                alignItems={"center"}
            >
                <Text fontSize={{ base: "2rem", md: "2.5rem" }} color={"#F2F3F4"} >Contact</Text>
                <Text fontSize={{ sm: "0,5rem", md: "1rem", lg: "1.5rem" }} textAlign={"center"} color={"#F2F3F4"} >Feel free to reach out to me for any questions or opportunities!</Text>
                <VStack
                    w={{ base: "90%",sm:"80%",md: "70%", lg: "60%" }}
                    minH={"auto"}
                    m={5}
                    backgroundColor={"#171721"}
                    borderRadius={20}
                    alignItems={"flex-start"}
                    p={5}
                    boxShadow={'0px 0px 8px 10px #0f2437'}
                >
                    <Text fontSize={{ sm: "1rem", md: "1.5rem", lg: "2rem" }} color={"#F2F3F4"} >Email me</Text>
                    <FormControl>
                        <Input placeholder='Your Email' _placeholder={{ color: '#b1b2b3', opacity: "0.6" }} border={'1px solid #b1b2b3'} p={5} my={2} color={'#F2F3F4'} {...register("user_email",{
                            required: "Email is required",
                            validate: (email)=>{
                                if(email.includes("@gmail.com"))
                                    return true;
                                return "Email must include @gmail.com";
                            }
                            })} />
                        {errors.user_email&&<Text fontSize={"1rem"} color={"red"} >* {errors.user_email.message}</Text>}
                    </FormControl>
                    <FormControl>
                        <Input placeholder='Your Name' _placeholder={{ color: '#b1b2b3', opacity: "0.6" }} border={'1px solid #b1b2b3'} p={5} my={2} color={'#F2F3F4'} {...register("user_name",{required: "Name is required"})} />
                        {errors.user_name&&<Text fontSize={"1rem"} color={"red"} >* {errors.user_name.message}</Text>}
                    </FormControl>
                    <FormControl>
                        <Textarea placeholder='Message' _placeholder={{ color: '#b1b2b3', opacity: "0.6" }} border={'1px solid #b1b2b3'} p={5} my={2} color={'#F2F3F4'} resize={"none"} rows={5} cols={10} {...register("message",{required: "Message is required"})} />
                        {errors.message&&<Text fontSize={"1rem"} color={"red"} >* {errors.message.message}</Text>}
                    </FormControl>
                    <Button
                        w={"100%"}
                        backgroundColor="#042530"
                        color={"white"}
                        _hover={{

                        }}
                        onClick={handleSubmit(sendEmail)}
                    >Send</Button>
                </VStack>
            </VStack>
        </Box>
    )
}

export default Contact
