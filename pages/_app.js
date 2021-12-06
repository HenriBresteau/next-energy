import { ChakraProvider } from "@chakra-ui/react";
import Main from "../Component/Layouts/main";
import theme from "../lib/theme";
import "../styles/globals.css";

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  );
}

export default Website;
