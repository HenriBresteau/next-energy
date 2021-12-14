import {
  Box,
  Text,
  Container,
  Heading,
} from "@chakra-ui/react";
import Layout from "../Component/Layouts/articles";

export default function CEE() {
  return (
    <Layout title="CEE">
      <Container>
        <Box>
          <Heading as="h2" variant="section-title">
            Certificat d&apos;économie d&apos;énergie
          </Heading>
          <Box>
            <Heading as="h3" pb={4}>
              En savoir plus sur les CEE :
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
            <Text pb={2}>
              Suspendisse in arcu felis. Vivamus ultricies a nibh et tempus.
              Etiam at velit elit. Vestibulum porta tellus vitae ipsum
              scelerisque, sed porta nibh mattis. Nam semper mattis justo, sit
              amet condimentum felis rhoncus quis. Phasellus fringilla in dui
              dictum mollis. Nullam eget efficitur felis, nec posuere nibh.
              Nulla vel sapien pulvinar, accumsan leo eu, scelerisque enim. Nunc
              venenatis blandit purus in venenatis. Nam nec placerat dolor. Sed
              maximus nibh nec eros sagittis, et ullamcorper velit eleifend.
              Suspendisse commodo rhoncus luctus.
            </Text>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
