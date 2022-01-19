import React from "react";
import { Box } from "@chakra-ui/react";

export const PaddingBox = ({ children, ...otherProps }) => {
	return (
		<Box px={[4, 8, 8, 16, 32]} py={[8, 8, 16]} {...otherProps}>
			{children}
		</Box>
	);
};
