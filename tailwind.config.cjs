/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,html}"],
  theme: {
	  colors: {
		  black: "#000",
		  white: "#FFF",
		  grey: {
			  300: "rgb(120, 120, 120)",
			  600: "rgb(44, 51, 56)",
			  900: "#1B1D1F"
		  },
		  blue: {
			  300: "rgba(181, 235, 241, 0.33)",
			  600: "rgb(11, 196, 217)",
		  }
	  },
	  fontFamily: {
		  inter: ["'Inter'", "sans-serif"]
	  }
  },
  plugins: [],
}
