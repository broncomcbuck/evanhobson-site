export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F7F4',
        surface: '#FFFFFF',
        text: {
          primary: '#1F1F1D',
          secondary: '#575652',
        },
        accent: {
          primary: '#6F8F72',
          secondary: '#C8A58C',
        },
        border: '#EAE7E1',
      },
      fontFamily: {
        serif: ['Literata', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        soft: '8px',
      },
    },
  },
};
