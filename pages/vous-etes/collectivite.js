import { Container, Heading } from "@chakra-ui/react";
import Layout from "../../Component/Layouts/articles";
import { TitleVE } from "../../Component/Vous-etes/vous-etes";

const VousEtes = () => (
  <Layout title="Collectivité">
    <Container maxW="container.xl">
      <TitleVE>Collectivité</TitleVE>
    </Container>
  </Layout>
);
export default VousEtes;
