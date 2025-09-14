/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'coq-blue': '#2563EB',
        'coq-blue-light': '#60A5FA',
        'coq-red': '#DC2626',
        'coq-red-dark': '#B91C1C',
        'coq-white': '#FFFFFF',
        'coq-gray': '#6B7280',
        'coq-gray-light': '#F1F5F9',
        'coq-gray-dark': '#334155',
        'coq-navy': '#0F172A',
        'coq-border': '#E2E8F0',
        'coq-accent': '#F8FAFC',
        'coq-bg-dark': '#1E293B',
        'coq-text-light': '#FFFFFF',
        'coq-text-muted': '#64748B',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
