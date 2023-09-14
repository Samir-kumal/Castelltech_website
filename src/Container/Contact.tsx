import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";

import { CONFETTI_DARK, CONFETTI_LIGHT } from "../lib/Theme";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
      align="center"
      justify="center"
      css={{
        backgroundImage: useColorModeValue(CONFETTI_LIGHT, CONFETTI_DARK),
        backgroundAttachment: "fixed",
      }}
      id="contact-section"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              Get in Touch
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Box
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
              >
                <form action="https://api.web3forms.com/submit" method="POST">
                  <VStack width={{ md: "2xl", lg: "3xl" }} spacing={5}>
                    <FormControl>
                      <FormLabel>Name</FormLabel>

                      <InputGroup>
                        <InputLeftElement>
                          <BsPerson />
                        </InputLeftElement>
                        <Input
                          hidden={true}
                          name="access_key"
                          value="6860c83f-c330-4060-ab42-ec15b91aa5bc"
                        ></Input>
                        <Input
                          value={formData.name}
                          onChange={handleChange}
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement>
                          <MdOutlineEmail />
                        </InputLeftElement>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name="message"
                        value={formData.message}
                        placeholder="Your Message"
                        onChange={handleChange}
                        rows={6}
                        resize="none"
                      />
                    </FormControl>

                    <Button
                      as="button"
                      type="submit"
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: "blue.500",
                      }}
                      width="full"
                    >
                      Send Message
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
