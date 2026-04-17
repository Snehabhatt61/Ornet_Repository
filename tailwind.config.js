/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, color-mix(in srgb, var(--color-primary-container) 80%, transparent), color-mix(in srgb, var(--color-secondary-container) 80%, transparent))",
        "footer-gradient":
          "linear-gradient(to bottom, color-mix(in srgb, var(--color-primary-container) 60%, transparent), color-mix(in srgb, var(--color-secondary-container) 60%, transparent))",
      },
      colors: {
          primary: "var(--color-primary)",
          "primary-burnt": "var(--color-primary-burnt)", 
          "primary-container": "var(--color-primary-container)", 
          "on-primary": "var(--color-on-primary)", 
          "on-primary-container": "var(--color-on-primary-container)", 

          secondary: "var(--color-secondary)", 
          "secondary-electric": "var(--color-secondary-electric)",
           "secondary-container": "var(--color-secondary-container)", 
           "on-secondary": "var(--color-on-secondary)", 
           "on-secondary-container": "var(--color-on-secondary-container)", 

           tertiary: "var(--color-tertiary)",
            "tertiary-terracotta": "var(--color-tertiary-terracotta)", 
            "tertiary-container": "var(--color-tertiary-container)", 
            "on-tertiary": "var(--color-on-tertiary)", 
            "on-tertiary-container": "var(--color-on-tertiary-container)",

             background: "var(--color-background)", 
             "on-background": "var(--color-on-background)", 

             surface: "var(--color-surface)",
              "on-surface": "var(--color-on-surface)",
               "surface-container-lowest": "var(--color-surface-container-lowest)",
                "surface-container-low": "var(--color-surface-container-low)", 
                "surface-container": "var(--color-surface-container)",
                 "surface-container-high": "var(--color-surface-container-high)",
                  "surface-container-highest": "var(--color-surface-container-highest)", 
                  "on-surface-variant": "var(--color-on-surface-variant)",
                   outline: "var(--color-outline)", 
                   "outline-variant": "var(--color-outline-variant)",
      },
      fontFamily: {
        "headline": ["Plus Jakarta Sans"],
        "body": ["Plus Jakarta Sans"],
        "label": ["Plus Jakarta Sans"]
      },
      borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
    },
  },
  plugins: [],
};