import Illustration from "../assets/cover.svg"
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  // StackDivider,
  // Icon,
  // useColorModeValue,
} from '@chakra-ui/react'
// import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import GridBox from './GridBox'
// import { ReactElement } from 'react'

// interface FeatureProps {
//   text: string
//   iconBg: string
//   icon?: ReactElement
// }


export default function Features() {
  return (
    <Container maxW={'6xl'} pb={12} >
         <Stack py = {12} spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
         <Heading
          fontSize={{ base: "2xl", sm: "4xl", lg: "2xl" }}
          color={"#DF7D5A"}
          fontWeight={"bold"}
        >
          Why Choose US?
        </Heading>
        {/* <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
        How Can We Help?
                </Heading> */}
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
        We're here to empower your business with our digital marketing expertise, enabling you to reach the right audience at the right time, increase brand recognition, and achieve your marketing goals.
        </Text>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
                Illustration
            }
            // objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
          
         <GridBox/>
        </Stack>
       
      </SimpleGrid>
    </Container>
  )
}