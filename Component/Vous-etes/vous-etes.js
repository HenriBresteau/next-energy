import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Link, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export const TitleVE = ({ children }) => (
  <Box>
    <NextLink href="/vous-etes">
      <Link>Vous Êtes ?</Link>
    </NextLink>
    <span>
      <ChevronRightIcon />
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);
