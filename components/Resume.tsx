import React from "react";
import { Box, Badge, Stack } from "@chakra-ui/react";

const Resume = () => {
	return (
		<Box mt={10} maxWidth="600px">
			<Box textStyle="h3">📚 Education</Box>
			<Box>
				<Box textStyle="h2">Denmark Tekniske Universitet, Copenhagen 🇩🇰 </Box>
				<Box>Master of science - Computer Science and engineering</Box>
			</Box>
			<Box mt={2}>
				<Box textStyle="h2">EPF, Paris 🇫🇷</Box>
				<Box>Master of Engineering</Box>
			</Box>
			<Box textStyle="h3">👨🏻‍💻 Profesional experiences</Box>
			<Box>
				<Box textStyle="h2">Enershare </Box>
				<Box>Founder - CTO</Box>
			</Box>
			<Box mt={2}>
				<Box textStyle="h2">Roof management </Box>
				<Box>Student software engineer</Box>
			</Box>
			<Box mt={2}>
				<Box textStyle="h2">Imagino</Box>
				<Box>Software engineering intern</Box>
			</Box>
			<Box textStyle="h3">🤖 Skills</Box>
			<Box mt={2}>
				<Box textStyle="h2">Languages & Frameworks</Box>
				<Stack direction="row" wrap="wrap" gap={2}>
					<Badge variant="solid" colorScheme="green">
						Javascript
					</Badge>
					<Badge variant="solid" colorScheme="green">
						Typescript
					</Badge>
					<Badge variant="solid" colorScheme="green">
						Next.js
					</Badge>
					<Badge variant="solid" colorScheme="green">
						React
					</Badge>
					<Badge variant="subtle" colorScheme="green">
						Solidity
					</Badge>
					<Badge variant="subtle" colorScheme="green">
						Java
					</Badge>
					<Badge variant="subtle" colorScheme="green">
						Python
					</Badge>
					<Badge variant="subtle" colorScheme="green">
						C
					</Badge>
				</Stack>
			</Box>

			<Box mt={2}>
				<Box textStyle="h2">Infrastructure</Box>
				<Stack direction="row" wrap="wrap" gap={2}>
					<Badge variant="solid" colorScheme="green">
						Vercel
					</Badge>
					<Badge variant="solid" colorScheme="green">
						Github Actions
					</Badge>
					<Badge variant="subtle" colorScheme="green">
						AWS
					</Badge>
				</Stack>
			</Box>
			<Box mt={2}>
				<Box textStyle="h2">Data analytics / ML</Box>
				<Stack direction="row" wrap="wrap" gap={2}>
					<Badge variant="solid" colorScheme="yellow">
						Python
					</Badge>
					<Badge variant="solid" colorScheme="yellow">
						Scikit-learn
					</Badge>
					<Badge variant="solid" colorScheme="yellow">
						SciPy
					</Badge>
					<Badge variant="solid" colorScheme="yellow">
						PyTorch
					</Badge>
					<Badge variant="solid" colorScheme="yellow">
						Spark
					</Badge>
					<Badge variant="solid" colorScheme="yellow">
						SHAP
					</Badge>
					<Badge variant="solid" colorScheme="yellow">
						XGBOOST
					</Badge>
				</Stack>
				<Box mt={5} textAlign="center">
					✉️ me@stephane.pro
				</Box>
			</Box>
		</Box>
	);
};

export default Resume;
