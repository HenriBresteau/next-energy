import { Box, Text, Container, Heading, Stack, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Layout from "../Component/Layouts/articles";
import { SpanCee, SpanCeeTitle } from "../Component/Vous-etes/cee";
import Pollueur from "../public/images/CEE/Pollueur.png";

export default function CEE() {
  return (
    <Layout title="CEE">
      <Container maxW="container.xl">
        <Box>
          <Heading as="h2" variant="section-CEE">
            Les <SpanCeeTitle>C</SpanCeeTitle>ertificats d&apos;
            <SpanCeeTitle>e</SpanCeeTitle>conomies d&apos;
            <SpanCeeTitle>e</SpanCeeTitle>nergies
          </Heading>
          <Stack
            direction={{ base: "column", md: "row" }}
            display="flex"
            alignItems="center"
            mt={{ md: "2rem" }}
          >
            <Box flex="0.8" maxW={{ md: "600px" }} mr={{ md: "50px" }}>
              <Heading as="h3" pb={4} variant="section-sub">
                Qu’est-ce que c’est ?
              </Heading>
              <Text pb={4}>
                Reprenant le principe du pollueur – payeur, les Certificats
                d’économies d’énergies, dits <SpanCee>CEE</SpanCee> , sont des
                dispositifs d’aide mis en place par l’État depuis 2005 obligeant
                les fournisseurs d’énergie (appelés « Obligés ») à aider
                financièrement les usagers (particuliers ou entreprises) dans
                leurs démarches d’économies d’énergies.
              </Text>
              <Text pb={4}>
                Grâce à ces <SpanCee>CEE</SpanCee>, les frais de vos travaux de
                rénovation énergétique seront partiellement ou intégralement
                remboursés. À noter que les <SpanCee>CEE</SpanCee> peuvent être
                cumulés avec d’autres dispositifs d’aide (CITE, éco-PTZ, TVA à
                5,5%…)
              </Text>
              <Heading as="h3" pb={4} variant="section-sub">
                Qui peut en bénéficier ?
              </Heading>
              <Text pb={2}>
                Les particuliers comme les entreprises, industriels,
                établissements de santé, collectivités territoriales, bailleurs
                sociaux ou encore syndics de copropriétés, bâtiment religieux et
                associatifs.
              </Text>
            </Box>

            <Box flex="0.4" mx={{ md: "120px !important" }}>
              <Image
                src={Pollueur}
                alt="Les Certificats d'économies d'énergies - les pollueurs"
              />
            </Box>
          </Stack>
          <Stack>
            <Box flex="0.8">
              <Heading as="h3" pb={4} variant="section-sub">
                Une procédure en 4 étapes :
              </Heading>
              <HStack
                pb={{ base: 6, md: 0 }}
                alignItems={{ base: "baseline", md: "center" }}
              >
                <Text
                  fontSize={48}
                  color="#61727B85"
                  fontWeight="800"
                  fontFamily="Helvetica Heavy"
                >
                  1
                </Text>
                <Text>
                  Faire une demande de <SpanCee>CEE</SpanCee> avant les travaux
                  auprès des obligés <br />
                  (fournisseurs d’énergie comme Total, EDF, mais aussi grandes
                  enseignes de distribution (Auchan, Leclerc…))
                </Text>
              </HStack>
              <HStack
                pb={{ base: 6, md: 0 }}
                alignItems={{ base: "baseline", md: "center" }}
              >
                <Text
                  fontSize={48}
                  color="#61727B85"
                  fontWeight="800"
                  fontFamily="Helvetica Heavy"
                >
                  2
                </Text>
                <Text>
                  Faire réaliser les travaux par un professionnel ayant la
                  qualification RGE. Soucieux de la qualité de ses prestations,{" "}
                  <br />
                  Next Energy travaille uniquement avec des artisans Reconnu
                  Garant de l’Environnement (RGE).
                </Text>
              </HStack>
              <HStack
                pb={{ base: 6, md: 0 }}
                alignItems={{ base: "baseline", md: "center" }}
              >
                <Text
                  fontSize={48}
                  color="#61727B85"
                  fontWeight="800"
                  fontFamily="Helvetica Heavy"
                >
                  3
                </Text>
                <Text>
                  Vérifier que vos équipements sont bien éligibles. <br />
                  Les <SpanCee>CEE</SpanCee> s’appliquent pour tous les travaux
                  d’isolation intérieure et extérieure.
                </Text>
              </HStack>
              <HStack
                pb={{ base: 6, md: 0 }}
                alignItems={{ base: "baseline", md: "center" }}
              >
                <Text
                  fontSize={48}
                  color="#61727B85"
                  fontWeight="800"
                  fontFamily="Helvetica Heavy"
                >
                  4
                </Text>
                <Text>
                  Après les travaux, il vous suffira d’envoyer la preuve de
                  réalisation des travaux à l’acheteur <br /> des{" "}
                  <SpanCee>CEE</SpanCee> et d’attendre la validation de votre
                  dossier pour que votre prime vous soit versée.
                </Text>
              </HStack>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Layout>
  );
}
