const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // colors:{ // Cuidado sobrescre as classes padrao e elas param de funcionar
    //   black:'#010101',
    //   red:'#A83246'
    // },
    // screens:{
    //   'tablet' : '640px',
    //   'cel':{'max':'400px'}
    // },
    extend: {
      colors: {
        'newblue': '#243C5A',
        gray: {
          ...colors.gray,
          '900': '#999'
        }
      },
      spacing: {
        '50':'20rem'
      }
    },
  },
  plugins: [],
}