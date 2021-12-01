import { ChakraProvider } from "@chakra-ui/react";
import Main from "../Component/Layouts/main";
import "../styles/globals.css";

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  );
}

export default Website;
