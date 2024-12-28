/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customStart: '#1b263b',
        customEnd: '#1f1e22',
      },
    },
  },
  plugins: [],
}

