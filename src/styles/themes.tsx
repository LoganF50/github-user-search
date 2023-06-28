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
    background: {
      primary: "#1E2A47",
      secondary: "#141D2F",
    },
    button: {
      background: "#0079FF",
      backgroundHover: "#60ABFF",
      text: "#FFFFFF",
    },
    card: {
      text: "#FFFFFF",
    },
    error: "#F74646",
    header: {
      text: "#FFFFFF",
    },
    input: {
      placeholder: "#FFFFFF",
      text: "#FFFFFF",
    },
    primary: "#0079FF",
    text: "#FFFFFF",
    toggle: {
      hoverText: "#90A4D4",
      text: "#FFFFFF",
    },
  },
};

const lightTheme = {
  name: "light",
  color: {
    ...defaultTheme.color,
    background: {
      primary: "#FEFEFE",
      secondary: "#F6F8FF",
    },
    button: {
      background: "#0079FF",
      backgroundHover: "#60ABFF",
      text: "#FFFFFF",
    },
    card: {
      text: "#2B3442",
    },
    error: "#F74646",
    header: {
      text: "#222731",
    },
    input: {
      placeholder: "#4B6A9B",
      text: "#222731",
    },
    primary: "#0079FF",
    text: "#4B6A9B",
    toggle: {
      hoverText: "#222731",
      text: "#697C9A",
    },
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
