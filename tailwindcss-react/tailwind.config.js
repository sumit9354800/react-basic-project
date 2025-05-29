// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure this is correct
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '550px', // custom breakpoint
      },
    },
  },
  plugins: [],
};