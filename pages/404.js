import { Box, Heading, Text, Button, Divider } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2">404</Heading>
      <Text mb={2}>La page ne semble pas existée</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button variant="solid"> Retour à l&apos;accueil</Button>
        </NextLink>
      </Box>
    </Box>
  );
}
