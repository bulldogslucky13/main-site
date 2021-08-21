import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { theme } from '~/client/theme';
export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta
						name="description"
						content="
						I'm a Full-Stack Web Developer with specialities in awesome user interface, design, and functionality."
					/>
				</Head>
				<body>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
