import { WarningTwoIcon } from "@chakra-ui/icons";
import { Box, Text, Container, Heading } from "@chakra-ui/react";
import Layout from "../Component/Layouts/articles";

export default function Realisations() {
  return (
    <Layout title="Réalisations">
      <Container maxW="container.xl">
        <Box>
          <Heading as="h2" variant="section-title">
            Réalisations
          </Heading>
          <Box>
            <Box>
              <Box textAlign="center" py={10} px={6}>
                <WarningTwoIcon boxSize={"50px"} color={"orange.300"} />
                <Heading as="h3" pb={4} mt={6}>
                  Page en cours de construction
                </Heading>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
