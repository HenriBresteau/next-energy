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
          Le Calorifugeage, comment ??a marche ?
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
            Le calorifugeage intervient afin de permettre ?? vos canalisations de
            ne pas subir des fuites de chaleur et donc de ne pas engendrer une
            hausse de consommation d?????nergie.{" "}
          </Text>
          <Text pb="4">
            De fait, il permet d???optimiser votre confort thermique tout en
            assurant la dur??e de vie de vos installations d???eau chaude et de
            chauffage.
          </Text>
          <Text pb="4">
            En effet, cette m??thode consiste ?? isoler les tuyaux des
            canalisations qui se trouvent dans des pi??ces non chauff??es, comme
            par exemple un garage ou une cave, par lesquels l???eau ainsi que les
            fluides caloporteurs circulent.
          </Text>
          <Text pb="4">
            Le calorifugeage aura pour but principal de r??duire les d??perditions
            thermiques en pr??servant la chaleur dans vos syst??mes de chauffage
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
                  100% gratuits gr??ce au dispositif des CEE
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
                  Gain de 15% ?? 25% par an sur la facture d?????nergie
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
                  alt="D??perdition thermique par m??tre lin??aire divis?? par 6"
                  width="60"
                  height="60"
                />
                <Heading as="h3" variant="avantages-calo">
                  D??perdition thermique par m??tre lin??aire divis?? par 6
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
                  alt="Valorisation et s??curisation de vos installations CEE"
                  width="60"
                  height="60"
                />
                <Heading as="h3" variant="avantages-calo">
                  Valorisation et s??curisation de vos installations
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
                  alt="Confort thermique toute l???ann??e"
                  width="60"
                  height="60"
                />
                <Heading as="h3" variant="avantages-calo">
                  Confort thermique toute l???ann??e
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
                  alt="Rapidit?? d???ex??cution"
                  width="60"
                  height="60"
                />
                <Heading as="h3" variant="avantages-calo">
                  Rapidit?? d???ex??cution
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
                  alt="Aucune d??marche administrative"
                  width="60"
                  height="60"
                />
                <Heading as="h3" variant="avantages-calo">
                  Aucune d??marche administrative
                </Heading>
              </HStack>{" "}
            </Box>
          </Box>
          <Box mt={12}>
            <Image src={pourquoi} alt="Le calorifugeage comment ??a marche ?" />
          </Box>
        </Box>
        <Box flex="0.5">
          <Image src={comment} alt="Le calorifugeage comment ??a marche ?" />
          <Box>
            <Heading as="h2" variant="section-title">
              Pourquoi r??aliser ces travaux ?
            </Heading>
            <Text pb={4}>
              En limitant les pertes de chaleur vous r??duisez votre consommation
              ??nerg??tique de plus de 15% ; ce qui par la m??me occasion engendre
              des baisses sur vos factures.{" "}
            </Text>
            <Text pb={4}>
              En hiver, les chocs de temp??rature consid??rables produisent
              in??vitablement des d??perditions de chaleur importantes, notamment
              lorsque les ??quipements sont mal isol??s.
            </Text>
            <Text>
              Vos canalisations sont expos??es au gel ainsi qu???au d??gel, certains
              dangers sont alors pr??sents et nuisent consid??rablement ?? vos
              installations :
            </Text>
            <UnorderedList color={"#F27930"} fontFamily="Helvetica Bold" pb={4}>
              <ListItem>
                Arr??t du syst??me d???eau ; l???eau ne circulant plus ?? cause du gel???
              </ListItem>
              <ListItem>
                Fuites d???eau cons??quentes lors du d??gel ; les tuyaux ayant ??t??
                d??form??s par le gel, certaines soudures peuvent c??der
              </ListItem>
            </UnorderedList>
            <Text pb={4}>
              De plus, le calorifugeage permet ??galement de limiter la
              prolif??ration des l??gionnelles en maintenant l???eau chaude ??
              temp??rature constante.
            </Text>
            <Text pb={4}>
              Au-del?? des ??conomies d?????nergie, ce sont vos installations que
              vous prot??gez en isolant votre tuyauterie.
            </Text>
            <Text pb={4}>
              De fait, ces travaux donneront une valeur ajout??e ?? vos
              installations.
            </Text>
            <Text pb={4}>
              Gr??ce ?? son efficacit??, le calorifugeage est donc l???une des
              solutions contre vos probl??mes de temp??rature aussi bien en hiver
              qu???en ??t??.
            </Text>
            <Text pb={4}>
              Enfin, la mise en place r??alis??e par un professionnel est ??ligible
              aux subventions des Certificats d?????conomies d?????nergie (CEE) ;vos
              travaux sont donc financ??s ?? 100 %.
            </Text>
            <Text pb={4}>
              Attention ! Certaines normes sont ?? respecter pour b??n??ficier de
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
            La pose des coquilles flexibles est simple car celles-ci s???adaptent
            ?? tous types de tuyaux. Les mat??riaux utilis??s pour le calorifugeage
            sont tr??s r??sistants, ils peuvent supporter des hautes temp??ratures
            et prot??gent de la condensation. En fonction de la typologie de
            l???installation et des ??l??ments ?? isoler. L???efficacit?? du
            calorifugeage d??pend de plusieurs ??l??ments tels que l?????paisseur de
            l???isolant, la conductivit?? thermique, et le diam??tre ext??rieur du
            tube.
          </Text>

          <Text pb={4}>
            Plusieurs proc??d??s peuvent ??tre utilis??s pour isoler les tuyaux :
            <UnorderedList
              color={"#F27930"}
              fontFamily="Helvetica Bold"
              pb={4}
              marginInlineStart={8}
            >
              <ListItem>Coquilles en fibres min??rales.</ListItem>
              <ListItem>Mousse de polyur??thane ou poly??thyl??ne.</ListItem>
              <ListItem>Manchons en caoutchouc cellulaire.</ListItem>
            </UnorderedList>
          </Text>
          <Text pb={4}>
            Ces mat??riaux tr??s r??sistants peuvent supporter des temp??ratures de
            100??, alors que la temp??rature des fluides caloporteurs ou de l???eau
            chaude d??passe rarement 60??. <br />
            Un rev??tement de protection suppl??mentaire peut ??tre n??cessaire :
            aluminium, toile de pl??tre ou PVC. Si la tuyauterie se trouve en
            ext??rieur, on place plut??t des coquilles en acier r??sistantes au
            froid, aux intemp??ries et aux attaques de rongeurs. <br />
            La pose est tr??s facile car les coquilles flexibles s???adaptent ??
            toutes les formes de tuyaux. Pour les surfaces moins accessibles, il
            est possible d???utiliser des techniques telles que :
            <UnorderedList
              color={"#F27930"}
              fontFamily="Helvetica Bold"
              pb={4}
              marginInlineStart={8}
            >
              <ListItem>
                L???injection ou la projection de mousse polyur??thane.
              </ListItem>
              <ListItem>Le soufflage ou le flocage de laine min??rale.</ListItem>
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
                alt="syndic de copropri??t??"
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
              Syndic de copropri??t??
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
                alt="organisme de sant??"
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
              Organisme de sant??
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
                alt="collectivit?? - administration"
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
              collectivit?? - administration
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
            Comment faire pour en b??n??ficier ?
          </Heading>
          <Heading as="h3" color="#1AB107">
            Vos travaux d???am??lioration ??nerg??tique
          </Heading>
          <Heading as="h2" color="#F27930" textTransform="uppercase">
            FINANC??S ?? 100% en 6 ??tapes
          </Heading>
        </Flex>

        <Box>
          <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Feature
                icon={<Icon as={FcAssistant} w={10} h={10} />}
                title={"Premier contact"}
                text={
                  "Nous vous expliquons toutes les ??tapes du projet et validons avec vous les crit??res d?????ligibilit?? au dispositif des CEE avant la visite d???un technicien."
                }
              />
              <Feature
                icon={<Icon as={FcSearch} w={10} h={10} />}
                title={"Visite Technique"}
                text={
                  "Notre techniciense d??place sur site afin de confirmer la faisabilit?? du projet, proc??der aux m??tr??s et r??diger un rapport complet en vue de l???installation."
                }
              />
              <Feature
                icon={<Icon as={FcOk} w={10} h={10} />}
                title={"Validation CEE"}
                text={
                  "Votre devis ?? 0 ??? vous est transmis accompagn?? de l???offre de prime correspondante. Ces documents officialisent la prise en charge ?? 100% de vos travaux de calorifugeage."
                }
              />
              <Feature
                icon={<Icon as={FcInTransit} w={10} h={10} />}
                title={"R??alisation des travaux"}
                text={
                  "Nos installateurs, accompagn??s d???un chef de chantier, viennent proc??der ?? l???installation. Aucune surprise le jour du chantier, car la visite technique a permis de planifier l???installation dans ses moindres d??tails et anticiper les contraintes ??ventuelles."
                }
              />
              <Feature
                icon={<Icon as={FcShipped} w={10} h={10} />}
                title={"Accr??ditation Cofrac"}
                text={
                  "Une fois notre travail r??alis??, un organisme externe agr???? Cofrac se d??place afin de v??rifier la conformit?? de l???installation."
                }
              />
              <Feature
                icon={<Icon as={FcApproval} w={10} h={10} />}
                title={"Attestation sur l'honneur"}
                text={
                  "Nous ??tablissons votre Attestation sur l???Honneur, qui reprend en d??tail tous les aspects de votre installation. Ce document atteste de la bonne r??alisation de vos travaux et de leur ??ligibilit?? au dispositif des CEE."
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
