import {ReactNode} from "react";
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

export default function CardGridLayout({column, children}: {column: number, children: ReactNode}) {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
       {children}
      </SimpleGrid>
    </Box>
  );
}
