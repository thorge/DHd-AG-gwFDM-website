// remember to fix this issue wint the tailwind/nuxt
// https://github.com/tailwindlabs/tailwindcss-intellisense/issues/663#issuecomment-1316788128

module.exports = {
  // prefix: 'tw-',
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      fontFamily: {
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
    colors: {
      primary: '#88153c',
      secondary: '#ecc94b',
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
