import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const headerBtn = defineStyle({
  display: "flex",
  textAlign: "center",

  background: "headerBtn",
  color: "btnTextColor",

  border: "none",
  borderRadius: "base",
  padding: "14px 28px",

  fontFamily: "'Montserrat'",
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "22px",

  _hover: {
    transform: "scale(1.1)",
  },
  _active: {
    transform: "scale(0.9)",
  },
});

const followBtn = defineStyle({
  ...headerBtn,
  background: "textColor",
  w: "196px",
  h: "50px",
  mt: "26px",
  mx: "auto",
  shadow: "btnShadow",
});

const followingBtn = defineStyle({
  ...followBtn,
  background: "activeBtnColor",
});

export const buttonTheme = defineStyleConfig({
  variants: {
    followBtn,
    followingBtn,
    headerBtn,
  },
});
