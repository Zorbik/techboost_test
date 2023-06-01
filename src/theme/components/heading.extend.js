import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const homePageHeading = defineStyle({
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontHeight: "600",
  color: "textColor",

  textAlign: "center",
  margin: "100px auto",
});

export const headingTheme = defineStyleConfig({
  variants: {
    homePageHeading,
  },
});
