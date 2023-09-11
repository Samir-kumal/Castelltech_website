import React from 'react'

import {
    Box,
    // Button,
    Container,
    // Flex,
    Heading,
    // Icon,
    Stack,
    Text,
    // useColorModeValue,
  } from "@chakra-ui/react";
import CarouselLayout from '../Layout/carousel/CarouselLayout';
const TechStack = () => {
  return (
    <Box bg= {"#EDF2F7"} p={4} py={16} id="services-section">
    <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
      <Heading
        fontSize={{ base: "2xl", sm: "4xl", lg: "2xl" }}
        color={"#137DC5"}
        fontWeight={"bold"}
      >
        OUR TECH STACK
      </Heading>
     
      
    </Stack>

    <Container maxW={"5xl"} mt={12}>
     <CarouselLayout/>
    </Container>
  </Box>
  )
}

export default TechStack