const SIZE = {
  xs: "475px", // for mobiles
  sm: "576px", // for mobiles
  md: "768px", // for medium tablets
  lg: "992px", // for large tablets
  xl: "1200px", // for medium laptop
  xxl: "1400px", // for large laptop
  xxxl: "1900px", // for desktop
};

export const DEVICE = {
  xs: `(min-width: ${SIZE.xs})`, // for mobiles
  sm: `(min-width: ${SIZE.sm})`, // for mobiles
  md: `(min-width: ${SIZE.md})`, // for medium tablets
  lg: `(min-width: ${SIZE.lg})`, // for large tablets
  xl: `(min-width: ${SIZE.xl})`, // for medium laptop
  xxl: `(min-width: ${SIZE.xxl})`, // for large laptop
  xxxl: `(min-width: ${SIZE.xxxl})`, // for desktop
};
