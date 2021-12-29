import {
  Container,
  Heading,
  Box,
  Stack,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import Layout from "../../Component/Layouts/articles";
import Image from "next/image";
import depenses from "../../public/images/vous-etes/BS-Reduisez.png";
import travaux from "../../public/images/vous-etes/BS-travaux-finances.png";

const VousEtes = () => (
  <Layout title="Bailleurs Sociaux">
    <Container maxW="container.xl">
      <Stack
        direction={{ base: "column", md: "row" }}
        display="flex"
        alignItems="flex-start"
        mt={{ md: "2rem" }}
      >
        <Box maxW={{ md: "500px" }} mr={{ md: "50px" }}>
          <Box>
            <Heading as="h2" variant="section-title">
              BAILLEURS SOCIAUX
            </Heading>
          </Box>
          <Heading as="h3" pb={4} variant="section-sub-gris">
            Réduisez vos dépenses énergétiques
          </Heading>
          <Text>
            Vous êtes Responsable du patrimoine pour un Bailleur ou un Syndic de
            copropriété ? <br />
            Isoler les logements individuels ou collectifs est prioritaire pour
            faire des économies de chauffage, améliorer le confort des
            locataires et entretenir votre patrimoine. <br />
            Contribuez à une utilisation plus rationnelle de l’énergie afin de
            réduire et les consommations inutiles !
          </Text>
        </Box>
        <Box>
          <Image src={depenses} alt="Réduisez vos dépenses énergétiques" />
        </Box>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        display="flex"
        alignItems="flex-start"
        mt={{ md: "2rem" }}
        mb={{ md: "2rem" }}
      >
        <Box mr={{ md: "50px" }}>
          <Image
            src={travaux}
            alt="Vos travaux financés jusqu’à 100 % grâce aux CEE"
          />
        </Box>
        <Box
          maxW={{ md: "700px" }}
          border="14px solid #1AB107"
          py={16}
          px={12}
          textAlign="center"
        >
          <Heading as="h3" pb={4} variant="section-sub-gris" px={6}>
            Vos travaux financés jusqu’à 100 % grâce aux certificats d’économies
            d’énergie (CEE)
          </Heading>
          <Text px={8}>
            Le dispositif des CEE (Certificats d’Économies d’Énergie) a été mis
            en place par le gouvernement pour favoriser les travaux liés à la
            rénovation énergétique. <br />
            Vous pouvez en bénéficier pour entreprendre des travaux d’isolation
            allant dans ce sens. <br />
            Ce dispositif incitatif constitue un véritable levier pour financer
            tout ou partie des travaux d’isolation, parfois jusqu’à 100%.
          </Text>
        </Box>
      </Stack>
      <Box>
        <Heading as="h3" pb={4} variant="section-sub-gris">
          Générez de réelles économies et valorisez votre parc
        </Heading>
        <Text pb={4}>Les travaux d’efficacité énergétique :</Text>
        <UnorderedList color={"next"} pb={6} fontSize={18}>
          <ListItem>
            Le calorifugeage des réseaux d’eau chaude sanitaire et de chauffage
            =&gt; jusqu’à 25 % d’économies.
          </ListItem>
          <ListItem>
            L’isolation des combles et des planchers-bas =&gt;jusqu’à 30 %
            d’économies.
          </ListItem>
          <ListItem>
            L’isolation des planchers-bas =&gt; jusqu’à 10 % d’économies.
          </ListItem>
          <ListItem>
            L’isolation des points singuliers de vos canalisations.
          </ListItem>
        </UnorderedList>

        <Text pb={6}>
          Vous permettent de générer des baisses de charges, d’améliorer le
          confort des habitants et de valoriser votre patrimoine immobilier. Les
          offices publics de l’habitat (OPH), les sociétés anonymes
          d’habitations à loyers modérés ou HLM (SA d’HLM), les sociétés
          coopératives d’HLM, les sociétés d’économie mixte (SEM) et les
          entreprises sociales pour l’habitat (ESH) sont éligibles au dispositif
          CEE.
        </Text>
        <Text color={"#1AB107"} pb={6}>
          NEXT ENERGY met à votre disposition toutes ses compétences pour la
          mise en œuvre des solutions les plus performantes pour vous aider à
          maîtriser votre consommation énergétique et valoriser votre patrimoine
          immobilier.
        </Text>
      </Box>
    </Container>
  </Layout>
);
export default VousEtes;
