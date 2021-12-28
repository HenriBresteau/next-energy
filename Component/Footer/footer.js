import styles from "./footer.module.scss";
import Image from "next/image";
import logoNext from "../../public/images/logo/LOGO-GENERIQUE.svg";
import { Form } from "../Form/form";
import { SimpleGrid, Text, Stack, Box } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SimpleGrid>
        <Form />
        <Stack>
          <Box align="center">
            <Image
              src={logoNext}
              alt="logo Next Energy"
              width={260}
              height={45}
            ></Image>
          </Box>
          <Text className={styles.credits}>
            &copy; {new Date().getFullYear()} Next Energy. Tous droits réservés.
          </Text>
        </Stack>
      </SimpleGrid>
    </footer>
  );
};
