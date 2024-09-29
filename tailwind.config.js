export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite DE Grund"', 'serif'],
      },
      colors: {
        brown: {
          700: '#5C4033',
          800: '#4A3026',
          600: '#6B4226',
          700: '#55371D',
        },
        beige: {
          100: '#f9f5f0',
          50: '#F9F5F1',
        },
      },
    },
  },
  plugins: [],
}

