import styles from "./footer.module.scss";
import Image from "next/image";
import logoNext from "../../public/images/logo/LOGO-GENERIQUE.svg";
import { Form } from "../Form/form";
import { SimpleGrid, Text, Stack } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SimpleGrid templateColumns={{ md: "1fr  1fr" }} spacing={8}>
        <Form />
        <Stack spacing={8} p={2}>
          <Image
            src={logoNext}
            alt="logo Next Energy"
            width={250}
            height={53}
          ></Image>
          <Text className={styles.credits}>
            &copy; {new Date().getFullYear()} Next Energy. All Rights Reserved.
          </Text>
        </Stack>
      </SimpleGrid>
    </footer>
  );
};
