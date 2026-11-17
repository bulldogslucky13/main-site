import Image from 'next/image';
import React, { FC, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { links } from '~/client/domains/portfolio/home-page/content';

/**
 * Highlight painted on a pseudo-element pushed behind the heading's text (the h1 is `isolate`), so with the tight
 * display leading the descenders from the line above sit on top of the highlight instead of being clipped by it.
 */
const Mark: FC<{ children: React.ReactNode }> = ({ children }) => (
	<mark className="relative bg-transparent text-inherit before:absolute before:inset-x-[-0.1em] before:top-[0.14em] before:bottom-[0.02em] before:-z-10 before:rounded-[0.12em] before:bg-vellum dark:before:bg-umber">
		{children}
	</mark>
);

const Crafted: FC = () => (
	<div className="mt-14 sm:mt-24">
		<p className="font-mono text-xs uppercase tracking-[0.22em] text-umber dark:text-dim">
			Product &amp; software engineer
		</p>
		<h1 className="isolate mt-5 max-w-4xl font-display text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.01em] sm:text-7xl lg:text-[5.5rem]">
			I build software people can feel the <Mark>care</Mark> in.
		</h1>
		<p className="mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl">
			Full-stack engineer at{' '}
			<a
				href={links.tailwind}
				target="_blank"
				rel="noreferrer"
				className="underline decoration-stone underline-offset-4"
			>
				Tailwind
			</a>
			, happiest in the frontend, where a product either earns trust or loses it. I sweat type, spacing, empty states,
			and the 200 milliseconds nobody asked about.
		</p>
		<p className="mt-4 max-w-2xl text-lg leading-relaxed text-umber sm:text-xl dark:text-dim">
			AI writes plenty of my code now. It doesn&rsquo;t get to decide when it&rsquo;s good.
		</p>
	</div>
);

/** The parody. Everything a generated landing page reaches for first. */
const Slop: FC = () => (
	<div className="mt-10 rounded-3xl bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 px-6 py-14 text-center font-sans text-white shadow-2xl sm:mt-16 sm:py-20">
		<span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur-sm">
			✨ Available for work ✨
		</span>
		<h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold sm:text-6xl">
			🚀 Passionate Full-Stack Developer Crafting Seamless Digital Experiences
		</h1>
		<p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
			Leveraging cutting-edge technologies to delve into robust, scalable solutions that elevate your business to the
			next level.
		</p>
		<div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
			{['⚡ Blazing Fast', '🔒 Secure', '🎨 Beautiful'].map((label) => (
				<div key={label} className="rounded-2xl border border-white/30 bg-white/10 p-5 font-semibold backdrop-blur-sm">
					{label}
				</div>
			))}
		</div>
		<p className="mt-10 text-sm text-white/80">You have seen this page before. That is the problem.</p>
	</div>
);

export const HeroSection: FC = () => {
	const [slop, setSlop] = useState(false);

	return (
		<header className="mx-auto w-full max-w-6xl px-5 pb-16 pt-6 sm:px-10 sm:pb-24">
			<nav className="flex items-center justify-between gap-4" aria-label="Primary">
				<div className="flex items-center gap-3">
					<div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-1 ring-stone">
						<Image src="/headshot.jpeg" alt="Cameron Bristol" fill sizes="40px" priority />
					</div>
					<div className="font-mono text-xs uppercase leading-relaxed tracking-[0.18em]">
						<div>Cameron Bristol</div>
						<div className="text-umber dark:text-dim">Norman, OK</div>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:opacity-60">
						<FaGithub className="h-6 w-6" />
					</a>
					<a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-60">
						<FaLinkedin className="h-6 w-6" />
					</a>
				</div>
			</nav>

			{slop ? <Slop /> : <Crafted />}

			<div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs uppercase tracking-[0.15em]">
				<button
					type="button"
					role="switch"
					aria-checked={slop}
					onClick={() => setSlop((value) => !value)}
					className="group inline-flex items-center gap-3"
				>
					<span
						className={`relative h-6 w-11 rounded-full border border-ink/40 transition-colors dark:border-parchment/40 ${
							slop ? 'bg-purple-500' : 'bg-transparent'
						}`}
					>
						<span
							className={`absolute top-[3px] h-4 w-4 rounded-full bg-ink transition-all dark:bg-parchment ${
								slop ? 'left-[22px] bg-white!' : 'left-[3px]'
							}`}
						/>
					</span>
					<span className="group-hover:underline">{slop ? 'Okay, put it back' : 'See this as AI slop'}</span>
				</button>
				{!slop && (
					<a href="#work" className="underline decoration-stone underline-offset-4">
						Skip to the work ↓
					</a>
				)}
			</div>
		</header>
	);
};
