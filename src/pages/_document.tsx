import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
export default class Document extends NextDocument {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta
						name="description"
						content="
						I'm a Full-Stack Web Developer with specialties in awesome user interface, design, and functionality."
					/>
				</Head>
				<body className="bg-white dark:bg-gray-800">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
