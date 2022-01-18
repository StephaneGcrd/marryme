import { extendTheme } from "@chakra-ui/react";

const colors = {
	lightGreen: "#cddfa0",
	darkGreen: "#00272b",
	darkGreenHover: "#004949",
	centralGrey: "#b9c0da",
	electricYellow: "#ffe180",
};

const textStyles = {
	h1: {
		// you can also use responsive styles
		fontSize: [28, 28, 40],
		fontWeight: [700],
		fontFamily: "Raleway",
		color: "darkGreen",
		lineHeight: [10],
	},
	h2: {
		fontSize: [16],
		fontWeight: [700],
		fontFamily: "Raleway",
		color: "darkGreen",
	},
	h3: {
		fontSize: [20, 24],
		fontWeight: [800],
		fontFamily: "Raleway",
		color: "darkGreen",
		lineHeight: [10],
	},
	h4: {
		fontSize: [18, 20, 20],
		fontWeight: [800],
		fontFamily: "Raleway",
		color: "darkGreen",
		lineHeight: [6],
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
			bg: "darkGreen",
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
				border: "1px solid #00272b",
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
export const theme = extendTheme({ colors, textStyles, styles, components });
