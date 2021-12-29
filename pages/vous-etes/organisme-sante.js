import { Container, Heading, Box } from "@chakra-ui/react";
import Layout from "../../Component/Layouts/articles";

const VousEtes = () => (
  <Layout title="Organisme de santé">
    <Container maxW="container.xl">
      <Box>
        <Heading as="h2" variant="section-title">
          Organisme de santé
        </Heading>
      </Box>
    </Container>
  </Layout>
);
export default VousEtes;
