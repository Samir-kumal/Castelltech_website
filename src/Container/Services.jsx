"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// import { ReactElement } from 'react'
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
import CardGridLayout from "../Layout/CardGridLayout";

// interface CardProps {
//   heading: string
//   description: string
//   icon: ReactElement
//   href: string
// }

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function Services() {
  return (
    <Box bg= {"#f7f4f7"} p={4} py={16}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading
          fontSize={{ base: "2xl", sm: "4xl", lg: "2xl" }}
          color={"#DF7D5A"}
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        {/* <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Box
            // w={"800px"}
            bg="tomato"
            //   heading={'Market Analysis'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            }
            href={"#"}
          >
              <Card
            heading={"Market Analysis"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            }
            href={"#"}
          />
          </Box>
        
          <Box
            // w={"800px"}
            bg="tomato"
            //   heading={'Market Analysis'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            }
            href={"#"}
          >
              <Card
            heading={"Market Analysis"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            }
            href={"#"}
          />
          </Box>
          <Box
            // w={"800px"}
            bg="tomato"
            //   heading={'Market Analysis'}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            }
            href={"#"}
          >
              <Card
            heading={"Market Analysis"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            }
            href={"#"}
          />
          </Box>
        </Flex> */}
        <CardGridLayout/>
      </Container>
    </Box>
  );
}
