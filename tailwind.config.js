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
