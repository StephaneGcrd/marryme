import { extendTheme } from "@chakra-ui/react";

const colors = {
	lightGreen: "#cddfa0",
	darkGreen: "#00272b",
	darkGreenHover: "#004949",
	centralGrey: "#b9c0da",
	electricYellow: "#ffe180",
};

const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

const textStyles = {
	h1: {
		fontSize: [28, 28, 60],
		fontWeight: [700],
		fontFamily: "Raleway",
		lineHeight: [10, 10, "70px"],
		baseStyle: ({ colorMode }) => ({
			color: colorMode === "dark" ? "darkGreen" : "white",
		}),
	},
	h2: {
		fontSize: [16],
		fontWeight: [700],
		fontFamily: "Raleway",
		baseStyle: ({ colorMode }) => ({
			color: colorMode === "dark" ? "darkGreen" : "white",
		}),
	},
	h3: {
		fontSize: [20, 24],
		fontWeight: [800],
		fontFamily: "Raleway",
		lineHeight: [10],
		baseStyle: ({ colorMode }) => ({
			color: colorMode === "dark" ? "darkGreen" : "white",
		}),
	},
	h4: {
		fontSize: [18, 20, 20],
		fontWeight: [800],
		fontFamily: "Raleway",
		lineHeight: [6],
		baseStyle: ({ colorMode }) => ({
			color: colorMode === "dark" ? "darkGreen" : "white",
		}),
	},
	p: {
		fontSize: [18, 20],
		fontFamily: "Raleway",
		fontWeight: [500],
	},
	small: {
		fontSize: [12],
		fontFamily: "Raleway",
		fontWeight: [500],
	},
	logo: {
		fontSize: [16, 20, 24],
		fontFamily: "Raleway",
		fontWeight: [800],
	},
};

const styles = {
	global: {
		"html,body": {
			bg: "white",
		},
	},
};

const components = {
	Button: {
		baseStyle: {
			bg: "#3f5efb",
			color: "white",
			fontFamily: "Raleway",
			fontSize: [14, 16],
			borderRadius: 20,
		},
		variants: {
			// Make a variant, we'll call it `base` here and leave it empty
			base: {},
			primary: {
				bg: "darkGreen",
				color: "white",
				fontSize: [14, 16],
				borderRadius: 20,
				_hover: {
					bg: "darkGreenHover",
				},
			},
			secondary: {
				//...define other variants
				bg: "transparent",
				color: "darkGreen",
				fontSize: [14, 16],
			},
			outlined: {
				bg: "transparent",
				color: "darkGreen",
				fontSize: [14, 16],
				border: "2px solid #00272b",
				_hover: {
					bg: "rgba(0,0,0,0.1)",
				},
			},
		},
		defaultProps: {
			// Then here we set the base variant as the default
			variant: "base",
		},
	},
};
export const theme = extendTheme({
	config,
	colors,
	textStyles,
	styles,
	components,
});
