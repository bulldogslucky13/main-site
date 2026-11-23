import { AnimatePresence, motion, useIsPresent, useReducedMotion, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { links } from '~/client/domains/portfolio/home-page/content';
import { EASE, INSTANT } from '~/client/domains/portfolio/home-page/hooks/use-reveal';

/**
 * The toggle shows what care is worth, so the swap acts it out. Going to slop, the care leaves first (the highlight is
 * lifted off), then the crafted pieces slip out of line together, then the slop lands all at once with the eager bounce
 * generated pages love. Coming back, the slop is simply gone, the crafted pieces are set back in reading order, and the
 * word is highlighted again. Seconds from the click.
 */
const AT = { apart: 0.08, pop: 0.4, back: 0.14, restroke: 0.52 };

/** Redrawn a little quicker than on load, once the headline is back in place. */
const RESTROKE = { '--stroke-delay': `${AT.restroke}s`, '--stroke-duration': '0.36s' } as React.CSSProperties;

/**
 * Highlight painted on a pseudo-element pushed behind the heading's text (the h1 is `isolate`), so with the tight
 * display leading the descenders from the line above sit on top of the highlight instead of being clipped by it. It is
 * stroked on by CSS (see `highlight-stroke` in globals.css), and lifted off while the crafted version leaves.
 */
const Mark: FC<{ children: React.ReactNode; leaving: boolean; returning: boolean }> = ({
	children,
	leaving,
	returning,
}) => (
	<mark
		style={returning ? RESTROKE : undefined}
		className={`relative bg-transparent text-inherit before:absolute before:inset-x-[-0.1em] before:top-[0.14em] before:bottom-[0.02em] before:-z-10 before:rounded-[0.12em] before:bg-vellum dark:before:bg-umber ${
			leaving ? 'motion-safe:before:animate-highlight-lift' : 'motion-safe:before:animate-highlight-stroke'
		}`}
	>
		{children}
	</mark>
);

/** Where each piece slips to when the care leaves. Nothing flies off; it just stops lining up. */
type Drift = { x: number; y: number; rotate: number };
const DRIFT = {
	eyebrow: { x: -10, y: -6, rotate: -2 },
	headline: { x: 14, y: 4, rotate: 1.2 },
	lead: { x: -8, y: 10, rotate: -0.8 },
	aside: { x: 10, y: 14, rotate: 1.5 },
} satisfies Record<string, Drift>;

/** The crafted hero only sequences its pieces: they slip out together, and are set back one by one. */
const craftedSequence: Variants = {
	apart: { transition: { delayChildren: AT.apart, staggerChildren: 0.03 } },
	placed: { transition: { delayChildren: AT.back, staggerChildren: 0.07 } },
};

/** Out of line and gone, gathering speed as it slips; put back steadily, settling without overshoot. */
const pieceSlips: Variants = {
	apart: (drift: Drift) => ({ opacity: 0, ...drift, transition: { duration: 0.24, ease: 'easeIn' } }),
	placed: { opacity: 1, x: 0, y: 0, rotate: 0, transition: { duration: 0.32, ease: EASE } },
};

/** Generated pages arrive all at once and overeager: one bouncy pop. Sent away with no ceremony at all. */
const slopPops: Variants = {
	waiting: { opacity: 0, scale: 0.8, y: 24 },
	shown: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			delay: AT.pop,
			type: 'spring',
			stiffness: 420,
			damping: 15,
			opacity: { delay: AT.pop, duration: 0.12 },
		},
	},
	gone: { opacity: 0, transition: { duration: 0.14, ease: 'linear' } },
};

/** Reduced motion: the same poses, swapped instantly, as it was before any of this. */
const stillSequence: Variants = { apart: {}, placed: {} };
const stillPiece: Variants = {
	apart: { opacity: 0, transition: INSTANT },
	placed: { opacity: 1, x: 0, y: 0, rotate: 0, transition: INSTANT },
};
const stillSlop: Variants = {
	waiting: { opacity: 0 },
	shown: { opacity: 1, scale: 1, y: 0, transition: INSTANT },
	gone: { opacity: 0, transition: INSTANT },
};

/**
 * While a version is leaving it stays in the DOM until its exit finishes, so it is taken out of the accessibility tree
 * and the tab order, and can't catch the pointer, leaving one live h1 at a time.
 */
const useLeaving = () => {
	const leaving = !useIsPresent();
	return {
		leaving,
		props: {
			'aria-hidden': leaving || undefined,
			inert: leaving,
			className: leaving ? '[grid-area:1/1] pointer-events-none' : '[grid-area:1/1]',
		},
	};
};

type VersionProps = { measureRef: React.Ref<HTMLDivElement> };

