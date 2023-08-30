'use client'

import {
  Flex,
  Circle,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Stack,
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import TeamCard from '../Layout/common/TeamCard'

const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
}




function ProductAddToCart() {
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
    <TeamCard/>
    </Container>
  </Box>
  )
}

export default ProductAddToCart