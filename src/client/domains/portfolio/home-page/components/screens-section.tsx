import { motion, useInView, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Screen, screens } from '~/client/domains/portfolio/home-page/content';

const label = 'font-mono text-xs uppercase tracking-[0.22em] text-umber dark:text-dim';
const rule = 'border-ink/15 dark:border-parchment/15';
const shadow = 'shadow-[0_10px_30px_-10px_rgba(22,18,15,0.45)]';

const WIDE = { width: 1600, height: 1000 };
const PHONE = { width: 780, height: 1688 };
const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Content renders visible on the server and without JS. Once mounted, a figure that starts below the fold is hidden
 * instantly and eased in when it scrolls into view. Reduced motion never hides anything.
 */
const useReveal = () => {
	const ref = useRef<HTMLLIElement>(null);
	const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
	const reduce = useReducedMotion();
	const [armed, setArmed] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element || reduce) return;
		const belowFold = element.getBoundingClientRect().top > window.innerHeight;
		if (belowFold) setArmed(true);
	}, [reduce]);

	return { ref, hidden: armed && !inView && !reduce };
};

const BrowserFrame: FC<{ screen: Screen }> = ({ screen }) => (
	<div
		className={`overflow-hidden rounded-md border bg-parchment dark:bg-ink ${rule} ${shadow} dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]`}
	>
		<div className={`flex items-center gap-3 border-b bg-vellum/60 px-3 py-2 dark:bg-umber/40 ${rule}`}>
			<span className="flex shrink-0 gap-1.5" aria-hidden="true">
				<span className="size-1.5 rounded-full bg-stone/70" />
				<span className="size-1.5 rounded-full bg-stone/70" />
				<span className="size-1.5 rounded-full bg-stone/70" />
			</span>
			<span className="min-w-0 truncate font-mono text-[0.625rem] tracking-[0.04em] text-umber sm:text-xs dark:text-dim">
				{screen.url}
			</span>
		</div>
		<Image
			src={screen.wide.src}
			alt={screen.wide.alt}
			width={WIDE.width}
			height={WIDE.height}
			sizes="(min-width: 1024px) 600px, 86vw"
			className="block h-auto w-full"
		/>
	</div>
);

const PhoneFrame: FC<{ screen: Screen }> = ({ screen }) => (
	<div
		className={`rounded-[12px] bg-ink p-[4%] ring-1 ring-ink/20 sm:rounded-[20px] lg:rounded-[22px] dark:bg-[#0d0b09] dark:ring-parchment/20 ${shadow} dark:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]`}
	>
		<Image
			src={screen.phone.src}
			alt={screen.phone.alt}
			width={PHONE.width}
			height={PHONE.height}
			sizes="(min-width: 1024px) 150px, 26vw"
			className="block h-auto w-full rounded-[9px] sm:rounded-[15px] lg:rounded-[17px]"
		/>
	</div>
);

const ScreenFigure: FC<{ screen: Screen; index: number }> = ({ screen, index }) => {
	const { ref, hidden } = useReveal();
	/** Phone on the left for even rows, right for odd; on desktop the caption takes the other side. */
	const phoneLeft = index % 2 === 0;

	return (
		<li ref={ref} className={`border-b py-10 sm:py-14 ${rule}`}>
			<figure className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
				{/* Padding in % tracks the width, so the phone's overhang below the browser scales with it. */}
				<div className="relative pb-[14%] lg:col-span-8 lg:pb-[12%]">
					<motion.div
						initial={false}
						animate={hidden ? { opacity: 0, y: 24 } : { opacity: 1, y: 0 }}
						transition={hidden ? { duration: 0 } : { duration: 0.7, ease: EASE }}
						className={`w-[86%] ${phoneLeft ? 'ml-auto' : ''}`}
					>
						<BrowserFrame screen={screen} />
					</motion.div>
					<motion.div
						initial={false}
						animate={hidden ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
						transition={hidden ? { duration: 0 } : { duration: 0.8, delay: 0.15, ease: EASE }}
						className={`absolute bottom-0 w-[26%] sm:w-[22%] ${phoneLeft ? 'left-0' : 'right-0'}`}
					>
						<PhoneFrame screen={screen} />
					</motion.div>
				</div>

				<figcaption className={`lg:col-span-4 lg:pb-[3%] ${phoneLeft ? '' : 'lg:order-first'}`}>
					<div className="flex items-baseline gap-4">
						<span className="font-mono text-xs text-stone" aria-hidden="true">
							{String(index + 1).padStart(2, '0')}
						</span>
						<h3 className="font-display text-3xl font-semibold">{screen.name}</h3>
					</div>
					<p className="mt-3 max-w-md leading-relaxed">{screen.blurb}</p>
					{screen.href && (
						<a
							href={screen.href}
							target="_blank"
							rel="noreferrer"
							className="group mt-5 inline-flex items-baseline gap-1.5 font-mono text-xs uppercase tracking-[0.22em] text-ink underline decoration-stone underline-offset-4 dark:text-parchment"
						>
							Visit<span className="sr-only"> {screen.name} (opens in a new tab)</span>
							<span
								className="inline-block text-sm transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
								aria-hidden="true"
							>
								↗
							</span>
						</a>
					)}
				</figcaption>
			</figure>
		</li>
	);
};

export const ScreensSection: FC = () => (
	<section aria-labelledby="screens-heading" className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-10 sm:pb-24">
		<p className={label}>On screen</p>
		<h2 id="screens-heading" className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
			Easier to show than to tell.
		</h2>
		<ol className={`mt-12 border-t ${rule}`}>
			{screens.map((screen, index) => (
				<ScreenFigure key={screen.name} screen={screen} index={index} />
			))}
		</ol>
	</section>
);
