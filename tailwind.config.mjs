/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        'primary': '#FFFF',
        'secondary': '#1E213D',
        'tertiary': '#2E3047',
        'quaternary': '#3A506B',
        'quinary': '#5BC0EB',
      }
    },
  },
  plugins: [],
} 