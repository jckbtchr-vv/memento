/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'memento': {
          50: '#fef7ee',
          100: '#fdedd6',
          200: '#fad7ac',
          300: '#f6ba77',
          400: '#f19340',
          500: '#ed751a',
          600: '#de5c10',
          700: '#b84710',
          800: '#933914',
          900: '#773013',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'handwriting': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
