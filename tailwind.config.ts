import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, hsla(240, 10%, 4%, 1) 30%, hsla(207, 10%, 23%, 1) 100%)'
      },
      colors: {
        darkGrey: '#1B1F24',
        colorText: '#7D8590'
      }
    },
  },
  plugins: [],
}
export default config
