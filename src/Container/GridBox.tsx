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
// import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'
import Icon1 from "../assets/png/Icon1.svg";
import Icon2 from "../assets/png/Icon2.svg";
import Icon3 from "../assets/png/Icon3.svg";
import Icon4 from "../assets/png/Icon4.svg";



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
          <Image src={Icon1} alt="Market Analysis" height="80px" />
          <br />
          <Heading
            color={"#DF7D5A"}
            fontWeight={"bold"}
            fontSize={{ base: "xl", sm: "lg", lg: "xl" }}
          >
            <Text fontWeight={600}>Infographics Content</Text>
          </Heading>
          <br />

          <Text textAlign="center" color={"gray.600"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore...
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={Icon2} alt="Lead Generation" height="80px" />
          <br />

          <Heading
            color={"#DF7D5A"}
            fontWeight={"bold"}
            fontSize={{ base: "xl", sm: "lg", lg: "xl" }}
          >
            <Text fontWeight={600}>Onsite SEO</Text>
          </Heading>
          <br />

          <Text textAlign="center" color={"gray.600"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore...
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={Icon3} alt="Social Media Marketing" height="80px" />
          <br />

          <Heading
            as="h1"
            textAlign="center"
            color={"#DF7D5A"}
            fontWeight={"bold"}
            fontSize={{ base: "xl", sm: "lg", lg: "xl" }}
          >
            <Text fontWeight={600}>Awesome design</Text>
          </Heading>
          <br />

          <Text textAlign="center" color={"gray.600"}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore...
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={Icon4} alt="Social Media Marketing" height="80px" />
          <br />

          <Heading
            as="h1"
            textAlign="center"
            color={"#DF7D5A"}
            fontWeight={"bold"}
            fontSize={{ base: "xl", sm: "lg", lg: "xl" }}
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
