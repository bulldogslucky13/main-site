import { Fragment } from 'react';
import Head from 'next/head';

const REGISTRATION_URL = 'https://wildwood.ccbchurch.com/goto/forms/674/responses/new';
// Canonical host: the bare domain 308-redirects here, and some scrapers don't follow redirects.
const PRODUCTION_URL = 'https://www.cameronbristol.xyz';
const TITLE = 'Men’s Summit 2026 — Wildwood Community Church';
const DESCRIPTION =
	'God’s Man — the first-ever Men’s Summit at Wildwood Community Church. Saturday, September 26, 2026, 8:00 AM – 2:30 PM, Fellowship Hall. Men 18 and up. $25 includes breakfast and lunch.';

const INVITATION = [
	'What did Paul mean when he called the Corinthian men to “act like men”? And even more importantly, (since this verse is in the Bible) what does God intend for men to do in response to this call?',
	'The world has a definition of what it means to be a man … but God’s definition is clear. After all, God created us on purpose and for His purpose. So what is that purpose and what does it look like to “act like men” in the home, at work, and at church, in the ways God intended?',
	'On Saturday, September 26 from 8AM – 2:30PM, Wildwood Community Church is inviting men to a Men’s Summit, where we will journey together through the Scriptures with a half-day of teaching, worship, and fellowship.',
];

type AgendaItem = { time: string; title: string; speaker?: string };

