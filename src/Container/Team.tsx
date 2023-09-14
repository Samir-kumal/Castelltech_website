
import {
  // Flex,
  // Circle,
  // Image,
  // Badge,
  // useColorModeValue,
  // Icon,
  // chakra,
  // Tooltip,
  Stack,
  Box,
  Container,
  Heading,
  Text,
  // SimpleGrid
} from '@chakra-ui/react'

import TeamCard from '../Layout/common/TeamCard'





function ProductAddToCart() {
  return (
  
    <Box bg= {"#f7f4f7"} p={4} py={16} id= "teams-section">
    <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
      <Heading
        fontSize={{ base: "2xl", sm: "4xl", lg: "2xl" }}
        color={"#137dc5"}
        fontWeight={"bold"}
      >
        OUR TEAM
      </Heading>
      <Heading
        fontSize={{ base: "2xl", sm: "4xl", lg: "4xl" }}
        fontWeight={"bold"}
      >
        Our Exceptional Team
      </Heading>
      <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
      We pride ourselves in great work ethic, integrity, and our end-results. Our company
philosophy is to create the kind of work that drives us to excel, 
innovate, and make a positive impact on all fronts.
      </Text>
    </Stack>

    <Container  maxW={"6xl"} mt={12} >
    <TeamCard/>
    </Container>
  </Box>
  )
}

export default ProductAddToCart