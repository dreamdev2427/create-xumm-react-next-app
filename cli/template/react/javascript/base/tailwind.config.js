/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
    theme: {
      extend: {},
      screens: {
        'mobile': '360px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        'sans': ['Kanit-Regular', 'ui-sans', 'sans-serif'],
        'mono': ['JetBrainsMono-VariableFont', 'ui-monospace', 'SFMono-Regular'],
      }
    },
    plugins: [],
}
  