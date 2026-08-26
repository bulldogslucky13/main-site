import Head from 'next/head';

const REGISTRATION_URL = 'https://wildwood.ccbchurch.com/goto/forms/674/responses/new';
// Canonical host: the bare domain 308-redirects here, and some scrapers don't follow redirects.
const PRODUCTION_URL = 'https://www.cameronbristol.xyz';
const TITLE = 'Men’s Summit 2026 — Wildwood Community Church';
const DESCRIPTION =
	'God’s Man — the first-ever Men’s Summit at Wildwood Community Church. Saturday, September 26, 2026, 8:00 AM – 2:30 PM, Fellowship Hall. Registration $25.';

// Social scrapers require absolute URLs, and a preview deploy's assets don't exist on the
// production domain yet — so previews have to advertise their own deployment URL instead.
export function getStaticProps() {
	const { VERCEL_ENV, VERCEL_URL } = process.env;
	const baseUrl =
		VERCEL_ENV && VERCEL_ENV !== 'production' && VERCEL_URL
			? `https://${VERCEL_URL}`
			: PRODUCTION_URL;

	return { props: { baseUrl } };
}

// Temporary event landing page — delete this file and public/mens-summit-2026/ when the event is over.
export default function MensSummit2026({ baseUrl }: { baseUrl: string }) {
	const pageUrl = `${baseUrl}/mens-summit-2026`;
	const ogImageUrl = `${pageUrl}/og-image.jpg`;

	return (
		<>
			<Head>
				<title>{TITLE}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content={DESCRIPTION} />

				<meta property="og:type" content="website" />
				<meta property="og:url" content={pageUrl} />
				<meta property="og:title" content={TITLE} />
				<meta property="og:description" content={DESCRIPTION} />
				<meta property="og:image" content={ogImageUrl} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="630" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={TITLE} />
				<meta name="twitter:description" content={DESCRIPTION} />
				<meta name="twitter:image" content={ogImageUrl} />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main className="summit">
				{/* badge abstraction: thin circle + geometric peaks + gold ridge */}
				<svg className="motif" viewBox="0 0 1300 1150" fill="none" aria-hidden="true">
					<circle cx="610" cy="590" r="520" stroke="#D4A94E" strokeWidth="1.5" opacity="0.14" />
					<circle cx="610" cy="590" r="452" stroke="#D4A94E" strokeWidth="1" opacity="0.07" />
					<polygon points="230,1150 660,330 1090,1150" fill="#152747" />
					<polygon points="540,1150 885,510 1235,1150" fill="#1D3560" />
					<polyline points="230,1150 660,330 900,790" stroke="#D4A94E" strokeWidth="3" opacity="0.6" />
					<polyline points="755,755 885,510 1201,1090" stroke="#D4A94E" strokeWidth="2.5" opacity="0.4" />
				</svg>

				<div className="grain" aria-hidden="true" />

				<img
					className="logo"
					src="/mens-summit-2026/logo_cream.svg"
					alt="Men's Summit — Wildwood 2026"
					width={601}
					height={588}
				/>

				<div className="content">
					<h1 className="headline">
						<span className="l1">GOD&rsquo;S</span>
						<span className="l2">MAN</span>
					</h1>

					<blockquote className="verse-block">
						<p className="verse">
							&ldquo;Be watchful, stand firm in the faith, act like men, be strong.&rdquo;
						</p>
						<cite className="verse-ref">1 Corinthians 16:13 (ESV)</cite>
					</blockquote>

					<div className="details">
						<div className="item">
							SAT
							<br />
							SEP 26
						</div>
						<div className="item">
							8:00 AM
							<br />
							<span className="sub">2:30 PM</span>
						</div>
						<div className="item">
							FELLOWSHIP
							<br />
							HALL
						</div>
						<div className="item gold">
							REGISTRATION
							<br />
							$25
						</div>
					</div>

					<a className="register" href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
						Register Now
					</a>
				</div>

				<style jsx>{`
					.summit {
						--gold: #d4a94e;
						--gold-light: #e9cb82;
						--cream: #f2ead3;
						--navy-dark: #04060b;
						position: relative;
						min-height: 100vh;
						overflow: hidden;
						background: linear-gradient(150deg, var(--navy-dark) 0%, #081020 55%, #0c1830 100%);
						font-family: 'Oswald', 'Avenir Next Condensed', 'Arial Narrow', sans-serif;
					}

					.motif {
						position: absolute;
						right: -10vw;
						bottom: -12vh;
						width: min(70vw, 900px);
						height: auto;
						pointer-events: none;
					}

					.grain {
						position: absolute;
						inset: 0;
						opacity: 0.05;
						pointer-events: none;
						background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC45IiBudW1PY3RhdmVzPSIyIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjbikiLz48L3N2Zz4=');
					}

					.logo {
						position: absolute;
						top: clamp(20px, 4vw, 56px);
						right: clamp(20px, 4vw, 64px);
						width: clamp(90px, 13vw, 190px);
						opacity: 0.95;
					}

					.content {
						position: relative;
						max-width: 1200px;
						padding: clamp(88px, 12vh, 140px) clamp(24px, 7vw, 96px) clamp(48px, 8vh, 96px);
					}

					.headline {
						margin: 0;
						font-weight: 700;
						text-transform: uppercase;
						line-height: 0.92;
						font-size: clamp(72px, 14vw, 176px);
						letter-spacing: 0.005em;
					}
					.headline .l1 {
						display: block;
						color: var(--cream);
					}
					.headline .l2 {
						display: block;
						color: var(--gold-light);
					}

					.verse-block {
						margin: clamp(28px, 5vh, 48px) 0 0;
						max-width: 560px;
						padding-left: clamp(18px, 3vw, 28px);
						border-left: 4px solid var(--gold);
					}
					.verse {
						margin: 0;
						font-family: 'Avenir Next', 'Helvetica Neue', Arial, sans-serif;
						font-weight: 400;
						font-size: clamp(18px, 2.4vw, 26px);
						line-height: 1.45;
						color: rgba(242, 234, 211, 0.92);
					}
					.verse-ref {
						display: block;
						margin-top: 14px;
						font-style: normal;
						font-weight: 600;
						font-size: clamp(13px, 1.6vw, 18px);
						letter-spacing: 0.26em;
						color: var(--gold);
						text-transform: uppercase;
					}

					.details {
						margin-top: clamp(32px, 6vh, 56px);
						display: flex;
						flex-wrap: wrap;
						align-items: center;
						row-gap: 18px;
					}
					.item {
						font-weight: 600;
						font-size: clamp(16px, 2.2vw, 24px);
						letter-spacing: 0.12em;
						color: var(--cream);
						text-transform: uppercase;
						padding: 0 clamp(18px, 3vw, 32px);
						border-left: 1px solid rgba(242, 234, 211, 0.28);
						line-height: 1.25;
					}
					.item:first-child {
						border-left: none;
						padding-left: 0;
					}
					.item .sub {
						color: rgba(242, 234, 211, 0.6);
					}
					.item.gold {
						color: var(--gold-light);
					}

					.register {
						display: inline-block;
						margin-top: clamp(28px, 5vh, 48px);
						padding: 18px 56px;
						background: var(--gold);
						color: var(--navy-dark);
						font-weight: 700;
						font-size: clamp(18px, 2.2vw, 24px);
						letter-spacing: 0.14em;
						text-transform: uppercase;
						text-decoration: none;
						transition: background 0.15s ease;
					}
					.register:hover {
						background: var(--gold-light);
					}

					@media (max-width: 640px) {
						.details {
							flex-direction: column;
							align-items: flex-start;
						}
						.item {
							border-left: none;
							padding: 0 0 14px;
							border-bottom: 1px solid rgba(242, 234, 211, 0.28);
							margin-bottom: 14px;
							width: 100%;
						}
						.item:last-child {
							border-bottom: none;
							padding-bottom: 0;
							margin-bottom: 0;
						}
						.register {
							display: block;
							text-align: center;
							width: 100%;
							padding: 18px 24px;
						}
						.logo {
							width: 84px;
						}
						.motif {
							width: 110vw;
							right: -30vw;
							bottom: -8vh;
							opacity: 0.85;
						}
					}
				`}</style>
			</main>
		</>
	);
}
