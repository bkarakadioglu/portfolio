import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    keyframes: {
      wiggle: {
        "0%" : {
          "borderRadius": "60% 40% 30% 70%/60% 30% 70% 40%"
        },
        "50%" : {
          "borderRadius": "30% 60% 70% 40%/50% 60% 30% 60%"
        },
        "100%" : {
          "borderRadius": "60% 40% 30% 70%/60% 30% 70% 40%"
        }
      }
    }
  },
  plugins: [],
  darkMode: "class",
}
export default config