"use client";

import { Flex, Circle, Box, Image, useColorModeValue, Heading, Stack } from "@chakra-ui/react";
import CardGridLayout from "../CardGridLayout";

const data = [
  {
    isNew: true,
    imageURL:
      "https://img.playbook.com/mM14qw5WMnX6U48zrCvlu-1d8T37tp3e3QmzE5DQU4o/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzIxOGVkZDI2/LTNiNjMtNGYwZS05/YjZmLWY2ZmY0ZjQx/NGFhZg",
    name: "Bishal Pokhrael",
    role: "Founder / Chairman",
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://img.playbook.com/0jcAlMWmLAYO2tqXETvv975omK48i6r74iS2D9P-_V8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzBjZDY0MzM0/LTQ3MDAtNDM3ZC05/ZjUzLTJmZTUyNDM0/ZWQ3MA",
    name: "Samaya Paudel",
    role: "Co-Founder / Vice-Chairman",
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://img.playbook.com/fnYQ_jBI8wyny1s9Gp1vV0PF5xvCHjLpjMi7tKhpjzE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2FiZGE1ZTZj/LWVjMjctNGNkZS05/NTZjLWFiZjI3MjVl/MzcyNQ",
    name: "Swornim Shrestha",
    role:"Managing Director",
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://img.playbook.com/NXhDPwdvsAi7U1skYcBUmoy9nDDObs9sce8WCjp4ROE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzJiMTNkMGNl/LWM2Y2ItNGVlNy04/MmU3LTc3MmU1NDJm/OTYwYg",
    name: "Samir Kumal",
    role: "Developer / Designer",
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL:
      "https://img.playbook.com/HDrrKh90wzabcTY6W6QukvWJry5SKkemo-yknjeSPeo/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzY5ZDQxYWY0/LTE5YmYtNDQwYS1i/Yzk1LWU5ZjZmMGRh/NTk1Ng",
    name: "Sabin Dhakal",
    role: "Back-end Developer",
    rating: 4.2,
    numReviews: 34,
  }

];

function TeamCard() {
  const columnNo: number = 3;
  return (
    <CardGridLayout column={columnNo}  >
      {data.map((data) => (
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />

          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
              >
                <Stack>
 <Heading  fontSize="2xl"
                fontWeight="bold">
                {data.name}
                </Heading>
                <Heading color={"gray.500"} fontSize="md"
                fontWeight="normal">
                  {data.role}
                </Heading>
                </Stack>
               
                
              </Box>
            </Flex>
          </Box>
        </Box>
      ))}
    </CardGridLayout>
  );
}

export default TeamCard;
