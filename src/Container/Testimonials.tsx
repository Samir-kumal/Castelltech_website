
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack

      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string
  name: string
  title: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} id='testimonials-section'>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around Nepal</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
              <TestimonialText>
              "Working with CastellTech has been a game-changer for our business. Their ability to streamline our collaborative efforts and keep everyone aligned on our projects has been nothing short of impressive. They truly understand the importance of efficiency in today's fast-paced world."
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_R0zdv9Hg4s8GJFocso0MveDwL8WmntLCbgGl1ltdvphpBrBps3VZHLE78PTJ-8eYApY&usqp=CAU'
              }
              name={'Jane Doe'}
              title={'Project Manager at Global Solutions Ltd.'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Intuitive Design</TestimonialHeading>
              <TestimonialText>
              "CastellTech's approach to intuitive design sets them apart. They have an innate ability to understand user behavior and translate it into designs that are not only aesthetically pleasing but also highly functional. Their work has been a source of inspiration for our design team."
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'data:image/jpeg;base64,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'
              }
              name={'John Smith'}
              title={'CEO of Tech Innovators Inc.'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
              "Visionary Ventures owes much of its success to CastellTech's mind-blowing service. Their responsiveness, attention to detail, and unwavering dedication have made them our go-to partner. CastellTech doesn't just provide services; they provide experiences."
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://i.pinimg.com/736x/ab/b7/79/abb77900c96085270d6caa28742d1428--nepal-mens-fashion.jpg'
              }
              name={'Manik Shrestha'}
              title={' Founder of StartSmart Ventures'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}