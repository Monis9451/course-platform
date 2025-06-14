// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  extend: {
    fontFamily: {
      fitzgerald: ['Fitzgerald', 'sans-serif'],
    },
    fontWeight: {
      thin: '100',
    }
  },
},
  plugins: []
}
