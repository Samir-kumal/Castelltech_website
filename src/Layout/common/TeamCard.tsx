"use client";

import {
  Flex,
  Circle,
  Box,
  Image,
  useColorModeValue,
  Heading,
  Stack,
} from "@chakra-ui/react";
import CardGridLayout from "../CardGridLayout";

const data = [
  {
    imageURL:
      "https://img.playbook.com/MKrXF5aKp-8Qm3DlEQY6C0NbkTzi6B2T5rO7dodyk6U/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzc5Yzg2Mjll/LTI1NDUtNDY1Mi1i/NzA4LTZlNTcxYWQw/ODRlMQ",
    name: "Bishal Pokhrael",
    role: "Founder / Chairman",
 
  },
  {
    imageURL:
      "https://img.playbook.com/geX7inrpX8bcq9q2eP0IPe9dn61_f4yNmsQj_ZF0JkI/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzRlMTNhMTQ4/LTgyZjEtNGMwYS05/OTVmLTFhNjI4YTQ0/ODk3ZA",
    name: "Samaya Paudel",
    role: "Co-Founder / Vice-Chairman",
   
  },
  {
    imageURL:
      "https://img.playbook.com/4OF-695_Sn2yyZLV86gR1XlNBkbgt9GDSurt2mcBYAk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzM1N2EzYmRj/LTM5NDQtNDk3OC05/YzE0LTk1NWExZTFm/MTFmYg",
    name: "Swornim Shrestha",
    role: "Managing Director",

  },
  {
    imageURL:
      "https://img.playbook.com/vQqCGYym8YGADPYr_rIOBvNud-iw59qY6_ieep8Lv2k/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzE5MGVkNzc0/LTlkZDAtNDY4MC1h/ZTgzLTI5ZDA5NmEx/YTZkYQ",
    name: "Samir Kumal",
    role: "Developer / Designer",
  },
  {
    imageURL:
      "https://img.playbook.com/HDrrKh90wzabcTY6W6QukvWJry5SKkemo-yknjeSPeo/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzY5ZDQxYWY0/LTE5YmYtNDQwYS1i/Yzk1LWU5ZjZmMGRh/NTk1Ng",
    name: "Sabin Dhakal",
    role: "Back-end Developer",
  },
];

function TeamCard() {
  const columnNo: number = 2;
  return (
    <CardGridLayout column={columnNo}>
      {data.map((data) => (
        <Box
        key={data.imageURL}
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
              <Box>
                <Stack>
                  <Heading fontSize="2xl" fontWeight="bold">
                    {data.name}
                  </Heading>
                  <Heading color={"gray.500"} fontSize="md" fontWeight="normal">
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
