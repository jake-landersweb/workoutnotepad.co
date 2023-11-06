const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#418a2f",
        bg: "#e1dcd2",
        txt: {
          DEFAULT: '#231F20',
          50: '#8C7D81',
          100: '#847579',
          200: '#74676A',
          300: '#64585B',
          400: '#544A4D',
          500: '#433C3E',
          600: '#332D2F',
          700: '#231F20',
          800: '#1E1A1B',
          900: '#181516',
          950: '#151314'
        },
        cell: {
          DEFAULT: "#F5F0E6",
          50: "#FCFAF6",
          100: "#F9F7F1",
          200: "#F5F0E6",
          300: "#F1E9DB",
          400: "#ECE3D0",
          500: "#E8DCC5",
          600: "#E4D6BA",
          700: "#DFCFAF",
          800: "#DBC9A4",
          900: "#D6C29A",
          950: "#D4BF94",
        }
      }
    },
  },
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "wn", // default theme from the themes object
      defaultExtendTheme: "wn", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        wn: {
          layout: {},
          colors: {
            background: "#e1dcd2",
            primary: "#418a2f"
          },
        },
      },
    }),
    require('@tailwindcss/typography'),
  ],
}

