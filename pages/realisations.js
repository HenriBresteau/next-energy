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
            <Heading as="h3" pb={4}>
              Découvrez nos dernières interventions :
            </Heading>
            <Text pb={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              vitae aliquet risus. Donec congue lorem neque, ac scelerisque
              risus tempus eu. Praesent vitae venenatis purus, vitae ullamcorper
              lorem. Aenean sit amet consectetur felis. Donec augue arcu,
              ultricies eget auctor ut, aliquam sed tellus. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Donec mollis condimentum massa sit amet
              pellentesque. Pellentesque sed eleifend tellus, quis laoreet nunc.
              Mauris semper odio ut tortor lobortis semper id at ligula. Sed
              vitae vehicula felis.
            </Text>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
