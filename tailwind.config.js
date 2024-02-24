/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./views/**/*.ejs"
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-in',
      },
      width: {
        'custom': '350px', 
      },
      height: {
        'custom': '350px', 
      }
    },
  },   
  plugins: [],
}

