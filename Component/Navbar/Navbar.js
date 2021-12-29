import {
  Container,
  Flex,
  Text,
  IconButton,
  Stack,
  Box,
  Link,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Collapse,
  Divider,
} from "@chakra-ui/react";
import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import styles from "./navbar.module.scss";
import Image from "next/image";
import NextLink from "next/link";
import NextLogo from "../../public/images/logo/LOGO-GENERIQUE.svg";
import NemuroVert from "../../public/images/logo/numero-vert.svg";

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Container
      as="nav"
      className={styles.nav}
      maxW="container.xl"
      px={{ base: 0 }}
    >
      <Flex
        bg={"white"}
        minH={"70px"}
        py={{ base: 2, md: 4 }}
        align={"center"}
        flexDirection="column"
        maxW="container.xl"
      >
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          width={{ base: "auto", md: "full" }}
          justifyContent="space-between"
          flexGrow={1}
        >
          <Box ml={{ md: 8 }}>
            <NextLink href="/">
              <a>
                <Image src={NextLogo} alt="logo next" width={300} height={64} />
              </a>
            </NextLink>
          </Box>
          <Box mr={5}>
            <NextLink href="tel:0805037555">
              <a>
                <Image
                  src={NemuroVert}
                  alt="numero vert"
                  width={300}
                  height={64}
                />
              </a>
            </NextLink>
          </Box>
        </Flex>
        <Divider />
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "100%" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 4 }}
          spacing={{ md: 6 }}
          ml={{ md: 12 }}
        >
          {navItems.map((navItem) => (
            <Box key={navItem.label}>
              {navItem.children ? (
                <Popover trigger={"hover"} placement="bottom-start">
                  <NextLink href={navItem.href} passHref>
                    <PopoverTrigger>
                      <Link
                        p={2}
                        color="next"
                        _hover={{
                          textDecoration: "none",
                          color: "#61727B",
                        }}
                      >
                        {navItem.label}
                      </Link>
                    </PopoverTrigger>
                  </NextLink>
                  <PopoverContent
                    border={0}
                    boxShadow={"xl"}
                    p={4}
                    rounded={"xl"}
                    minW={"2xs"}
                    width={"2xs"}
                  >
                    <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                </Popover>
              ) : (
                <NextLink href={navItem.href} passHref>
                  <Link
                    color="next"
                    p={2}
                    _hover={{
                      textDecoration: "none",
                      color: "#61727B",
                    }}
                  >
                    {navItem.label}
                  </Link>
                </NextLink>
              )}
            </Box>
          ))}
        </Stack>

        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Container>
  );
};
export default Navbar;

const DesktopSubNav = ({ label, href }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: "#61727bcf" }}
      >
        <Stack direction={"row"} align={"center"}>
          <Box>
            <Text
              transition={"all .3s ease"}
              _groupHover={{ color: "white" }}
              fontWeight={500}
            >
              {label}
            </Text>
          </Box>
        </Stack>
      </Link>
    </NextLink>
  );
};
const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: "none" }} bg="whitesmoke">
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex py={2} justify={"space-between"} align={"center"}>
        <NextLink href={href} passHref fontWeight={600} color={"next"}>
          {label}
        </NextLink>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <NextLink key={child.label} href={child.href} passHref>
                <Link py={2}>{child.label}</Link>
              </NextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
const navItems = [
  { label: "CEE", href: "/CEE" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      {
        label: "Calorifugeage",
        href: "/solution/calorifugeage",
      },
      {
        label: "Points Singuliers",
        href: "/solution/points-singuliers",
      },
    ],
  },
  {
    label: "Vous êtes ? ",
    href: "/vous-etes",
    children: [
      {
        label: "Bailleurs Sociaux",
        href: "/vous-etes/bailleurs-sociaux",
      },
      {
        label: "Collectivité",
        href: "/vous-etes/collectivite",
      },
      {
        label: "Copropriete",
        href: "/vous-etes/copropriete",
      },
      {
        label: "Entreprise",
        href: "/vous-etes/entreprise",
      },
      {
        label: "Organisme de santé",
        href: "/vous-etes/organisme-sante",
      },
    ],
  },
  { label: "Réalisations", href: "/realisations" },
  { label: "Références", href: "/references" },
  { label: "Contact", href: "/contact" },
];
