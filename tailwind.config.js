module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				blue: {
					550: "#147CDD",
				},
				gray: {
					650: "#323232",
				},
				red: {
					350: "#FF647C",
				},
			},
			spacing: {
				45: "11.25rem",
				113: "28.25rem",
				152: "38rem",
				160: "40rem",
			},
			fontFamily: {
				gothic: ["gothic", "Helvetica", "Arial", "sans-serif"],
			},
			boxShadow: {
				"neo-sm": "6px 6px 16px #e3e5e8, -6px -6px 16px #ffffff;",
				neo: "9px 9px 20px #e3e5e8, -9px -9px 20px #ffffff;",
				"neo-lg": "12px 12px 24px #e3e5e8, -12px -12px 24px #ffffff;",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
