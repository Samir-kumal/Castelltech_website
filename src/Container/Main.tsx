import Background from "../assets/png/check.svg";
import { ReactSVG } from "react-svg";

// import Background from "../assets/png/background.gif";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  HStack,
  Icon,
  //   Icon,
  // IconButton,
  // createIcon,
  //   IconProps,
  //   useColorModeValue,
} from "@chakra-ui/react";
import { handleClick, NavLink } from "./Header";
import LottiePlayer from "./LottiePlayer";
const gradient = "linear(to-r, blue.700, teal.500)";
const hoverGradient = "linear(to-l, blue.700, teal.500)";

export default function Main() {
  return (
    <Container maxW={"7xl"} id="home-section">
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text as={"span"} color={"#0C0C30"} fontWeight={700}>
              Grow With Us
            </Text>
          </Heading>
          <Text
            transform="translateY(-30px)"
            as={"span"}
            color={"#0C0C30"}
            fontSize={{ base: "2xl", sm: "2xl", lg: "4xl" }}
            fontWeight={600}
          >
            Elevating Nepal's IT Sector
          </Text>

          <Text color={"gray.500"} transform="translateY(-30px)">
            Join our innovation-driven IT revolution. We prioritize quality,
            global reach, sustainability, and customer satisfaction. Together,
            we're shaping a prosperous digital future for Nepal.
          </Text>
          {/* <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.500' }}>
                <NavLink onClick= {()=>handleClick("Contact")} url = "#contact">
                  Get Started
                </NavLink>
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
            >
              How It Works
            </Button>
          </Stack> */}
          <NavLink onClick={() => handleClick("Contact")} url={"#contact"}>
            <Button
              colorScheme={"blue"}
              width={"60"}
              borderRadius={"2xl"}
              _hover={{ bgGradient: hoverGradient }}
              bgGradient={gradient}
            >
              <Flex align="center">
                <a href="#contact-section"></a>
                Join Us
                {/* </NavLink> */}
              </Flex>
            </Button>
          </NavLink>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
          transform={""}
            position={"relative"}
            height={"full"}
            width={"full"}
            overflow={"hidden"}
          >
            {/* <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={Background}
            /> */}
            <LottiePlayer />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

// const Blob = (props) => {
//   return (
//     <Icon
//       width={'100%'}
//       viewBox="0 0 578 440"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}>
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
//         fill="currentColor"
//       />
//     </Icon>
//   )
// }
