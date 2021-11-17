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
					950: "#030303",
				},
			},
			spacing: {
				152: "38rem",
				160: "40rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
