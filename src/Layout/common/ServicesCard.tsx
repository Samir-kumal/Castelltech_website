import CardGridLayout from '../CardGridLayout'
import { Box, Image, Text, Heading } from '@chakra-ui/react'
import MarketAnaysis from "../../assets/png/marketAnalysis.png";
import LeadGeneration from "../../assets/png/lead.png";
import SocialMediaMarketing from "../../assets/png/social_media_marketing.png";
const ServicesCard = () => {
    const columnNo :number = 3
  return (
    <CardGridLayout column={columnNo}>
         <Box    display="flex"  flexDirection="column" justifyContent="center" alignItems = "center">
          <Image src={MarketAnaysis} alt="Market Analysis" height = "140px" />
          <br />
          <Heading
            color={"#DF7D5A"}
            fontWeight={"bold"}
            fontSize={{ base: "2xl", sm: "1xl", lg: "2xl" }}
          >
            <Text  fontWeight={600}>Market Analysis</Text>
          </Heading>
          <br />

          <Text textAlign="center" color={"gray.600"}>
          Discover actionable insights with our Market Analysis Services. We offer tailored market research, competitive analysis, and trend assessments.
          </Text>
        </Box>
        <Box   display="flex"  flexDirection="column" justifyContent="center" alignItems = "center">
          <Image src={LeadGeneration} alt="Lead Generation"  height = "140px"  />
          <br />

          <Heading
            color={"#DF7D5A"}
            fontWeight={"bold"}
            fontSize={{ base: "2xl", sm: "1xl", lg: "2xl" }}
          >
            <Text fontWeight={600}>Lead Generation</Text>
          </Heading>
          <br />

          <Text textAlign="center" color={"gray.600"}>
          Fuel your sales pipeline with high-quality leads and accelerate business growth. Explore our lead generation services for sustainable success.
          </Text>
        </Box>
        <Box   display="flex"  flexDirection="column" justifyContent="center" alignItems = "center">
          <Image
            src={SocialMediaMarketing}
            alt="Social Media Marketing"
            height = "140px" 
          />
          <br />

          <Heading as="h1" textAlign="center"
            color={"#DF7D5A"}
            fontWeight={"bold"}
            fontSize={{ base: "2xl", sm: "1xl", lg: "2xl" }}
          >
            <Text fontWeight={600}>Social Media Marketing</Text>
          </Heading>
          <br />

          <Text textAlign="center" color={"gray.600"}>
          Elevate your brand's online presence with our Social Media Marketing expertise, utilizing tailored strategies to engage your audience, boost brand awareness.
          </Text>
        </Box>
    </CardGridLayout>
  )
}

export default ServicesCard