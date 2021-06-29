const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {},
        fontFamily: {
            'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
            'serif': ['"Zilla Slab"', ...defaultTheme.fontFamily.serif],
            'mono': ['"Fira Code"', ...defaultTheme.fontFamily.mono],
        },
	},
	plugins: [],
};

module.exports = config;