const AGENDA: AgendaItem[] = [
	{ time: '8:00 – 8:30', title: 'Registration / Breakfast / Fellowship' },
	{ time: '8:30 – 9:00', title: 'Welcome / Prayer / Worship' },
	{ time: '9:00 – 10:00', title: 'Keynote 1: God’s Man in the Home', speaker: 'John Abernathy' },
	{ time: '10:00 – 10:40', title: 'Q & A with Pastors / Elders' },
	{ time: '10:40 – 10:45', title: 'Break' },
	{ time: '10:45 – 11:45', title: 'Keynote 2: God’s Man in the Church', speaker: 'Phil Kemp' },
	{ time: '11:45 – 12:15', title: 'BBQ Lunch' },
	{ time: '12:15 – 1:15', title: 'Keynote 3: God’s Man in the Workplace', speaker: 'Mike Beckham' },
	{ time: '1:15 – 1:30', title: 'Something Fun' },
	{ time: '1:30 – 2:15', title: 'Keynote 4: God’s Man with his God', speaker: 'Mark Robinson' },
	{ time: '2:15 – 2:30', title: 'Worship / Closing Remarks and Prayer' },
];

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
					href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main className="summit">
				<div className="grain" aria-hidden="true" />

				<section className="hero">
					{/* badge abstraction: thin circle + geometric peaks + gold ridge */}
					<svg className="motif" viewBox="0 0 1300 1150" fill="none" aria-hidden="true">
						<circle cx="610" cy="590" r="520" stroke="#D4A94E" strokeWidth="1.5" opacity="0.14" />
						<circle cx="610" cy="590" r="452" stroke="#D4A94E" strokeWidth="1" opacity="0.07" />
						<polygon points="230,1150 660,330 1090,1150" fill="#152747" />
						<polygon points="540,1150 885,510 1235,1150" fill="#1D3560" />
						<polyline points="230,1150 660,330 900,790" stroke="#D4A94E" strokeWidth="3" opacity="0.6" />
						<polyline
							points="755,755 885,510 1201,1090"
							stroke="#D4A94E"
							strokeWidth="2.5"
							opacity="0.4"
						/>
					</svg>

					<img
						className="logo"
						src="/mens-summit-2026/logo_cream.svg"
						alt="Men's Summit — Wildwood 2026"
						width={601}
						height={588}
					/>

					<div className="container hero-content">
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
							<div className="item">
								AGES
								<br />
								18 &amp; UP
							</div>
							<div className="item gold">
								REGISTRATION
								<br />
								$25
							</div>
						</div>

						<a
							className="register"
							href={REGISTRATION_URL}
							target="_blank"
							rel="noopener noreferrer"
						>
							Register Now
						</a>
					</div>
				</section>

				<section className="container section invitation">
					<p className="eyebrow">The Invitation</p>
					{INVITATION.map((paragraph, index) => (
						<p className={index === 0 ? 'prose lede' : 'prose'} key={paragraph.slice(0, 24)}>
							{paragraph}
						</p>
					))}
				</section>

				<section className="container section">
					<p className="eyebrow">Agenda</p>
					{/* dt/dd are direct grid children so the time column aligns across every row. */}
					<dl className="schedule">
						{AGENDA.map((item) => (
							<Fragment key={item.time}>
								<dt>{item.time}</dt>
								<dd className={item.speaker ? 'keynote' : undefined}>
									{item.title}
									{item.speaker ? <span className="speaker">{item.speaker}</span> : null}
								</dd>
							</Fragment>
						))}
					</dl>
				</section>

				<section className="container section closing">
					<p className="eyebrow">Join Us</p>
					<p className="closing-line">Saturday, September 26</p>
					<p className="closing-where">8:00 AM – 2:30 PM &middot; Fellowship Hall</p>
					<p className="closing-sub">Men 18 and up &middot; $25 includes breakfast and lunch</p>
					<a className="register" href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
						Register Now
					</a>
				</section>

				<style jsx>{`
					.summit {
						--gold: #d4a94e;
						--gold-light: #e9cb82;
						--cream: #f2ead3;
						--navy-dark: #04060b;
						--rule: rgba(242, 234, 211, 0.16);
						--font-display: 'Oswald', 'Avenir Next Condensed', 'Arial Narrow', sans-serif;
						--font-body: 'Avenir Next', 'Helvetica Neue', Arial, sans-serif;
						position: relative;
						background: linear-gradient(160deg, var(--navy-dark) 0%, #081020 45%, #0c1830 100%);
						font-family: var(--font-display);
					}

					.grain {
						position: absolute;
						inset: 0;
						opacity: 0.05;
						pointer-events: none;
						background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC45IiBudW1PY3RhdmVzPSIyIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjbikiLz48L3N2Zz4=');
					}

					.container {
						position: relative;
						width: 100%;
						max-width: 1240px;
						margin: 0 auto;
						padding-left: clamp(24px, 7vw, 96px);
						padding-right: clamp(24px, 7vw, 96px);
					}

					/* ---- hero ---- */

					.hero {
						position: relative;
						overflow: hidden;
						min-height: 100vh;
						display: flex;
						align-items: center;
					}

					.motif {
						position: absolute;
						right: -10vw;
						bottom: -12vh;
						width: min(70vw, 900px);
						height: auto;
						pointer-events: none;
					}

					.logo {
						position: absolute;
						top: clamp(20px, 4vw, 56px);
						right: clamp(20px, 4vw, 64px);
						width: clamp(90px, 13vw, 190px);
						height: auto;
						opacity: 0.95;
					}

					.hero-content {
						padding-top: clamp(88px, 11vh, 140px);
						padding-bottom: clamp(48px, 7vh, 96px);
					}

					.headline {
						margin: 0;
						font-weight: 700;
						text-transform: uppercase;
						line-height: 0.92;
						/* Height-aware so the hero CTA still clears the fold on short laptop screens. */
						font-size: clamp(64px, min(13vw, 18vh), 168px);
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
						font-family: var(--font-body);
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
						font-size: clamp(15px, 2vw, 22px);
						letter-spacing: 0.12em;
						color: var(--cream);
						text-transform: uppercase;
						padding: 0 clamp(14px, 2.4vw, 28px);
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

					/* ---- shared section rhythm ---- */

					.section {
						padding-top: clamp(64px, 11vh, 120px);
						padding-bottom: clamp(64px, 11vh, 120px);
					}

					.eyebrow {
						margin: 0 0 clamp(28px, 4vh, 44px);
						font-weight: 600;
						font-size: clamp(13px, 1.6vw, 17px);
						letter-spacing: 0.3em;
						text-transform: uppercase;
						color: var(--gold);
					}

					/* ---- invitation ---- */

					.invitation {
						border-top: 1px solid var(--rule);
					}
					.prose {
						max-width: 760px;
						margin: 0 0 26px;
						font-family: var(--font-body);
						font-size: clamp(17px, 2vw, 21px);
						line-height: 1.62;
						color: rgba(242, 234, 211, 0.85);
					}
					.prose.lede {
						font-size: clamp(19px, 2.4vw, 25px);
						line-height: 1.5;
						color: var(--cream);
					}
					.prose:last-child {
						margin-bottom: 0;
					}

					/* ---- agenda ---- */

					.schedule {
						margin: 0;
						max-width: 860px;
						display: grid;
						grid-template-columns: max-content 1fr;
						align-items: baseline;
						border-bottom: 1px solid var(--rule);
					}
					.schedule dt,
					.schedule dd {
						border-top: 1px solid var(--rule);
					}
					.schedule dt {
						/* Gap lives in padding, not column-gap, so the row rules stay unbroken. */
						padding: 18px clamp(20px, 4vw, 56px) 18px 0;
						font-weight: 600;
						font-size: clamp(13px, 1.6vw, 17px);
						letter-spacing: 0.1em;
						color: var(--gold);
						white-space: nowrap;
					}
					.schedule dd {
						margin: 0;
						padding: 18px 0;
						font-weight: 500;
						font-size: clamp(15px, 1.9vw, 21px);
						letter-spacing: 0.05em;
						text-transform: uppercase;
						color: rgba(242, 234, 211, 0.78);
					}
					.schedule dd.keynote {
						font-weight: 600;
						color: var(--gold-light);
					}
					.schedule .speaker {
						display: block;
						margin-top: 5px;
						font-family: var(--font-body);
						font-weight: 400;
						font-size: clamp(14px, 1.5vw, 16px);
						letter-spacing: 0.02em;
						text-transform: none;
						color: rgba(242, 234, 211, 0.55);
					}

					/* ---- closing ---- */

					.closing {
						border-top: 1px solid var(--rule);
					}
					.closing-line {
						margin: 0;
						font-weight: 700;
						font-size: clamp(28px, 4.4vw, 52px);
						line-height: 1.05;
						letter-spacing: 0.04em;
						text-transform: uppercase;
						color: var(--cream);
					}
					.closing-where {
						margin: 12px 0 0;
						font-weight: 600;
						font-size: clamp(16px, 2.1vw, 24px);
						letter-spacing: 0.12em;
						text-transform: uppercase;
						color: var(--gold-light);
					}
					.closing-sub {
						margin: 14px 0 0;
						font-family: var(--font-body);
						font-size: clamp(15px, 1.8vw, 19px);
						color: rgba(242, 234, 211, 0.62);
					}

					/* ---- narrow screens ---- */

					@media (max-width: 640px) {
						.hero {
							min-height: auto;
						}
						.details {
							display: grid;
							grid-template-columns: 1fr 1fr;
							column-gap: 20px;
							row-gap: 0;
						}
						.item {
							border-left: none;
							border-bottom: 1px solid rgba(242, 234, 211, 0.28);
							padding: 0 0 14px;
							margin-bottom: 14px;
						}
						.item:nth-last-child(-n + 1) {
							border-bottom: none;
							padding-bottom: 0;
							margin-bottom: 0;
						}
						.register {
							display: block;
							width: 100%;
							padding: 18px 24px;
							text-align: center;
						}
						.logo {
							width: 84px;
						}
						.motif {
							width: 110vw;
							right: -30vw;
							bottom: -4vh;
							opacity: 0.85;
						}
						.schedule {
							grid-template-columns: 1fr;
						}
						.schedule dt {
							padding: 16px 0 0;
							padding-right: 0;
						}
						.schedule dd {
							padding: 4px 0 16px;
							border-top: none;
						}
					}
				`}</style>
			</main>
		</>
	);
}
