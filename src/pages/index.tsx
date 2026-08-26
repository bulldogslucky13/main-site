import Head from 'next/head';
import { HomePage } from '~/client/domains/portfolio/home-page/home-page';

export default function Home() {
	return (
		<>
			<Head>
				<title>Cameron Bristol - Product & Software Engineer</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta
					name="description"
					content="I'm a Full-Stack Web Developer with specialties in awesome user interface, design, and functionality."
				/>
				<meta name="p:domain_verify" content="9ceef33f0d4330c15f094a16314f3ba1" />
			</Head>
			<HomePage />
		</>
	);
}
