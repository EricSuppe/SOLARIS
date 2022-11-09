module.exports = {
  screens: {
    'sm': '0px',
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
  variants: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "primary": '"Clash Display", sans-serif',
    },
    extend: {
      backgroundImage: {
        'background-pattern': "url('assets/img/Background-pattern.svg')",
       }
    },
  },
  plugins: [],
}