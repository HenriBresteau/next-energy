import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  HStack,
  UnorderedList,
  ListItem,
  SimpleGrid,
  Icon,
  Flex,
} from "@chakra-ui/react";
import {
  FcApproval,
  FcAssistant,
  FcInTransit,
  FcOk,
  FcSearch,
  FcShipped,
} from "react-icons/fc";
import Image from "next/image";
import Layout from "../../Component/Layouts/articles";
import comment from "../../public/images/solution/Calorifugeage/CALO-Comment.png";
import pourquoi from "../../public/images/solution/Calorifugeage/CALO-Pourquoi.png";
import installation from "../../public/images/solution/Calorifugeage/CALO-Installation.png";
import CEE from "../../public/images/solution/Calorifugeage/avantages/travaux-100-100-gratuits.svg";
import Gain from "../../public/images/solution/Calorifugeage/avantages/gains-de-15-a-20-pourcent.svg";
import DeperditionThermique from "../../public/images/solution/Calorifugeage/avantages/deperdition-thermique.svg";
import Valor from "../../public/images/solution/Calorifugeage/avantages/valorisation-et-securite.svg";
import ConfortThermique from "../../public/images/solution/Calorifugeage/avantages/confort-thermique.svg";
import Rapidite from "../../public/images/solution/Calorifugeage/avantages/rapidite-d-execution.svg";
import AucuneDemarche from "../../public/images/solution/Calorifugeage/avantages/aucune-demarche-admin.svg";
import FSyndic from "../../public/images/solution/Calorifugeage/financement/copro.svg";
import FBailleurs from "../../public/images/solution/Calorifugeage/financement/bailleurs-sociaux.svg";
import FCollectivite from "../../public/images/solution/Calorifugeage/financement/collectivites-administration.svg";
import FSante from "../../public/images/solution/Calorifugeage/financement/organisme-sante.svg";
import FTertiaire from "../../public/images/solution/Calorifugeage/financement/tertiaire.svg";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Heading as="h4" variant="section-etapes">
        {title}
      </Heading>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const Solution = () => (
  <Layout title="Calorifugeage">
    <Container maxW="container.xl">
      <Box>
        <Heading as="h2" variant="section-title">
          Le Calorifugeage, comment ça marche ?
        </Heading>
      </Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        display="flex"
        alignItems="flex-start"
        mt={{ md: "2rem" }}
      >
        <Box flex="0.5" maxW={{ md: "600px" }} mr={{ md: "50px" }}>
          <Text pb="4">
            Le calorifugeage intervient afin de permettre à vos canalisations de
            ne pas subir des fuites de chaleur et donc de ne pas engendrer une
            hausse de consommation d’énergie.{" "}
          </Text>
          <Text pb="4">
            De fait, il permet d’optimiser votre confort thermique tout en
            assurant la durée de vie de vos installations d’eau chaude et de
            chauffage.
          </Text>
          <Text pb="4">
            En effet, cette méthode consiste à isoler les tuyaux des
            canalisations qui se trouvent dans des pièces non chauffées, comme
            par exemple un garage ou une cave, par lesquels l’eau ainsi que les
            fluides caloporteurs circulent.
          </Text>
          <Text pb="4">
            Le calorifugeage aura pour but principal de réduire les déperditions
            thermiques en préservant la chaleur dans vos systèmes de chauffage
            et dans votre plomberie.
          </Text>
          <Box
            bgGradient="linear(160deg, #1AB11D14, #F2793014)"
            maxWidth="600px"
          >
            <Heading
              as="h2"
              variant="section-title"
              py="3"
              display="flex"
              justifyContent="center"
            >
              Les avantages
            </Heading>
            <Box pb="6">
              <HStack
                justifyContent="center"
                alignItems="center"
                mb={12}
                spacing="30"
              >
                <Image src={CEE} alt="Dispositif CEE" width="60" height="60" />
                <Heading as="h3" variant="avantages-calo">
                  100% gratuits grâce au dispositif des CEE
                </Heading>
              </HStack>
              <HStack
                justifyContent="center"
                alignItems="center"
                mb={12}
                spacing="30"
              >
                <Image src={Gain} alt="Dispositif CEE" width="60" height="60" />
                <Heading as="h3" variant="avantages-calo">
                  Gain de 15% à 25% par an sur la facture d’énergie
                </Heading>
              </HStack>
              <HStack
                justifyContent="center"
                alignItems="center"
                mb={12}
                spacing="30"
              >
                <Image
                  src={DeperditionThermique}
                  alt="Déperdition thermique par mètre linéaire divisé par 6"
                  width="60"
                  height="60"
                />
                <Heading as="h3" variant="avantages-calo">
                  Déperdition thermique par mètre linéaire divisé par 6
                </Heading>
              </HStack>
              <HStack
                justifyContent="center"
                alignItems="center"
                mb={12}
                spacing="30"
              >
                <Image
                  src={Valor}
                  alt="Valorisation et sécurisation de vos installations CEE"
                  width="60"
                  height="60"
                />
                <Heading as="h3" variant="avantages-calo">
                  Valorisation et sécurisation de vos installations
                </Heading>
              </HStack>
              <HStack
                justifyContent="center"
                alignItems="center"
                mb={12}
                spacing="30"
              >
                <Image
                  src={ConfortThermique}
                  alt="Confort thermique toute l’année"
                  width="60"
                  height="60"
                />
                <Heading as="h3" variant="avantages-calo">
                  Confort thermique toute l’année
                </Heading>
              </HStack>
              <HStack
                justifyContent="center"
                alignItems="center"
                mb={12}
                spacing="30"
              >
                <Image
                  src={Rapidite}
                  alt="Rapidité d’exécution"
                  width="60"
                  height="60"
                />
                <Heading as="h3" variant="avantages-calo">
                  Rapidité d’exécution
                </Heading>
              </HStack>
              <HStack
                justifyContent="center"
                alignItems="center"
                mb={12}
                spacing="30"
              >
                <Image
                  src={AucuneDemarche}
                  alt="Aucune démarche administrative"
                  width="60"
                  height="60"
                />
                <Heading as="h3" variant="avantages-calo">
                  Aucune démarche administrative
                </Heading>
              </HStack>{" "}
            </Box>
          </Box>
          <Box mt={12}>
            <Image src={pourquoi} alt="Le calorifugeage comment ça marche ?" />
          </Box>
        </Box>
        <Box flex="0.5">
          <Image src={comment} alt="Le calorifugeage comment ça marche ?" />
          <Box>
            <Heading as="h2" variant="section-title">
              Pourquoi réaliser ces travaux ?
            </Heading>
            <Text pb={4}>
              En limitant les pertes de chaleur vous réduisez votre consommation
              énergétique de plus de 15% ; ce qui par la même occasion engendre
              des baisses sur vos factures.{" "}
            </Text>
            <Text pb={4}>
              En hiver, les chocs de température considérables produisent
              inévitablement des déperditions de chaleur importantes, notamment
              lorsque les équipements sont mal isolés.
            </Text>
            <Text>
              Vos canalisations sont exposées au gel ainsi qu’au dégel, certains
              dangers sont alors présents et nuisent considérablement à vos
              installations :
            </Text>
            <UnorderedList color={"#F27930"} fontFamily="Helvetica Bold" pb={4}>
              <ListItem>
                Arrêt du système d’eau ; l’eau ne circulant plus à cause du gel…
              </ListItem>
              <ListItem>
                Fuites d’eau conséquentes lors du dégel ; les tuyaux ayant été
                déformés par le gel, certaines soudures peuvent céder
              </ListItem>
            </UnorderedList>
            <Text pb={4}>
              De plus, le calorifugeage permet également de limiter la
              prolifération des légionnelles en maintenant l’eau chaude à
              température constante.
            </Text>
            <Text pb={4}>
              Au-delà des économies d’énergie, ce sont vos installations que
              vous protégez en isolant votre tuyauterie.
            </Text>
            <Text pb={4}>
              De fait, ces travaux donneront une valeur ajoutée à vos
              installations.
            </Text>
            <Text pb={4}>
              Grâce à son efficacité, le calorifugeage est donc l’une des
              solutions contre vos problèmes de température aussi bien en hiver
              qu’en été.
            </Text>
            <Text pb={4}>
              Enfin, la mise en place réalisée par un professionnel est éligible
              aux subventions des Certificats d’Économies d’Énergie (CEE) ;vos
              travaux sont donc financés à 100 %.
            </Text>
            <Text pb={4}>
              Attention ! Certaines normes sont à respecter pour bénéficier de
              ce dispositif.
            </Text>
          </Box>
        </Box>
      </Stack>
      <Stack
        direction={{ base: "column", md: "row" }}
        display="flex"
        alignItems="flex-start"
        mt={{ md: "2rem" }}
      >
        <Box flex="0.75" mr={{ md: "50px" }}>
          <Heading as="h2" variant="section-title">
            Installation
          </Heading>
          <Text pb={4}>
            La pose des coquilles flexibles est simple car celles-ci s’adaptent
            à tous types de tuyaux. Les matériaux utilisés pour le calorifugeage
            sont très résistants, ils peuvent supporter des hautes températures
            et protègent de la condensation. En fonction de la typologie de
            l’installation et des éléments à isoler. L’efficacité du
            calorifugeage dépend de plusieurs éléments tels que l’épaisseur de
            l’isolant, la conductivité thermique, et le diamètre extérieur du
            tube.
          </Text>

          <Text pb={4}>
            Plusieurs procédés peuvent être utilisés pour isoler les tuyaux :
            <UnorderedList
              color={"#F27930"}
              fontFamily="Helvetica Bold"
              pb={4}
              marginInlineStart={8}
            >
              <ListItem>Coquilles en fibres minérales.</ListItem>
              <ListItem>Mousse de polyuréthane ou polyéthylène.</ListItem>
              <ListItem>Manchons en caoutchouc cellulaire.</ListItem>
            </UnorderedList>
          </Text>
          <Text pb={4}>
            Ces matériaux très résistants peuvent supporter des températures de
            100°, alors que la température des fluides caloporteurs ou de l’eau
            chaude dépasse rarement 60°. <br />
            Un revêtement de protection supplémentaire peut être nécessaire :
            aluminium, toile de plâtre ou PVC. Si la tuyauterie se trouve en
            extérieur, on place plutôt des coquilles en acier résistantes au
            froid, aux intempéries et aux attaques de rongeurs. <br />
            La pose est très facile car les coquilles flexibles s’adaptent à
            toutes les formes de tuyaux. Pour les surfaces moins accessibles, il
            est possible d’utiliser des techniques telles que :
            <UnorderedList
              color={"#F27930"}
              fontFamily="Helvetica Bold"
              pb={4}
              marginInlineStart={8}
            >
              <ListItem>
                L’injection ou la projection de mousse polyuréthane.
              </ListItem>
              <ListItem>Le soufflage ou le flocage de laine minérale.</ListItem>
            </UnorderedList>
          </Text>
        </Box>
        <Box flex="0.25">
          <Image src={installation} alt="Installation du calorifugeage " />
        </Box>
      </Stack>
      <Box my={14}>
        <Heading as="h2" variant="section-title" py="3">
          Financement
        </Heading>
        <Box>
          <Box
            bgGradient="linear(160deg, #1AB11D14, #F2793014)"
            height="100px"
            display="flex"
            alignItems="center"
            p="6"
            mb="6"
            justifyContent="space-evenly"
          >
            <Box>
              <Image
                src={FSyndic}
                alt="syndic de copropriété"
                height="60"
                width="60"
              ></Image>
            </Box>
            <Heading
              as="h3"
              fontSize={26}
              textTransform="uppercase"
              color="#F27930"
            >
              Syndic de copropriété
            </Heading>
            <Text color="#1AB107" fontFamily="Helvetica Heavy" fontSize={26}>
              100 %
            </Text>
          </Box>
          <Box
            bgGradient="linear(160deg, #1AB11D14, #F2793014)"
            height="120px"
            display="flex"
            alignItems="center"
            p="6"
            mb="6"
            justifyContent="space-evenly"
          >
            <Box>
              <Image
                src={FBailleurs}
                alt="Bailleurs sociaux"
                height="60"
                width="60"
              ></Image>
            </Box>
            <Heading
              as="h3"
              fontSize={26}
              textTransform="uppercase"
              color="#F27930"
            >
              Bailleurs Sociaux
            </Heading>
            <Text color="#1AB107" fontFamily="Helvetica Heavy" fontSize={26}>
              100 %
            </Text>
          </Box>
          <Box
            bgGradient="linear(160deg, #1AB11D14, #F2793014)"
            height="120px"
            display="flex"
            alignItems="center"
            p="6"
            mb="6"
            justifyContent="space-evenly"
          >
            <Box>
              <Image
                src={FSante}
                alt="organisme de santé"
                height="60"
                width="60"
              ></Image>
            </Box>
            <Heading
              as="h3"
              fontSize={26}
              textTransform="uppercase"
              color="#F27930"
            >
              Organisme de santé
            </Heading>
            <Text color="#1AB107" fontFamily="Helvetica Heavy" fontSize={26}>
              100 %
            </Text>
          </Box>
          <Box
            bgGradient="linear(160deg, #1AB11D14, #F2793014)"
            height="120px"
            display="flex"
            alignItems="center"
            p="6"
            mb="6"
            justifyContent="space-evenly"
          >
            <Box>
              <Image
                src={FCollectivite}
                alt="collectivité - administration"
                height="60"
                width="60"
              ></Image>
            </Box>
            <Heading
              as="h3"
              fontSize={26}
              textTransform="uppercase"
              color="#F27930"
            >
              collectivité - administration
            </Heading>
            <Text color="#1AB107" fontFamily="Helvetica Heavy" fontSize={26}>
              100 %
            </Text>
          </Box>
        </Box>
        <Box
          bgGradient="linear(160deg, #1AB11D14, #F2793014)"
          height="120px"
          display="flex"
          alignItems="center"
          p="6"
          mb="6"
          justifyContent="space-evenly"
        >
          <Box>
            <Image
              src={FTertiaire}
              alt="teritaires - entreprises"
              height="80"
              width="80"
            ></Image>
          </Box>
          <Heading
            as="h3"
            fontSize={26}
            textTransform="uppercase"
            color="#F27930"
          >
            Tertiaire - entreprises
          </Heading>
          <Text color="#1AB107" fontFamily="Helvetica Heavy" fontSize={26}>
            100 %
          </Text>
        </Box>
      </Box>
      <Box mt={24}>
        <Flex flexDirection="column" alignItems="center" mb={8}>
          <Heading as="h2" color="#F27930" textTransform="uppercase">
            Comment faire pour en bénéficier ?
          </Heading>
          <Heading as="h3" color="#1AB107">
            Vos travaux d’amélioration énergétique
          </Heading>
          <Heading as="h2" color="#F27930" textTransform="uppercase">
            FINANCÉS à 100% en 6 étapes
          </Heading>
        </Flex>

        <Box>
          <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Feature
                icon={<Icon as={FcAssistant} w={10} h={10} />}
                title={"Premier contact"}
                text={
                  "Nous vous expliquons toutes les étapes du projet et validons avec vous les critères d’éligibilité au dispositif des CEE avant la visite d’un technicien."
                }
              />
              <Feature
                icon={<Icon as={FcSearch} w={10} h={10} />}
                title={"Visite Technique"}
                text={
                  "Notre techniciense déplace sur site afin de confirmer la faisabilité du projet, procéder aux métrés et rédiger un rapport complet en vue de l’installation."
                }
              />
              <Feature
                icon={<Icon as={FcOk} w={10} h={10} />}
                title={"Validation CEE"}
                text={
                  "Votre devis à 0 € vous est transmis accompagné de l’offre de prime correspondante. Ces documents officialisent la prise en charge à 100% de vos travaux de calorifugeage."
                }
              />
              <Feature
                icon={<Icon as={FcInTransit} w={10} h={10} />}
                title={"Réalisation des travaux"}
                text={
                  "Nos installateurs, accompagnés d’un chef de chantier, viennent procéder à l’installation. Aucune surprise le jour du chantier, car la visite technique a permis de planifier l’installation dans ses moindres détails et anticiper les contraintes éventuelles."
                }
              />
              <Feature
                icon={<Icon as={FcShipped} w={10} h={10} />}
                title={"Accréditation Cofrac"}
                text={
                  "Une fois notre travail réalisé, un organisme externe agréé Cofrac se déplace afin de vérifier la conformité de l’installation."
                }
              />
              <Feature
                icon={<Icon as={FcApproval} w={10} h={10} />}
                title={"Attestation sur l'honneur"}
                text={
                  "Nous établissons votre Attestation sur l’Honneur, qui reprend en détail tous les aspects de votre installation. Ce document atteste de la bonne réalisation de vos travaux et de leur éligibilité au dispositif des CEE."
                }
              />
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Container>
  </Layout>
);
export default Solution;
