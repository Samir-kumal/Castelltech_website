'use client'
import Illustration from "../assets/illustration.svg"
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import GridBox from './GridBox'
// import { ReactElement } from 'react'

// interface FeatureProps {
//   text: string
//   iconBg: string
//   icon?: ReactElement
// }

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

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
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
        How Can We Help?
                </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati ut
          cupiditate pariatur, dignissimos, placeat amet officiis.
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