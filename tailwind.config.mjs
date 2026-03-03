/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		animation: {
    			'float-slow': 'floatSlow 6s ease-in-out infinite',
    			'float-medium': 'floatMedium 4s ease-in-out infinite',
    			'glow-pulse': 'glowPulse 3s ease-in-out infinite',
    			'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
    		},
    		keyframes: {
    			floatSlow: {
    				'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
    				'50%': { transform: 'translateY(-20px) rotate(3deg)' },
    			},
    			floatMedium: {
    				'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
    				'33%': { transform: 'translateY(-15px) rotate(-2deg)' },
    				'66%': { transform: 'translateY(-8px) rotate(2deg)' },
    			},
    			glowPulse: {
    				'0%, 100%': { boxShadow: '0 0 20px rgba(96, 165, 250, 0.2)' },
    				'50%': { boxShadow: '0 0 40px rgba(96, 165, 250, 0.4)' },
    			},
    			scrollBounce: {
    				'0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
    				'50%': { transform: 'translateY(8px)', opacity: '1' },
    			},
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}
