const colors = {
  blue: { 200: "#B1D0FF", 500: "#267DFF", 600: "#0066FF" },
  gray: { 200: "#E3E5EA", 700: "#2B3447" },
  teal: { 300: "#59C2C9" },
  slate: { 500: "#6E7894", 400: "#B0B6CA" },
  neutral: { 100: "#F5F5F5", 200: "#E6E9E6", 500: "#7C877C" },
  stone: { 400: "#AE9075", 500: "#8A7767" },
  zinc: { 300: "#D9D9D9" },
  violet: { 50: "#F2F4FF" },
  black: "#000",
  white: "#FFF",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    colors: {
      ...colors,
      button: {
        primary: colors.blue[600],
      },
      primary: "#031A34",
      secondary: colors.slate[500],
      divider: "#D1D5E4",
    },
    extend: {},
  },
  plugins: [],
};
