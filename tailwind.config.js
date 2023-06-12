/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounceright: 'bounceright 1s linear infinite',
      },
      keyframes: {
        bounceright: {
          '0%': {
            transform: 'translateX(0%)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(35%)',
            opacity: '0',
          }
        }
      },
      backgroundImage: {
        'signup': "url('/src/images/signup.jpg')",
        'signin': "url('/src/images/signin.jpg')",
      }
    }
  },
  plugins: [],
}