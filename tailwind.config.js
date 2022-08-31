module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    extend: {
      colors: {
        primary: '#293241',
        secondary: '#EE6C4D',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
