import styles from "./footer.module.scss";
import Image from "next/image";
import logoNext from "../../public/images/logo/LOGO-GENERIQUE.svg";
import { Text } from "@chakra-ui/layout";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        src={logoNext}
        alt="logo Next Energy"
        width={250}
        height={53}
      ></Image>
      <Text className={styles.credits}>
        &copy; {new Date().getFullYear()} Next Energy. All Rights Reserved.
      </Text>
    </footer>
  );
};
