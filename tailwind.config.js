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
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
