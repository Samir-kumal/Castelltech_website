import { ReactNode } from "react";
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
// import { ReactNode } from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { BiMailSend } from "react-icons/bi";
import LOGO from "../assets/ICONS/LOGO";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      width={"full"}
    >
      <Container as={Stack} maxW={"7xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <LOGO />
            </Box>
            <Text fontSize={"sm"}>
              © 2023 Castelltech Pvt Ltd. All rights reserved
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Quick Links</ListHeader>
            <Box as="a" href={"#"}>
              About us
            </Box>

            <Box as="a" href={"#"}>
              Testimonials
            </Box>

            <Link to={"privacy"}>Privacy Policy</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Contact us</ListHeader>
            <Box as="a" href={"#"}>
              Sinamangal, Kathmandu
            </Box>
            <Box as="a" href={"#"}>
              +977 9828225659
            </Box>
            <Box as="a" href={"#contact"}>
              +977 9845829770
            </Box>

            <Box as="a" href={"#"}>
              info@castelltech.com
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("blue.400", "blue.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "blue.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"Instagram"}
                href={"https://www.instagram.com"}
              >
                <FaInstagram />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={"https://www.facebook.com"}
              >
                <FaFacebook />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
