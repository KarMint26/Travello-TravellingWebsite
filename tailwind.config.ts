import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./src/**/*.{html,css,js,ts}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        NotoSans: ["Noto Sans"],
        Volkhov: ["Volkhov"],
      },
      colors: {
        primaryColor: "#DF6951",
        secondaryColor: "#F1A501",
      },
      textShadow: {
        sm: "1px 1px 1px rgba(0, 0, 0, .5)",
        DEFAULT: "0 2px 4px rgba(0, 0, 0, .5)",
        lg: "0 8px 16px rgba(0, 0, 0, .5)",
        none: "0 0 0 rgba(0, 0, 0, 0)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
} satisfies Config;
