import React from "react";
import { Box, Flex, Switch, useColorMode } from "@chakra-ui/react";

import Link from "next/link";
import { PaddingBox } from "components/PaddingBox";

const Navbar = ({ bg }: { bg?: string }) => {
	//const isMobile = useBreakpointValue({ base: true, md: false });
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<PaddingBox
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			position="absolute"
			bg={"rgba(0,0,0,0)"}
			py={[4, 8]}
			width="100%"
			zIndex="10"
		>
			<Link href="/">
				<Box textStyle="logo" cursor="pointer">
					/
				</Box>
			</Link>
			<Flex justify="center" align="center">
				<Box color="centralGrey" mr={4}>
					{colorMode === "light" ? "☀" : "🌒"}
				</Box>
				<Switch
					onChange={toggleColorMode}
					isChecked={colorMode === "dark"}
					size="md"
				/>
			</Flex>
		</PaddingBox>
	);
};

export default Navbar;
