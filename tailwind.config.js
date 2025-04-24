/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#6CC3D5", // Sky Blue
          foreground: "#3D2E4F", // Deep Purple Shadow
        },
        secondary: {
          DEFAULT: "#F5C87A", // Soft Yellow
          foreground: "#A28DDA", // Muted Violet
        },
        destructive: {
          DEFAULT: "#E2574C", // Warm Coral Red
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#A28DDA", // Muted Violet
          foreground: "#3D2E4F", // Deep Purple Shadow
        },
        accent: {
          DEFAULT: "#7A5AA3", // Bold Purple
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          DEFAULT: "#4FC88F", // Fresh Mint Green
          foreground: "hsl(var(--success-foreground))",
        },
        // Direct color access
        skyBlue: "#6CC3D5",
        deepPurple: "#3D2E4F",
        softYellow: "#F5C87A",
        mutedViolet: "#A28DDA",
        boldPurple: "#7A5AA3",
        mintGreen: "#4FC88F",
        coralRed: "#E2574C",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
} 