/** tailwind.config.js */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // dùng class-based dark mode (bạn có thể đổi)
  theme: {
    extend: {
      colors: {
        /* map CSS variables -> tailwind color names */
        primary: "var(--primary)",
        "primary-600": "var(--primary-600)",
        panel: "var(--panel)",
        bg: "var(--bg)",
        muted: "var(--muted)",
        text: "var(--text)",
        success: "var(--success)",
        danger: "var(--danger)",
        glass: "var(--glass)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
      },
      maxWidth: {
        container: "var(--container-max)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      screens: {
        // Mặc định min-width
        sm: "360px",
        md: "720px",
        lg: "1280px",
        "2xl": "1536px",

        // Thêm max-width
        "max-sm": { max: "639px" }, // nhỏ hơn sm
        "max-md": { max: "767px" }, // nhỏ hơn md
        "max-lg": { max: "1023px" }, // nhỏ hơn lg
      },
    },
  },
  plugins: [],
};
