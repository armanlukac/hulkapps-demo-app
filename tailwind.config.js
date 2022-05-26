const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './resources/**/*.{edge, js, ts, vue, jsx, tsx}'
  ],
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
