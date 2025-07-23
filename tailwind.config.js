/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    container: {
      center: true, // Centers the container
      padding: {
        DEFAULT: "1rem", // Default padding for smaller screens
        sm: "2rem",
        lg: "2rem", // Increased padding on laptop screens
        xl: "3rem", // Further increase on extra-large screens
        "2xl": "4rcem", // Maximum padding for very large screens
      },
    },
    extend: {

      // colors: {
      //   primary: "#FF4545",
      //   secondary: "#fe019a",
      //   background:"#F9FAFB",
      //   main: "#F5EEDC",
      //   backgroundLight: "#f3f4f6", 
      //   backgroundDark: "#1d222a", 
      //   textLight: "#1a1a1a", 
      //   textDark: "#e0e0e0", 
      // },

      colors: {
        primary: '#0187fd', 
              // bg-primary (used in header)
        secondary: '#F59E0B',        // for buttons if needed
        background: '#FFFFFF',       // bg-background
        backgroundLight: '#F3F4F6',  // bg-backgroundLight
        backgroundDark: '#D1D5DB',   // border/background border
        textWhite: '#FFFFFF',        // text-white
        textDark: '#1F2937',         // heading/body text
        textLight: '#6B7280',        // subtext
        danger: 'FB4141',            // button or text ( RED )
      },

      fontFamily: {
        Bree: ["BreeSerif-Regular"],
        robo: ['Roboto-Regular'],
        'robo-thin': ['Roboto-Thin'],
        'robo-light': ['Roboto-Light'],
        'robo-medium': ['Roboto-Medium'],
        'robo-bold': ['Roboto-Bold'],
        'robo-black': ['Roboto-Black'],
        'robo-italic': ['Roboto-Italic'],
        outfit: ['Outfit-Regular'],
'outfit-thin': ['Outfit-Thin'],
'outfit-light': ['Outfit-Light'],
'outfit-medium': ['Outfit-Medium'],
'outfit-semibold': ['Outfit-SemiBold'],
'outfit-bold': ['Outfit-Bold'],
'outfit-extrabold': ['Outfit-ExtraBold'],
'outfit-black': ['Outfit-Black'],
'outfit-italic': ['Outfit-Italic'],

      },
      fontSize: {
        xs: "0.75rem", // Extra small (12px)
        sm: "0.875rem", // Small (14px)
        base: "1rem", // Base (16px)
        lg: "1.125rem", // Large (18px)
        xl: "1.25rem", // Extra large (20px)
        "2xl": "1.5rem", // 2x large (24px)
        "3xl": "1.875rem", // 3x large (30px)
        "4xl": "2.25rem", // 4x large (36px)
        "5xl": "3rem", // 5x large (48px)
        "6xl": "3.75rem", // 6x large (60px)
      },
      spacing: {
        128: "32rem", // Custom spacing (512px)
        144: "36rem", // Custom spacing (576px)
      },
      borderRadius: {
        sm: "0.125rem", // Small radius
        DEFAULT: "0.25rem", // Default radius
        md: "0.375rem", // Medium radius
        lg: "0.5rem", // Large radius
        xl: "0.75rem", // Extra large radius
        "2xl": "1rem", // 2x large radius
        full: "9999px", // Fully rounded
      },
      screens: {
        xs: "480px", // Extra small screens
      },
    },
  },
  plugins: [],
};