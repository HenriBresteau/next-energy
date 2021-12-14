import { extendTheme } from "@chakra-ui/react";

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 32,
        textUnderlineOffset: 6,
        textDecorationColor: "#8dc449",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
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
