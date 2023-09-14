import { ReactElement } from "react";
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

import LottiePlayer from "./LottiePlayer";

export default function GridBox() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <LottiePlayer
            url="https://lottie.host/c8c5c662-da65-4b19-a22e-8f2088552156/IgbVi8dcq8.json"
            style="h-[80px]"
          />
          <br />
          <Heading
            color={"#1A202C"}
            fontWeight={"bold"}
            fontSize={{ base: "xl", sm: "lg", lg: "xl" }}
          >
            <Text fontWeight={600}>Infographics Content</Text>
          </Heading>
          <br />

          <Text textAlign="center" color={"gray.600"}>
            Unlock the power of digital marketing with our engaging
            infographics, helping you boost online visibility, reach your ideal
            audience, and grow your brand.
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <LottiePlayer
            url="    https://lottie.host/b83a29a4-57b9-4ad1-8190-e3b96031a44c/R2igONMCUE.json "
            style="h-[80px]"
          />
          <br />

          <Heading
            color={"#1A202C"}
            fontWeight={"bold"}
            fontSize={{ base: "xl", sm: "lg", lg: "xl" }}
          >
            <Text fontWeight={600}>Onsite SEO</Text>
          </Heading>
          <br />

          <Text textAlign="center" color={"gray.600"}>
            Our visually appealing content simplifies the complexities of Onsite
            SEO, empowering you to enhance your website's visibility and attract
            more visitors.
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <LottiePlayer
            url="          https://lottie.host/f6b2c58f-1f16-4a58-a343-22fa52f110d5/g0DT12sHJj.json
            "
            style="h-[80px]"
          />
          <br />

          <Heading
            as="h1"
            textAlign="center"
            color={"#1A202C"}
            fontWeight={"bold"}
            fontSize={{ base: "xl", sm: "lg", lg: "xl" }}
          >
            <Text fontWeight={600}>Awesome design</Text>
          </Heading>
          <br />

          <Text textAlign="center" color={"gray.600"}>
            Our visually stunning content showcases the power of design in
            various aspects of life, from branding to user experience.
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <LottiePlayer
            url="          https://lottie.host/956e8e61-59ea-484c-9b67-28339c4f2758/oG2TXcuYzU.json
            "
            style="h-[80px]"
          />

          <br />

          <Heading
            as="h1"
            textAlign="center"
            color={"#1A202C"}
            fontWeight={"bold"}
            fontSize={{ base: "xl", sm: "lg", lg: "xl" }}
          >
            <Text fontWeight={600}>Social Media Marketing</Text>
          </Heading>
          <br />

          <Text textAlign="center" color={"gray.600"}>
            Learn to harness social platforms' potential for audience
            connection, brand loyalty, and engagement.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
