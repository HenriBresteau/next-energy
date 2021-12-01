import { extendTheme } from "@chakra-ui/react";

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 32,
        textUnderlineOffset: 6,
        textDecorationColor: "#227c3d",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
};
const theme = extendTheme({ components });
export default theme;
