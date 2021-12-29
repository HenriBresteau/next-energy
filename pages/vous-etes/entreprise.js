import { Container, Heading , Box} from "@chakra-ui/react";
import Layout from "../../Component/Layouts/articles";

const VousEtes = () => (
  <Layout title="Entreprise">
    <Container maxW="container.xl">
      <Box>
        <Heading as="h2" variant="section-title">
          Entreprise
        </Heading>
      </Box>
    </Container>
  </Layout>
);
export default VousEtes;
