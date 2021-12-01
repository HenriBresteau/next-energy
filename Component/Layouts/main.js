import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { Footer } from "../Footer/footer";
import Navbar from "../Navbar/Navbar";
import styles from "./main.module.scss";

export default function Main({ children }) {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Next Energy - Expert en optimisation énergétique"
        />
        <meta name="author" content="Next Energy" />
        <meta name="author" content="Henri Bresteau" />
        <link rel="apple-touch-icon" href="/favion.ico" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Next Energy - Expert en optimisation énergétique </title>
      </Head>
      <Navbar />
      <Container className={styles.main} pt={14} pb={8} maxW="container.md">
        {children}
      </Container>
      <Footer />
    </Box>
  );
}