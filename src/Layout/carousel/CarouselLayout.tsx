import React, { useState, useEffect } from "react";
import ChakraCarousel from "./ChakraCarousel";
import {
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Text,
  Flex,
  Tag,
  Image
} from "@chakra-ui/react";
const data = [
  {
    imageURL:
      "https://img.playbook.com/Gtvy5QeKrM1dDP4CkPDbmGEjY3_cwZhKaqUld015X4g/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzgyN2UyNmU5/LTIyM2UtNDA4OC1h/MjM1LWMwNGRhNmNi/MjBjMw",
    name: "React",
  },
  {
    imageURL:
      "https://img.playbook.com/IzdXDeJUxCrlPbyfFkKZKlpPzohvk6Azm6A-MA_LPOc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzAyZmMyYWU2/LTRiOGUtNDE0OS1h/ZjU4LTI3NTg1MTc5/ZjI3NA",
    name: "NodeJS",
  },
  {
    imageURL:
      "https://img.playbook.com/t2IfRuDx9OkT7fDwUrq9DcqhgjyH_UwmbxP05J3ra-k/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzdjZTQwZTli/LTBlMmItNDAwYi1i/NGVlLTRkYzFhODRk/MDQ5Ng",
    name: "MongoDB",
  },
  {
    imageURL:
      "https://img.playbook.com/Q5X-Leso4_MQBa4i16DzyaiTXR2kWPV5PJ0soUdEn9c/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzg1MzRhZjNl/LTUxNzUtNDNlMS1h/NDUyLTI3MTFjNjQy/MTMwMg",
    name: "MySql",
  },
  {
    imageURL:
      "https://img.playbook.com/b0-60YAf3OdQe0rP6qg_MOL7NZtLcaf7Hzhen4N4RVc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzQ2YzYxNWEy/LWM2OTQtNGQ4NC04/YjVhLTRiYmQ4ZTg2/YjY2OA",
    name: "Flutter",
  },
  {
    imageURL:
      "https://img.playbook.com/2qSeBU8dMGF35EnRqayIyeCkkl-WmVFFmCX3fTDBvbA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzBmM2QxMzVi/LTIzYmQtNDJmNy1h/Y2M5LTY1MTc5OTY1/OTE3OQ",
    name: "ReactNative",
  },
  {
    imageURL:
      "https://img.playbook.com/Cl99Xj8EUDd8_CrwT8IiTiDeyNwcaM4erO5lvK2patg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzkxZWRhZjA2/LWQ5ZDQtNDk1NC1i/MTVmLTcwZjYwMGZl/NzM5OA",
    name: "FireBase",
  },
  {
    imageURL:
      "https://img.playbook.com/A-pTLUpboKJ9bf139WlXcQ0eDX0gKC4qmZmsCe1yb3k/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzU3N2EwZWFm/LTBkYWQtNDYyZC1i/NWIwLWQ2ODBiMDg0/NDk0ZQ",
    name: "TypeScript",
  },
  {
    imageURL:
      "https://img.playbook.com/JM2uEug1LokWZSCUTkpR4SwudJZqzSlcbdVEahGnZHo/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzE5MThiNThl/LTliMTYtNGRmYy05/Mjc5LTkyNzE1ZDE1/Nzk4YQ",
    name: "Tailwind",
  },
];
const CarouselLayout = () => {

 

 
  return (
    <div>
      <Container
        py={8}
        px={0}
        maxW={{
          base: "100%",
          sm: "35rem",
          md: "43.75rem",
          lg: "57.5rem",
          xl: "75rem",
          xxl: "87.5rem",
        }}
      >
        <ChakraCarousel gap={32}>
          {data.map((item) => (
            <Flex
              key={item.imageURL}
              boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 6px, rgba(0, 0, 0, 0.1) 0px 1px 6px"
              justifyContent="space-between"
              flexDirection="column"
              overflow="hidden"
              // color="gray.300"
              bg="base.d100"
              rounded={5}
              width={"40"}
              flex={1}
              p={5}
            >
              <VStack  display={"flex"} alignContent={"center"} justifyContent={"center"}>
               
                {/* <Text w="full">{post.body}</Text> */}
                <Image src = {item.imageURL} alt= {item.name} height={"16"} objectFit={"contain"} draggable = {"false"}/>
              </VStack>

              <Flex justifyContent="space-between">
             
  
              </Flex>
            </Flex>
          ))}
        </ChakraCarousel>
      </Container>
    </div>
  );
};

export default CarouselLayout;
