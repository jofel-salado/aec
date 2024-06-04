import { nextui } from '@nextui-org/theme'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // colors: {
      //   primary: '#39C5EC',
      // },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {
        borderWidth: {
          medium: '1px',
        },
      },
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#39C5EC',
              foreground: '#EFFAFD',
            },
          },
        },
      },
    }),
  ],
}
export default config
