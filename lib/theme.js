import { extendTheme } from "@chakra-ui/react";

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        textTransform: "uppercase",
        fontWeight: "800",
        color: "#1AB107",
        fontSize: 32,
        textUnderlineOffset: 6,
        textDecorationColor: "#52656f",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
      "section-CEE": {
        textTransform: "uppercase",
        fontWeight: "900",
        color: "#61727B",
        fontSize: 52,
        marginTop: 3,
        marginBottom: 4,
      },
      "section-sub": {
        color: "#1AB107",
        fontSize: 28,
        marginTop: 3,
        fontWeight: "800",
      },
    },
  },
};
const styles = {
  global: {
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
  heading: "arial",
  body: "arial",
};
const theme = extendTheme({ components, fonts, colors, styles });
export default theme;
