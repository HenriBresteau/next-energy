import { Heading, Container, Box, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Layout from "../Component/Layouts/articles";
import { SpanH1Title } from "../Component/Vous-etes/index";
import index from "../public/images/index/index.png";
import rappel from "../public/images/index/rappel.svg";
import qualifie from "../public/images/index/qualifie.svg";
import controle from "../public/images/index/controle.svg";

export default function Home() {
  return (
    <Layout>
      <Container maxW="container.xl">
        <Heading
          as="h1"
          textTransform="uppercase"
          color="#61727B"
          fontSize="40"
        >
          Faites des <SpanH1Title>économies d&apos;énergie</SpanH1Title> grâce
          aux <SpanH1Title>CEE</SpanH1Title>
        </Heading>

        <Box>
          <Image
            src={index}
            alt="Faites des économies d energie grâce aux CEE "
          ></Image>
        </Box>
        <HStack justifyContent="space-around">
          <Box display="flex" alignItems="center">
            <Image src={rappel} alt="rappel rapide"></Image>
            <Heading as="h2" variant="section-home">
              Rappel <br /> Rapide
            </Heading>
          </Box>
          <Box display="flex" alignItems="center">
            <Image src={qualifie} alt="Artisans qualifiés"></Image>
            <Heading as="h2" variant="section-home">
              Artisans <br /> Qualifiés
            </Heading>
          </Box>
          <Box display="flex" alignItems="center">
            <Image src={controle} alt="Chantiers contrôlés"></Image>
            <Heading as="h2" variant="section-home">
              Chantiers <br /> Contrôlés
            </Heading>
          </Box>
        </HStack>
      </Container>
    </Layout>
  );
}
