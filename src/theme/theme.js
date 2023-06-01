import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./components/button.extend";
import { textTheme } from "./components/text.extends";
import { headingTheme } from "./components/heading.extend";

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "992px",
  xl: "1280px",
  "2xl": "1536px",
};

const shadows = {
  btnShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
  cardShadow: "-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)",
  lineShadow:
    "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF",
};

const colors = {
  bodyColor: "#FFFFFF",
  accentColor: "#471CA9",
  textColor: "#EBD8FF",
  btnTextColor: "#373737",
  activeBtnColor: "#5CD3A8",
  headerBtn: "#e9fcef",
  logoColor: "#FFFFFF",
  cardBg:
    "linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)",
};

const radii = {
  none: "0",
  sm: "4px",
  base: "10px",
  md: "20px",
  full: "9999px",
};

const styles = {
  global: () => ({
    body: {
      bg: "bodyColor",
      color: "textColor",
    },
  }),
};

const fonts = {
  heading: `'Montserrat', sans-serif`,
  body: `'Montserrat', sans-serif`,
};

const components = {
  Text: textTheme,
  Button: buttonTheme,
  Heading: headingTheme,
};

const theme = extendTheme({
  colors,
  shadows,
  styles,
  components,
  breakpoints,
  fonts,
  radii,
});

export default theme;
