import type { Config } from 'tailwindcss'

import { fontFamily } from 'tailwindcss/defaultTheme';

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
        colorText: '#7D8590',
        whiteColor: '#FFFFFF',
      },
      fontFamily: {
        kumb_sans: ['var(--font-kumbh-sans)', ...fontFamily.serif],
        lexen_deca: ['var(--font-lexend-deca)', ...fontFamily.serif]
      },
      gridTemplateColumns: {
        'hero-grid-max': '.8fr .6fr'
      }
    },
  },
  plugins: [],
}
export default config
