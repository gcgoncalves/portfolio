/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: [
          '"Anton", sans-serif',
        ],
        sans: [
          'Helvetica, Arial, sans-serif',
        ],
        serif: [
          '"Times New Roman", Times, serif',
        ],
      },
    },
  },
  plugins: [],
}