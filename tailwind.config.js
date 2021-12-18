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
				18: "4.5rem",
				45: "11.25rem",
				84: "21rem",
				100: "25rem",
				113: "28.25rem",
				133: "33.25rem",
				152: "38rem",
				160: "40rem",
			},
			scale: {
				"-1": "-1",
			},
			fontFamily: {
				gothic: ["gothic", "Helvetica", "Arial", "sans-serif"],
			},
			boxShadow: {
				"neo-sm": "6px 6px 16px #e3e5e8, -6px -6px 16px #ffffff;",
				neo: "9px 9px 20px #e3e5e8, -9px -9px 20px #ffffff;",
				"neo-lg": "12px 12px 24px #e3e5e8, -12px -12px 24px #ffffff;",
				"full-sm":
					"0px 10px 20px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.1);",
				full: "0px 7px 32px rgba(0, 0, 0, 0.07), 0px -7px 32px rgba(0, 0, 0, 0.07);",
				"full-lg":
					"0px 8px 60px rgba(0, 0, 0, 0.1), 0px -8px 60px rgba(0, 0, 0, 0.1);",
				"b-sm": "0px 4px 4px rgba(0, 0, 0, 0.25);",
			},
			borderRadius: {
				"4xl": "2rem",
				"5xl": "2.5rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
