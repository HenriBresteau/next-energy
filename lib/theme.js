import { extendTheme } from "@chakra-ui/react";
import "@fontsource/rubik";

const components = {
  Heading: {
    variants: {
      "section-title": {
        textTransform: "uppercase",
        fontWeight: "800",
        color: "#1AB107",
        fontSize: 32,
        fontSize: 46,
        marginTop: 3,
        marginBottom: 4,
      },
      "section-CEE": {
        textTransform: "uppercase",
        fontWeight: "800",
        color: "#61727B",
        fontSize: 48,
        marginTop: 3,
        marginBottom: 4,
      },
      "section-sub": {
        color: "#1AB107",
        fontSize: 28,
        marginTop: 3,
        fontWeight: "800",
      },
      "section-sub-gris": {
        color: "#52646E",
        fontSize: 40,
        fontWeight: "800",
      },
      "avantages-calo": {
        color: "#F27930",
        fontSize: 22,
        maxWidth: "320px",
        minWidth: "320px",
      },
      "section-home": {
        textTransform: "uppercase",
        fontWeight: "800",
        color: "#61727B",
        fontSize: 32,
      },
      "section-etapes": {
        textTransform: "uppercase",
        fontWeight: "800",
        color: "#1AB107",
        fontSize: 22,
      },
    },
  },
};
const styles = {
  global: {
    h2: {
      fontWeight: 800,
    },
    p: {
      color: "#61727B",
      fontSize: "18px",
    },
  },
};
const colors = {
  next: "#1AB107",
  gris: "#61727B",
};
const fonts = {
  heading: "Helvetica Heavy",
  body: "Helvetica Roman",
};
const theme = extendTheme({ components, fonts, colors, styles });
export default theme;
