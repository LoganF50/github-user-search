const defaultTheme = {
  borderStyles: {
    none: "none",
    solid: "solid",
  },
  borderRadius: {
    none: "0",
    base100: "0.25rem",
    base200: "0.375rem",
    base300: "0.5rem",
    base400: "1rem",
    base500: "2rem",
    circular: "9999rem",
  },
  borderWidth: {
    none: "0",
    base100: "1px",
    base200: "2px",
    base300: "4px",
    base400: "8px",
  },
  breakpoint: {
    mobileSm: "320px",
    mobileMd: "375px",
    mobileLg: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopLg: "1440px",
    desktop: "2560px",
  },
  color: {},
  duration: {
    short: "250ms",
    medium: "375ms",
    long: "500ms",
  },
  fontFamily: { primary: "'Space Mono', monospace" },
  fontSize: {
    base100: "0.75rem",
    base200: "0.875rem",
    base300: "1rem",
    base400: "1.125rem",
    base500: "1.25rem",
    base600: "1.5rem",
    base700: "2rem",
    base800: "3rem",
    base900: "4rem",
    base1000: "6rem",
  },
  fontWeight: {
    normal: "400",
    bold: "700",
  },
  spacing: {
    base100: "0.125rem",
    base200: "0.25rem",
    base300: "0.5rem",
    base400: "0.75rem",
    base500: "1rem",
    base600: "1.25rem",
    base700: "1.75rem",
    base800: "2rem",
    base900: "2.25rem",
    base1000: "3rem",
  },
};

const darkTheme = {
  name: "dark",
  color: {
    ...defaultTheme.color,
  },
};

const lightTheme = {
  name: "light",
  color: {
    ...defaultTheme.color,
  },
};

export const Themes = {
  dark: {
    ...defaultTheme,
    name: darkTheme.name,
    color: darkTheme.color,
  },
  light: {
    ...defaultTheme,
    name: lightTheme.name,
    color: lightTheme.color,
  },
};
