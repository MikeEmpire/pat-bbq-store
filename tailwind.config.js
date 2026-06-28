/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ptrain: {
          background: "var(--ptrain-color-background)",
          surface: "var(--ptrain-color-surface)",
          "surface-alt": "var(--ptrain-color-surface-alt)",
          muted: "var(--ptrain-color-muted-surface)",
          primary: "var(--ptrain-color-primary)",
          accent: "var(--ptrain-color-accent)",
          text: "var(--ptrain-color-text)",
          "text-muted": "var(--ptrain-color-text-muted)",
          border: "var(--ptrain-color-border)",
        },
      },
      fontFamily: {
        ptrain: ["var(--ptrain-font-body)"],
        "ptrain-display": ["var(--ptrain-font-display)"],
      },
      borderRadius: {
        ptrain: "var(--ptrain-radius-card)",
        "ptrain-media": "var(--ptrain-radius-media)",
      },
      maxWidth: {
        ptrain: "var(--ptrain-container-max)",
        "ptrain-content": "var(--ptrain-content-max)",
      },
      spacing: {
        "ptrain-section": "var(--ptrain-section-padding-block)",
        "ptrain-card": "var(--ptrain-card-padding)",
      },
    },
  },
  plugins: [],
};
