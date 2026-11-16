import React, { FC } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { links } from '~/client/domains/portfolio/home-page/content';

const facts = [
	{
		title: 'Church',
		body: 'Where most of my weekends go: serving the Lord in my local church, mostly alongside college students. Seminary student at Midwestern Baptist Theological Seminary.',
	},
	{ title: 'Golf', body: 'I love it enough to have built a game about it. My handicap is not on this website.' },
	{
		title: 'Home',
		body: 'Norman, Oklahoma. BS and MS in Computer Science from the University of Oklahoma, with a master’s focus in Human-Computer Interaction. Boomer.',
	},
];

export const FooterSection: FC = () => (
	<footer className="bg-charcoal text-parchment dark:bg-black/50">
		<div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-10 sm:py-24">
			<h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] sm:text-6xl">
				Building something that deserves to be made well? <em className="font-medium text-dim">Let&rsquo;s talk.</em>
			</h2>
			<div className="mt-10 flex flex-wrap gap-3 font-mono text-sm">
				<a
					href={links.linkedin}
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center gap-2 rounded-full bg-parchment px-6 py-3 text-ink transition-colors hover:bg-vellum"
				>
					<FaLinkedin className="h-4 w-4" aria-hidden="true" /> Message me on LinkedIn
				</a>
				<a
					href={links.github}
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center gap-2 rounded-full border border-parchment/40 px-6 py-3 transition-colors hover:border-dim hover:text-dim"
				>
					<FaGithub className="h-4 w-4" aria-hidden="true" /> Read my code
				</a>
			</div>

			<dl className="mt-20 grid gap-8 border-t border-parchment/20 pt-10 md:grid-cols-3">
				{facts.map((fact) => (
					<div key={fact.title}>
						<dt className="font-mono text-xs uppercase tracking-[0.22em] text-dim">{fact.title}</dt>
						<dd className="mt-2 leading-relaxed text-parchment/85">{fact.body}</dd>
					</div>
				))}
			</dl>

			<div className="mt-16 flex flex-wrap items-baseline justify-between gap-4 font-mono text-xs text-parchment/60">
				<p>
					&copy; {new Date().getFullYear()} Cameron Bristol. Designed and built by hand, with agents on a short leash.
				</p>
				<p className="font-display text-xl italic text-scripture-light">
					To the praise of His glorious grace{' '}
					<span className="ml-1 font-mono text-xs uppercase not-italic tracking-[0.22em]">Eph. 1:6</span>
				</p>
			</div>
		</div>
	</footer>
);
