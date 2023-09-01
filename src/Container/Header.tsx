import { FaArrowRight } from "react-icons/fa";
import { CSSObject } from "@emotion/react";
import {
  Box,
  Flex,
  // Avatar,
  HStack,
  // Text,
  IconButton,
  Button,
  // Menu,
  // MenuButton,
  // MenuList,
  // MenuItem,
  // MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import LOGO from "../assets/ICONS/LOGO";

const Links = [
  { text: "Home", url: "#home" },
  { text: "Services", url: "#services" },
  { text: "Pricing", url: "#pricing" },
  { text: "Testimonials", url: "#testimonials" },
  { text: "Teams", url: "#teams" },
];
export const handleClick = (anchor: string) => {
  // e.preventDefault();
  console.log(anchor);
  const id = `${anchor}-section`.toLowerCase();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

interface NavLinkProps {
  children: React.ReactNode;
  url: string;
  onClick?: () => void;
}

export const NavLink = (props: NavLinkProps): JSX.Element => {
  const { children, url, onClick } = props;
  const hoverStyles: CSSObject =
    url === "#contact"
      ? {
          textDecoration: "none",
          // bg: useColorModeValue("gray.200", "gray.700"),
        }
      : {
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        };

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={hoverStyles}
      href={url}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        px={4}
        position={"fixed"}
        width={"full"}
        zIndex={"1"}
        shadow={"base"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"} pl={{ base: 0, md: 6 }}>
            <Box>
              <NavLink onClick={() => handleClick("Home")} url="#home">
                <LOGO />
              </NavLink>
            </Box>
          </HStack>

          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={6}
              display={{ base: "none", md: "flex" }}
              pr={{ base: 0, md: 10 }}
            >
              {Links.map((link) => (
                <NavLink
                  key={link.text}
                  url={link.url}
                  onClick={() => handleClick(link.text)}
                >
                  {link.text}
                </NavLink>
              ))}
              <Button colorScheme="blue">
                <Flex align="center">
                  <a href="#contact-section"></a>
                  <NavLink
                    onClick={() => handleClick("Contact")}
                    url={"#contact"}
                  >
                    Contact Us
                  </NavLink>

                  <HStack spacing={6} align="center">
                    <Icon as={FaArrowRight} boxSize={4} ml={2} />
                  </HStack>
                </Flex>
              </Button>
            </HStack>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.url} url={link.url} onClick={() => handleClick(link.text)}>
                  {link.text}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}
