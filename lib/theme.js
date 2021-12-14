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
const colors = {
  next: "#1AB107",
};
const fonts = {
  heading: "Open Sans",
  body: "Raleway",
};
const theme = extendTheme({ components, fonts, colors });
export default theme;
