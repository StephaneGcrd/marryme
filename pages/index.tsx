import Head from "next/head";

import { Box, Button, useColorMode, Flex, Switch } from "@chakra-ui/react";
import Link from "next/link";
import Resume from "components/Resume";

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Head>
				<title>Stephane Guichard</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Box
				bg={colorMode === "light" ? "white" : "black"}
				transition="background-color 0.3s"
				minH="100vh"
			>
				<Flex
					justify="center"
					align="center"
					position="absolute"
					mt={2}
					right={5}
				>
					<Box color="centralGrey" mr={4}>
						{colorMode === "light" ? "☀" : "🌒"}
					</Box>
					<Switch
						onChange={toggleColorMode}
						isChecked={colorMode === "dark"}
						size="md"
					/>
				</Flex>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					minH="100vh"
					px={[8, 4]}
				>
					<Box maxW={"98vw"}>
						<Box>
							<Box
								textStyle="h1"
								bgGradient="linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 50%, rgba(252,175,70,1) 100%);"
								bgClip="text"
							>
								Stéphane Guichard
							</Box>
							<Box> Software and Data Engineer</Box>
							<Box>
								<Link href="https://twitter.com/StephaneGch">
									<Button
										borderColor="rgba(252,70,107,1)"
										color="rgba(252,70,107,1)"
										mt={4}
										variant="outlined"
									>
										Twitter
									</Button>
								</Link>
								<Link href="https://www.linkedin.com/in/steph-guichard/">
									<Button mt={4} mx={2}>
										Linkedin
									</Button>
								</Link>
							</Box>
						</Box>
						{/* <Resume /> */}
						<Box position="absolute" bottom={2} left={2} textStyle="small">
							Stéphane Guichard © 2022 - me@stephane.pro
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
}
