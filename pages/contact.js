import {
  Box,
  Text,
  Container,
  Heading,
  VStack,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import contact from "../public/images/contact/contact.jpg";
import { IoCall, IoLocationOutline, IoMailOutline } from "react-icons/io5";
import Layout from "../Component/Layouts/articles";

export default function Contact() {
  return (
    <Layout>
      <Container>
        <Box>
          <Heading as="h2" variant="section-title">
            Contact
          </Heading>
          <Box>
            <Image src={contact} alt="contactez Next Energy"></Image>
          </Box>
          <Box>
            <Heading as="h3" pb={4}>
              Nos produits vous interesse ?
            </Heading>
            <Text pb={2}>
              Vous souhaitez recevoir plus d’informations par téléphone ?
            </Text>
            <Text pb={2}>
              Vous souhaitez convenir d’un rendez-vous physique avec l’un de nos
              conseillers ?
            </Text>
          </Box>
          <VStack spacing="3" alignItems="flex-start" py={4}>
            <Button
              size="md"
              height="48px"
              color="#74bd4c"
              variant="outline"
              _hover={{
                border: "2px solid #74bd4c",
              }}
              leftIcon={<IoLocationOutline color="#74bd4c" size="18px" />}
            >
              19 rue Louis Guérin, <br /> 69100 Villeurbanne
            </Button>
            <Button
              size="md"
              height="48px"
              color="#74bd4c"
              variant="outline"
              _hover={{
                border: "2px solid #74bd4c",
              }}
              leftIcon={<IoCall color="#74bd4c" size="18px" />}
            >
              <a href="tel:0805037555">0 805 037 555</a>
            </Button>
            <Button
              size="md"
              height="48px"
              color="#74bd4c"
              variant="outline"
              _hover={{
                border: "2px solid #74bd4c",
              }}
              leftIcon={<IoMailOutline color="#74bd4c" size="18px" />}
            >
              <a href="maito:contact@next-energy.fr">contact@next-energy.fr</a>
            </Button>
          </VStack>
        </Box>
      </Container>
    </Layout>
  );
}
