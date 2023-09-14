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
      "https://img.playbook.com/ACnOcagsZBm-or8ty4Wkd59eyn3ghvusTyoRKgycL5g/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzY0OWM2YzIx/LTBkODktNDg3Yi05/MDI5LTgzMmZlMGM5/MmZlZQ",
    name: "Dr.Bishal Pokharel    M.B.B.S",
    edu: "M.B.B.S",
    role: "Founder / Chairman",
  },
  {
    imageURL:
      "https://img.playbook.com/LVu3nQ1IfBWPZTc5HME_QIn07fykzh65t5eSMr6Zh4s/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2E5ODJmYmM3/LTdkM2UtNGI4OC04/ZmFkLTdhMTE4NDU0/YzhjOQ",
    name: "Samaya Paudel",
    role: "Co-Founder / Vice-Chairman",
  },
  {
    imageURL:
      "https://img.playbook.com/rKNt1rzP5vsrs49vES9e6MnHSD2J0dEAEOxdz-G4EAk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2YzZjMxYTU4/LWM5NTQtNDA1My1i/MWFkLThlZTM1MTk2/NGM4NQ",
    name: "Swornim Shrestha",
    role: "Managing Director",
  },
  {
    imageURL:
      "https://img.playbook.com/1nEWQuLnsnjvREOf-pP7mc2yhjjYwHTUungTLIMr5Yw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzcwN2U4MDAz/LWY3Y2ItNGU2MS04/YjAzLTcyNDY3MDFi/NDU0Yw",
    name: "Samir Kumal",
    role: "Developer / Designer",
  },
  {
    imageURL:
      "https://img.playbook.com/BrWXjLpE5ahvBkIFFWyKditidSzL61vdtu5a_4LU9mw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzZiYWRiZDY0/LTE3MWQtNGQzMS1i/ZWZjLTg4ZDczMDZm/ODQ0ZA",
    name: "Sabin Dhakal",
    role: "Designer",
  },
  {
    imageURL:
      "https://img.playbook.com/rXUQcLMu6xDfxu8uSuQMGaxh--pfwyBLmFg_Oykeg48/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzBlYWFiZTkz/LWI1NDQtNDc2NS04/Mzc4LTFlNWVmNjg5/Y2IwYw",
    name: "Chhatra B. Rana",
    role: "Fullstack Developer",
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
          // maxW="sm"
          width={"10rem"}
          borderWidth="1px"
          rounded="lg"
          display={"flex"}
          flexDirection={"column"}
        >
          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
            height={"40"}
            objectFit={"cover"}
          />

          <Box>
            <Flex
              justifyContent="space-between"
              flexDirection={"column"}
              alignContent="center"
            >
              <Heading
                fontSize="lg"
                textAlign={"center"}
                fontWeight="normal"
                padding={1}
              >
                {data.name}
              </Heading>
              <Heading
                padding={1}
                color={"gray.500"}
                fontSize="small"
                textAlign={"center"}
                fontWeight="normal"
              >
                {data.role}
              </Heading>
            </Flex>
          </Box>
        </Box>
      ))}
    </CardGridLayout>
  );
}

export default TeamCard;
