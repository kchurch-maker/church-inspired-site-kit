
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '3rem',
			screens: {
				'sm': '320px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1200px',
				'2xl': '1200px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'ui-sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#8B5CF6',
					dark: '#7C3AED',
					light: '#A78BFA',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Sofia Brand Colors
				sofia: {
					purple: '#8B5CF6',
					'purple-dark': '#7C3AED',
					'purple-light': '#A78BFA',
					black: '#000000',
					white: '#FFFFFF',
					cream: '#F5F1EB',
					'warm-gray': '#E5E1DC'
				}
			},
			fontSize: {
				'logo': ['4rem', { lineHeight: '0.9', letterSpacing: '-0.05em', fontWeight: '900' }],
				'heading': ['1.125rem', { lineHeight: '1.4', letterSpacing: 'normal', fontWeight: '400' }],
				'body': ['0.95rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }],
				'accent': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '500' }],
			},
			spacing: {
				'xs': '0.5rem',
				'sm': '1rem',
				'md': '1.5rem',
				'lg': '2rem',
				'xl': '3rem',
				'xxl': '4rem',
			},
			maxWidth: {
				'text': '45ch',
				'content': '65ch',
				'container': '1200px',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
