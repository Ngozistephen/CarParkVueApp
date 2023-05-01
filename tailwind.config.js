/* eslint-env node */

/** @type {import('tailwindcss').Config} */


const colors = require("tailwindcss/colors");
  
  delete colors['lightBlue'];
  delete colors['warmGray'];
  delete colors['trueGray'];
  delete colors['coolGray'];
  delete colors['blueGray'];

module.exports = {
  content: ["./src/**/*.{vue,js}"],
  theme: {
    extend: { colors},
  },

  // theme: {
  //   colors: {
  //     ...colors,
  //     green: {
  //         //...overwritten color values
  //     },
  //     transparent: 'transparent'
  //   },
  // },
  plugins: [],
}

