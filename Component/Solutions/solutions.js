import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Link, Heading } from "@chakra-ui/react";
import NextLink from "next/link";

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/solutions">
      <Link>Solutions</Link>
    </NextLink>
    <span>
      <ChevronRightIcon />
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);
