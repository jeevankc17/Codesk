/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nero: "#fff",
        "footer-header": "#0063b0",
        black: "#000",
        "aqua-deep": "#ff5a43",
        dimgray: "#666",
        "other-outlined-border": "rgba(0, 0, 0, 0.23)",
        "text-secondary": "rgba(0, 0, 0, 0.6)",
        "grey-grey-300": "#e0e0e0",
        "text-primary": "rgba(0, 0, 0, 0.87)",
        "grey-grey-400": "#bdbdbd",
        "grey-grey-700": "#616161",
        "wwwcodingalcom-mine-shaft": "#3a3a3a",
        lavenderblush: "rgba(255, 237, 235, 0.75)",
        "dim-green": "#58d1bd",
        "chateau-green": "#4aaf50",
        "dodger-blue": "#1f95f2",
        silver: "#c1c6ce",
        "gray-900": "#1d2026",
        "primary-500": "#ff6636",
        gray1: {
          "100": "#fbfbfb",
          "200": "#242424",
        },
        darkslategray: {
          "100": "#333",
          "200": "#273339",
        },
        darkslateblue: "#404a80",
        blues: "#344f93",
        "purple-heart": "#8a35bc",
        ghostwhite: "#fbf8fe",
        tomato: "#ff5c4b",
        cornflowerblue: "#428cd4",
        "yellow-mango": "#faff00",
        whitesmoke: {
          "100": "#f5f7f7",
          "200": "#eaeaea",
          "300": "#e4eaeb",
        },
        darkgray: "#8e989c",
        slategray: "#576074",
        lightslategray: "#7e8a97",
        black1: "#191919",
        aliceblue: "#e6e9f0",
      },
      spacing: {},
      fontFamily: {
        "body-large-600": "Poppins",
        "components-chip": "Roboto",
        inter: "Inter",
        "segoe-ui": "'Segoe UI'",
        "space-mono": "'Space Mono'",
        "nunito-sans": "'Nunito Sans'",
      },
      borderRadius: {
        "29xl": "48px",
        "45xl": "64px",
        "61xl-5": "80.5px",
        "100xl": "119px",
        "3xs": "10px",
        mini: "15px",
        "8xs": "5px",
        "11xl": "30px",
        "13xl": "32px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      lg: "18px",
      "13xl": "32px",
      xs: "12px",
      "17xl": "36px",
      "9xl": "28px",
      smi: "13px",
      sm: "14px",
      "5xl": "24px",
      "29xl": "48px",
      "sm-6": "13.6px",
      "sm-8": "13.8px",
      "mid-6": "17.6px",
      "lgi-5": "19.5px",
      "6xl-7": "25.7px",
      "lg-4": "18.4px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "750px",
      },
      sm: {
        max: "450px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};