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
    name: "Bishal Pokharel",
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
    role: "Back-end Developer",
  },
  {
    imageURL:
      "https://img.playbook.com/rXUQcLMu6xDfxu8uSuQMGaxh--pfwyBLmFg_Oykeg48/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzBlYWFiZTkz/LWI1NDQtNDc2NS04/Mzc4LTFlNWVmNjg5/Y2IwYw",
    name: "Chhatra Bahadur Rana",
    role: "Full Stack Developer",
  },
];

function TeamCard() {
  const columnNo: number =3;
  return (
    <CardGridLayout column={columnNo}>
      {data.map((data) => (
        <Box
          key={data.imageURL}
          bg={useColorModeValue("white", "gray.800")}
          // maxW="sm"
          width={"-webkit-fit-content"}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
          display={"flex"}
          flexDirection={"column"}
          alignContent={"center"}
          justifyContent={"center"}

          // height={"40"}
        >
          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
            height={"52"}
            objectFit={"contain"}
          />

          <Box p="2">
            <Flex mt="1" justifyContent="space-between" flexDirection={"column"} alignContent="center">

                  <Heading fontSize="lg" textAlign={"center"}   fontWeight="bold">
                    {data.name}
                  </Heading>
                  <Heading color={"gray.500"} fontSize="sm" textAlign={"center"} fontWeight="normal">
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
