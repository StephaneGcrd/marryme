//import '../styles/globals.css';
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import "@fontsource/raleway/500.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";
import { theme } from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
