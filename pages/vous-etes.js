import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../Component/Layouts/articles";
import Section from "../Component/Layouts/section";

const VousEtes = () => (
  <Layout title="Vous êtes ?">
    <Container maxW="container.xl">
      <Heading as="h3" fontSize={20} mb={4}>
        Vous êtes ?
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>Collectivité</Section>
        <Section>Entreprise</Section>
        <Section>Industrie</Section>
      </SimpleGrid>
    </Container>
  </Layout>
);
export default VousEtes;
