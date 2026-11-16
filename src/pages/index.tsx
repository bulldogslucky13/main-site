import Head from 'next/head';
import { HomePage } from '~/client/domains/portfolio/home-page/home-page';

const title = 'Cameron Bristol — Product & Software Engineer';
const description =
	'Full-stack product and software engineer who still sweats the pixels. Christian first, craftsman second, at Tailwind by day.';

export default function Home() {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content={description} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:type" content="website" />
				<meta name="p:domain_verify" content="9ceef33f0d4330c15f094a16314f3ba1" />
			</Head>
			<HomePage />
		</>
	);
}
