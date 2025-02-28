/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--b1))",
        foreground: "hsl(var(--bc))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#2F855A",     // Green
          "secondary": "#1D4ED8",   // Blue
          "accent": "#D97706",      // Orange
          "neutral": "#374151",     // Gray-700
          "base-100": "#FFFFFF",    // White
          "base-200": "#F3F4F6",    // Gray-100
          "base-300": "#E5E7EB",    // Gray-200
          "info": "#3B82F6",        // Blue-500
          "success": "#059669",     // Green-600
          "warning": "#F59E0B",     // Amber-500
          "error": "#DC2626",       // Red-600
        },
        dark: {
          "primary": "#4ADE80",     // Green-400
          "secondary": "#60A5FA",   // Blue-400
          "accent": "#F97316",      // Orange-500
          "neutral": "#9CA3AF",     // Gray-400
          "base-100": "#1F2937",    // Gray-800
          "base-200": "#111827",    // Gray-900
          "base-300": "#374151",    // Gray-700
          "info": "#3B82F6",        // Blue-500
          "success": "#059669",     // Green-600
          "warning": "#F59E0B",     // Amber-500
          "error": "#DC2626",       // Red-600
        },
      },
    ],
  },
  plugins: [daisyui],
};
