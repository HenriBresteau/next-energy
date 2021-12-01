import { ChakraProvider } from "@chakra-ui/react";
import Main from "../Component/Layouts/main";
import theme from "../lib/theme";
import "../styles/globals.css";

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  );
}

export default Website;
