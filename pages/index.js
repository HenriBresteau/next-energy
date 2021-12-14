import { Heading, Container } from "@chakra-ui/react";
import Layout from "../Component/Layouts/articles";

export default function Home() {
  return (
    <Layout>
      <Container maxW="container.xl">
        <Heading as="h1" textTransform="uppercase">
          Next Energy, Partenaire de vos projets énergétiques
        </Heading>

        <p>Get started by editing </p>
      </Container>
    </Layout>
  );
}
