import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#D02B60",
				secondary: "#74A541",
				"secondary-dark": "#487629",
				gray: "#424142",
			},
			fontSize: {
				lg: "20px",
				xl: "22px",
				"2xl": "28px",
				"3xl": "32px",
				"4xl": "58px",
				"5xl": "82px",
			},
			fontFamily: {
				sans: ["var(--font-wix)"],
				serif: ["var(--font-leotaro)"],
			},
			boxShadow: {
				lg: "0px 8px 40px 0px #0000000D;",
			},
		},
		container: {
			center: true,
			screens: {
				xl: "1676px",
			},
		},
	},
	plugins: [],
};
export default config;
