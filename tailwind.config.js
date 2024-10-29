/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['inter', 'sans-serif'],
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-in-left": {
                    "0%": {
                        opacity: 0,
                        transform: "translate3d(-100%, 0, 0)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate3d(0, 0, 0)",
                    },
                },
        "spinner-grow": {
                    "0%": {
                        transform: "scale(0)",
                    },
      
                    "100%": {
                        transform: "none",
                        opacity: "1",
                    },
                },
      },
      animation: {
        'fade-in': 'fade-in 2s ease-in-out',
        'fade-in-left': 'fade-in-left 1.5s ease-in-out 0s 1',
        'spinnergrow': 'spinner-grow 1.5s ease-in-out 0s 1',
      },
      
    },
  },
  plugins: [tailwindScrollbar],
}

