
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
// import { ReactElement } from 'react'
// import {
//   FcAbout,
//   FcAssistant,
//   FcCollaboration,
//   FcDonate,
//   FcManager,
// } from "react-icons/fc";
import ServicesCard from "../Layout/common/ServicesCard";



export default function Services() {
  return (
    <div id="services-section">
      <Box bg= {"#EDF2F7"} p={4} py={16} id="services-section">
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl", lg: "2xl" }}
          color={"#137DC5"}
          fontWeight={"bold"}
        >
          OUR SERVICES
        </Heading>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl", lg: "4xl" }}
          fontWeight={"bold"}
        >
          Provide Awesome Services Grow Your Business
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
        "Unlock Your Business Potential with Our Full Suite of Marketing Services. We Offer Strategic Planning, Content Creation, SEO, PPC, Social Media Management, and More. Elevate Your Brand Today!"
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
       
        <ServicesCard/>
      </Container>
    </Box>
    </div>
  );
}
