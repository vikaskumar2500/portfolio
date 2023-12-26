import daisyUi from 'daisyui'

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        constant: '#d694f9',
        declaration: '#FFC66D',
        string: '#a4c591',
        identifier: '#D1D1D1',
        keyword: '#CC7832',
        number: '#9fd6ff',
        background: '#424242',
        'base-100': '#121212',
        'base-200': '#1e1e1e',
        primary: '#FFC66D',
        secondary: '#d694f9',
      },
      fontFamily: {
        sans: ['Roboto Mono', 'Lucida Console', '"Courier New"', 'monospace'],
        display: 'swap',
      },
      animation: {
        rotate: 'rotate 300s linear infinite',
        fadeIn: 'fadeIn 2.5s ease-in 250ms forwards',
      },
    },
  },
  plugins: [daisyUi],
  daisyui: {
    logs: false,
    themes: ['dark'],
  },
}
export default config
