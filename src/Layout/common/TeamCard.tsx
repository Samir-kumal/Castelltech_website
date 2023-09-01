
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
      "https://img.playbook.com/AqRo2-aP1yaYPK9KLDBJFU8wfecd9_RCsYC_5SoqbyY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzM5NjgyMDA0/LTM5MTYtNDIwNy1i/YzMzLWE5YzdiN2Q1/MmVkMA",
    name: "Bishal Pokhrael",
    role: "Founder / Chairman",
 
  },
  {
    imageURL:
      "https://img.playbook.com/HxZP7L4eUBMWiVDIkAQ07ODvkj7y7zKTZgUwdOYWvig/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzZhMWQ5NWM1/LThkZjUtNDMxMi04/MWJiLTc4MjZiYjE1/YzI1ZQ",
    name: "Samaya Paudel",
    role: "Co-Founder / Vice-Chairman",
   
  },
  {
    imageURL:
      "https://img.playbook.com/ysPv9u5_zTdmvzOShkP4mFcvdTcNKBBQxhnoy6y2abw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JjZDM5ODM4/LWYwN2YtNGU0Zi05/YzZlLTg5NDgyNjMw/ZmY5Yw",
    name: "Swornim Shrestha",
    role: "Managing Director",

  },
  {
    imageURL:
      "https://img.playbook.com/ORtpxobJOVHZBIDe-q9pk_nM7p73dGJkAi3qsWn9vmw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RhMzJjOGZj/LThmM2ItNDJhNy1i/YmE2LTk2ZGRlNGM2/MGRlZg",
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
  const columnNo: number = 3;
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
