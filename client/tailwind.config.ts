/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-body': "url('/images/image1.svg')",
        'bg-footer': "url('/images/image2.svg')",
      },
      colors: {
        bleu: {
          100: '#1E2E5C',
        },
      }

    },
  },
  plugins: [],
}