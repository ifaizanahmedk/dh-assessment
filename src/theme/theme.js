import { COLOR } from "./color";
import { FONT } from "./font";

const ThemeConfig = {
  colors: {
    primary: COLOR.BLUE_FACEBOOK,

    heading: COLOR.CHARCOAL,
    body: COLOR.GRAY,
    text: COLOR.CHARCOAL,

    background: COLOR.WHITE_SNOW,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  fonts: {
    primary: FONT.PRIMARY,
    secondary: FONT.SECONDARY,
  },
};

export default ThemeConfig;
