import React from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Image,
  Heading,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import MarketAnaysis from "../assets/png/marketAnalysis.png";
import LeadGeneration from "../assets/png/lead.png";
import SocialMediaMarketing from "../assets/png/social_media_marketing.png";

const Feature = ({ title, text, icon }) => {
  return (
    <Box>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Box>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Box    display="flex"  flexDirection="column" justifyContent="center" alignItems = "center">
          <Image src={MarketAnaysis} alt="Market Analysis" height = "140px" />
          <br />
          <Heading
            color={"#DF7D5A"}
            fontWeight={"bold"}
            fontSize={{ base: "2xl", sm: "1xl", lg: "2xl" }}
          >
            <Text  fontWeight={600}>Market Analysis</Text>
          </Heading>
          <br />

          <Text textAlign="center" color={"gray.600"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore...
          </Text>
        </Box>
        <Box   display="flex"  flexDirection="column" justifyContent="center" alignItems = "center">
          <Image src={LeadGeneration} alt="Lead Generation"  height = "140px"  />
          <br />

          <Heading
            color={"#DF7D5A"}
            fontWeight={"bold"}
            fontSize={{ base: "2xl", sm: "1xl", lg: "2xl" }}
          >
            <Text fontWeight={600}>Lead Generation</Text>
          </Heading>
          <br />

          <Text textAlign="center" color={"gray.600"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore...
          </Text>
        </Box>
        <Box   display="flex"  flexDirection="column" justifyContent="center" alignItems = "center">
          <Image
            src={SocialMediaMarketing}
            alt="Social Media Marketing"
            height = "140px" 
          />
          <br />

          <Heading as="h1" textAlign="center"
            color={"#DF7D5A"}
            fontWeight={"bold"}
            fontSize={{ base: "2xl", sm: "1xl", lg: "2xl" }}
          >
            <Text fontWeight={600}>Social Media Marketing</Text>
          </Heading>
          <br />

          <Text textAlign="center" color={"gray.600"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore...
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