const Crafted: FC<VersionProps & { returning: boolean }> = ({ measureRef, returning }) => {
	const still = useReducedMotion();
	const { leaving, props } = useLeaving();
	const piece = still ? stillPiece : pieceSlips;

	return (
		<motion.div
			ref={measureRef}
			{...props}
			variants={still ? stillSequence : craftedSequence}
			initial="apart"
			animate="placed"
			exit="apart"
		>
			<div className="mt-14 sm:mt-24">
				<motion.p
					variants={piece}
					custom={DRIFT.eyebrow}
					className="font-mono text-xs uppercase tracking-[0.22em] text-umber dark:text-dim"
				>
					Product &amp; software engineer
				</motion.p>
				<motion.h1
					variants={piece}
					custom={DRIFT.headline}
					className="isolate mt-5 max-w-4xl font-display text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.01em] sm:text-7xl lg:text-[5.5rem]"
				>
					I build software people can feel the{' '}
					<Mark leaving={leaving} returning={returning}>
						care
					</Mark>{' '}
					in.
				</motion.h1>
				<motion.p variants={piece} custom={DRIFT.lead} className="mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl">
					Full-stack engineer at{' '}
					<a
						href={links.tailwind}
						target="_blank"
						rel="noreferrer"
						className="underline decoration-stone underline-offset-4"
					>
						Tailwind
					</a>
					, happiest in the frontend, where a product either earns trust or loses it. I sweat type, spacing, empty
					states, and the 200 milliseconds nobody asked about.
				</motion.p>
				<motion.p
					variants={piece}
					custom={DRIFT.aside}
					className="mt-4 max-w-2xl text-lg leading-relaxed text-umber sm:text-xl dark:text-dim"
				>
					AI writes plenty of my code now. It doesn&rsquo;t get to decide when it&rsquo;s good.
				</motion.p>
			</div>
		</motion.div>
	);
};

/** The parody. Everything a generated landing page reaches for first. */
const Slop: FC<VersionProps> = ({ measureRef }) => {
	const still = useReducedMotion();
	const { props } = useLeaving();

	return (
		<div ref={measureRef} {...props}>
			<motion.div
				variants={still ? stillSlop : slopPops}
				initial="waiting"
				animate="shown"
				exit="gone"
				className="mt-10 rounded-3xl bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 px-6 py-14 text-center font-sans text-white shadow-2xl sm:mt-16 sm:py-20"
			>
				<span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur-sm">
					✨ Available for work ✨
				</span>
				<h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold sm:text-6xl">
					🚀 Passionate Full-Stack Developer Crafting Seamless Digital Experiences
				</h1>
				<p className="mx-auto mt-5 max-w-xl text-lg text-white/90">
					Leveraging cutting-edge technologies to delve into robust, scalable solutions that elevate your business to
					the next level.
				</p>
				<div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
					{['⚡ Blazing Fast', '🔒 Secure', '🎨 Beautiful'].map((label) => (
						<div
							key={label}
							className="rounded-2xl border border-white/30 bg-white/10 p-5 font-semibold backdrop-blur-sm"
						>
							{label}
						</div>
					))}
				</div>
				<p className="mt-10 text-sm text-white/80">You have seen this page before. That is the problem.</p>
			</motion.div>
		</div>
	);
};

/** How long after a click a height change is the swap's, and glides, rather than a reflow, which snaps. */
const GLIDE_WINDOW = 1000;

export const HeroSection: FC = () => {
	const [slop, setSlop] = useState(false);
	const [toggled, setToggled] = useState(false);
	const still = useReducedMotion();

	/**
	 * Both versions share one grid cell while they swap, and the cell is held at the height of whichever one is now in
	 * place, easing there over the first part of the swap. So the toggle row glides to its new spot while the outgoing
	 * version is leaving, and the incoming one arrives into room already made for it, instead of the row jumping when
	 * the outgoing one is finally removed. Until hydration (and without JS) the cell is just its natural height.
	 */
	const craftedRef = useRef<HTMLDivElement>(null);
	const slopRef = useRef<HTMLDivElement>(null);
	const toggledAt = useRef(-Infinity);
	const [box, setBox] = useState<{ height: number; glide: boolean }>();

	useEffect(() => {
		const element = (slop ? slopRef : craftedRef).current;
		if (!element) return;
		const observer = new ResizeObserver(() =>
			setBox({
				height: element.offsetHeight,
				glide: !still && performance.now() - toggledAt.current < GLIDE_WINDOW,
			}),
		);
		observer.observe(element);
		return () => observer.disconnect();
	}, [slop, still]);

	const toggle = () => {
		toggledAt.current = performance.now();
		setToggled(true);
		setSlop((value) => !value);
	};

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

			<motion.div
				initial={false}
				animate={box && { height: box.height }}
				transition={box?.glide ? { duration: 0.4, ease: EASE } : INSTANT}
			>
				<div className="grid grid-cols-1 items-start">
					<AnimatePresence initial={false}>
						{slop ? (
							<Slop key="slop" measureRef={slopRef} />
						) : (
							<Crafted key="crafted" measureRef={craftedRef} returning={toggled} />
						)}
					</AnimatePresence>
				</div>
			</motion.div>

			<div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs uppercase tracking-[0.15em]">
				<button
					type="button"
					role="switch"
					aria-checked={slop}
					onClick={toggle}
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
