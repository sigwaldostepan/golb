/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',    // 16px on mobile
          sm: '2rem',        // 32px on small screens and up
          lg: '4rem',        // 64px on large screens and up
          xl: '5rem',        // 80px on extra large screens and up
        },
        screens: {
          '2xl': '1400px',   // Max width for 2xl screens
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        lightMode: {
          primary: '#a855f7',
          secondary: '#9333ea',
          accent: '#EDE9FE',
          neutral: '#DDDDDD',
          'base-100': '#f3f4f6',
          info: '#000000',
          success: '#22c55e',
          warning: '#facc15',
          error: '#ef4444',
        },
        darkMode: {
          primary: '#9333ea',
          secondary: '#7C3AED',
          accent: '#fff',
          neutral: '#303030',
          'base-100': '#252525',
          info: '#ffffff',
          success: '#eab308',
          warning: '#00ff00',
          error: '#dc2626',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
