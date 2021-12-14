import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../Component/Layouts/articles";
import Section from "../Component/Layouts/section";

const Solutions = () => (
  <Layout title="solutions">
    <Container maxW="container.xl">
      <Heading as="h3" fontSize={20} mb={4}>
        Nos solutions
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>Colorifugeage</Section>
        <Section>Points Singulier</Section>
        <Section>Pompes à chaleur</Section>
      </SimpleGrid>
    </Container>
  </Layout>
);
export default Solutions;
