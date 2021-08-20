module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
  },
  variants: {
    opacity: ({ after }) => after(["disabled"]),
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
