import { Container, Heading } from "@chakra-ui/react";
import Layout from "../../Component/Layouts/articles";
import { TitleVE } from "../../Component/Vous-etes/vous-etes";

const VousEtes = () => (
  <Layout title="Entreprise">
    <Container maxW="container.xl">
      <TitleVE>Entreprises</TitleVE>
    </Container>
  </Layout>
);
export default VousEtes;
