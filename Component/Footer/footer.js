import styles from "./footer.module.scss";
import Image from "next/image";
import logoNext from "../../public/images/logo/LOGO-GENERIQUE.svg";
import { Form } from "../Form/form";
import { SimpleGrid, Text, Stack, Box, Container } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container maxW="container.xl">
        <SimpleGrid>
          <Form />
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Box align="center" mr={8}>
              <Image
                src={logoNext}
                alt="logo Next Energy"
                width={150}
                height={30}
              ></Image>
            </Box>
            <Text className={styles.credits}>
              &copy; {new Date().getFullYear()} Next Energy. Tous droits
              réservés.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </footer>
  );
};
