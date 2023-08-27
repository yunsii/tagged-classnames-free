import type { Config } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
const config: Config = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: ['./src/**/demos/**/*.{ts,tsx}', './docs/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
