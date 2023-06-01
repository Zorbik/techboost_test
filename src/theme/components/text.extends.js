import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const textCard = defineStyle({
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontHeight: "500",
  fontSize: "20px",
  lineHeight: "24px",
  color: "textColor",
  textAlign: "center",
});

export const textTheme = defineStyleConfig({
  variants: {
    textCard,
  },
});
