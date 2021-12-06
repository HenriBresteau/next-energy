import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import Main from "../Component/Layouts/main";
import theme from "../lib/theme";
import "../styles/globals.css";

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  );
}

export default Website;
