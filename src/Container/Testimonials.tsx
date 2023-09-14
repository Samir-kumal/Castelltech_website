
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
                'https://img.playbook.com/70JKaraxlA5UYv13Pf77L6J-bmdPYCeeyAR2I9tY1fg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzM2ZmIwMDgy/LTczOGYtNDE3ZS04/MWYxLWNkMjkzM2U5/MTZiMQ'
              }
              name={'Manish Pandit'}
              title={'IT head at caspian valley collage'}
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
               "https://img.playbook.com/G3KImmXd2bpeFQtsCdrLZdIEDyQqRp0J-SMNsLSlW6I/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzc5ZmZiN2Nj/LTMwOTctNDk2Mi04/OTBmLTJhYTUxYmUw/OTMzMg"
              }
              name={'Kishor Aryal'}
              title={'Chairman at Name Instittute hetauda'}
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
                'https://img.playbook.com/klPfAox1-QjGEFUvqrRYXCwnrhm_5AD4NkaEDx2T-XY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzIyZDFkZjU5/LWE4ZDctNDBhMi1h/MTk1LWQ0MjczYWMz/ZWU4YQ'
              }
              name={'Sagar Lamsal'}
              title={'Managing Director at Business Management Services Pvt.Ltd'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}