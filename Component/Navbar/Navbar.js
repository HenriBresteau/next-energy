import {
  Container,
  Flex,
  Heading,
  Text,
  IconButton,
  Stack,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import NextLogo from "../../public/images/logo/LOGO-GENERIQUE.svg";

export const Navbar = () => {
  return (
    <Box as="nav" className={styles.nav}>
      <Container className={styles.navbar}>
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Link href="/">
              <a>
                <Image src={NextLogo} alt="logo next" width={300} height={64} />
              </a>
            </Link>
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Link href="/">Acceuil</Link>
          <Link href="/contact">Contact</Link>
        </Stack>

        <Box
          ml={2}
          display={{ base: "inline-block", md: "none" }}
          align="right"
        >
          <Menu id="navbar-menu">
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <Link href="/" passHref>
                <MenuItem>Acceuil</MenuItem>
              </Link>
              <Link href="/contact" passHref>
                <MenuItem>Contact</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
};
export default Navbar;
