import Head from 'next/head';
import { HomePage } from '~/client/domains/portfolio/home-page/home-page';

const PRODUCTION_URL = 'https://www.cameronbristol.xyz';

const title = 'Cameron Bristol — Product & Software Engineer';
const description =
	'Full-stack product and software engineer who still sweats the pixels. Christian first, craftsman second, at Tailwind by day.';

// Social scrapers require absolute URLs, and a preview deploy's assets don't exist on the
// production domain yet — so previews have to advertise their own deployment URL instead.
export function getStaticProps() {
	const { VERCEL_ENV, VERCEL_URL } = process.env;
	const baseUrl =
		VERCEL_ENV && VERCEL_ENV !== 'production' && VERCEL_URL ? `https://${VERCEL_URL}` : PRODUCTION_URL;

	return { props: { baseUrl } };
}

export default function Home({ baseUrl }: { baseUrl: string }) {
	// Rendered from public/og-image.source.html — re-render it when the headshot or headline changes.
	const ogImageUrl = `${baseUrl}/og-image.jpg`;

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content={description} />

				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Cameron Bristol" />
				<meta property="og:url" content={baseUrl} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:image" content={ogImageUrl} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />
				<meta property="og:image:alt" content="Cameron Bristol — I build software people can feel the care in." />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={ogImageUrl} />

				<meta name="p:domain_verify" content="9ceef33f0d4330c15f094a16314f3ba1" />
			</Head>
			<HomePage />
		</>
	);
}
