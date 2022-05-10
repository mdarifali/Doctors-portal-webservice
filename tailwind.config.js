module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        {
          ourThemes: {
            primary: "#0FCFEC",
            secondary: "#19D3AE",
            accent: "#3A4256",
            neutral: "#3d4451",
            "base-100": "#ffffff",
          },
        },
        "light"
      ],
    },
  },
  plugins: [require("daisyui")],
}
