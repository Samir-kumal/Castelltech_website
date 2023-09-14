import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { handleClick, NavLink } from "./Header";
import LottiePlayer from "./LottiePlayer";
const gradient = "linear(to-r, blue.700, teal.500)";
const hoverGradient = "linear(to-l, blue.700, teal.500)";
import { CONFETTI_DARK, CONFETTI_LIGHT } from "../lib/Theme";

export default function Main() {
  return (
    <Container
      height={{ base:"8xl",lg:"2xl"}}
      // marginBottom={{base:"2", lg:"0"}}
      maxW={"7xl"}
      marginTop={"1"}
      id="home-section"
      css={{
        backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: "fixed",
      }}
    >
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }} 
        transform={{base:"translate(0px, -50px)", lg:"translate(0px, 0px)"}}
        >
        

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

          <NavLink onClick={() => handleClick("Contact")} url={"#contact"}>
            <Button
              colorScheme={"blue"}
              width={"60"}
              borderRadius={"2xl"}
              _hover={{ bgGradient: hoverGradient }}
              bgGradient={gradient}
              transition={"5s"}
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
            transform={{base:"translate(0px, -50px)", lg:"translate(0px, -120px)"}}
            // position={"relative"}  
            // height={{base:"sm"}}
           
            display={"flex"}
            justifyContent={"center"}

          >
            <LottiePlayer

              // style={"player h-120  lg:-translate-y-28"}   
              url="https://lottie.host/7c67be8f-4a27-4765-84c1-ff113e11c960/HmYOpShR9z.json"
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
