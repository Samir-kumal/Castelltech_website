import {ReactNode} from "react";
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

export default function CardGridLayout({column, children}: {column: number, children: ReactNode}) {
  return (
    <Box p={4} display={"flex"}  justifyContent="center" alignItems="center" >
      <SimpleGrid columns={{ base: 1, md: 2 , lg: column }} spacing={16}  >
       {children}
      </SimpleGrid>
    </Box>
  );
}
