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
      "section-sub": {
        color: "#1AB107",
        fontSize: 26,
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
    },
  },
};
const colors = {
  next: "#1AB107",
  gris: "#61727B",
};
const fonts = {
  heading: "Raleway",
  body: "Open Sans",
};
const theme = extendTheme({ components, fonts, colors, styles });
export default theme;
