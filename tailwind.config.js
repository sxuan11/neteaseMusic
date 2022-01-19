module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'pri': '#242424',
      'pri-2': '#404040',
      'danger': '#e3342f',
    })
  },
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [],
}
