import CardGridLayout from "../CardGridLayout";
import { Box, Image, Text, Heading } from "@chakra-ui/react";

import LottiePlayer from "../../Container/LottiePlayer";

const ServicesCard = () => {
  const columnNo: number = 3;
  return (
    <CardGridLayout column={columnNo}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={"1"}
        padding={"1"}
      >
        <LottiePlayer
          style="h-[120px]"
          url="https://lottie.host/622716ca-1fcc-4e2b-a080-241dc41eb5a1/1IDvTPBn3i.json"
        />

        <Heading
          color={"#1A202C"}
          fontWeight={"bold"}
          fontSize={{ base: "2xl", sm: "1xl", lg: "2xl" }}
        >
          <Text fontWeight={600}>SEO Optimization</Text>
        </Heading>

        <Text textAlign="center" color={"gray.600"}>
          Discover actionable insights with our Market Analysis Services. We
          offer tailored market research, competitive analysis, and trend
          assessments.
        </Text>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={"1"}
        padding={"1"}
      >
        <LottiePlayer
          style="h-[120px]"
          url="https://lottie.host/e6502b9f-6958-41b8-ad9f-0774c1759254/5pJyX6Cxr5.json"
        />

        <Heading
          color={"#1A202C"}
          fontWeight={"bold"}
          fontSize={{ base: "2xl", sm: "1xl", lg: "2xl" }}
        >
          <Text fontWeight={600}>Lead Generation</Text>
        </Heading>

        <Text textAlign="center" color={"gray.600"}>
          Fuel your sales pipeline with high-quality leads and accelerate
          business growth. Explore our lead generation services for sustainable
          success.
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={"1"}
        padding={"1"}
      >
        <LottiePlayer
          style="h-[120px]"
          url="https://lottie.host/a04d564f-b561-43ad-98f5-e6912c64a85c/ZU4mIFe3RA.json"
        />

        <Heading
          as="h1"
          textAlign="center"
          color={"#1A202C"}
          fontWeight={"bold"}
          fontSize={{ base: "2xl", sm: "1xl", lg: "2xl" }}
        >
          <Text fontWeight={600}>Digital Marketing</Text>
        </Heading>

        <Text textAlign="center" color={"gray.600"}>
          Elevate your brand's online presence with our Social Media Marketing
          expertise, utilizing tailored strategies to engage your audience,
          boost brand awareness.
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={"1"}
        padding={"1"}
      >
        <LottiePlayer
          style="h-[120px]"
          url="https://lottie.host/659cac64-0349-42c4-a201-05c8bb3847cb/3DUCoVyJUn.json"
        />
        <Heading
          color={"#1A202C"}
          fontWeight={"bold"}
          fontSize={{ base: "2xl", sm: "1xl", lg: "2xl" }}
        >
          <Text fontWeight={600}>Web Development</Text>
        </Heading>

        <Text textAlign="center" color={"gray.600"}>
          Discover actionable insights with our Market Analysis Services. We
          offer tailored market research, competitive analysis, and trend
          assessments.
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={"1"}
        padding={"1"}
      >
        <LottiePlayer
          style="h-[120px]"
          url="https://lottie.host/1365a330-871e-4f8d-9033-ba9b238cacfc/LnydXqasNV.json"
        />

        <Heading
          color={"#1A202C"}
          fontWeight={"bold"}
          fontSize={{ base: "2xl", sm: "1xl", lg: "2xl" }}
        >
          <Text fontWeight={600}>Mobile Development</Text>
        </Heading>

        <Text textAlign="center" color={"gray.600"}>
          Fuel your sales pipeline with high-quality leads and accelerate
          business growth. Explore our lead generation services for sustainable
          success.
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={"1"}
        padding={"1"}
      >
        <LottiePlayer
          style="h-[120px]"
          url="https://lottie.host/3f6f4ee4-41f3-4e68-884c-83695c1e1ebe/Uy1gO9zNVg.json"
        />

        <Heading
          as="h1"
          textAlign="center"
          color={"#1A202C"}
          fontWeight={"bold"}
          fontSize={{ base: "2xl", sm: "1xl", lg: "2xl" }}
        >
          <Text fontWeight={600}>Graphics Designing</Text>
        </Heading>

        <Text textAlign="center" color={"gray.600"}>
          Elevate your brand's online presence with our Social Media Marketing
          expertise, utilizing tailored strategies to engage your audience,
          boost brand awareness.
        </Text>
      </Box>
    </CardGridLayout>
  );
};

export default ServicesCard;
