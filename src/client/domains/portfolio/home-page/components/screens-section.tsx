import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { FC } from 'react';
import { Screen, screens } from '~/client/domains/portfolio/home-page/content';
import { EASE, INSTANT, useReveal } from '~/client/domains/portfolio/home-page/hooks/use-reveal';

const label = 'font-mono text-xs uppercase tracking-[0.22em] text-umber dark:text-dim';
const rule = 'border-ink/15 dark:border-parchment/15';
const shadow = 'shadow-[0_10px_30px_-10px_rgba(22,18,15,0.45)]';

const WIDE = { width: 1600, height: 1000 };
const PHONE = { width: 780, height: 1688 };

/**
 * Each part moves the way the thing it draws would. The window opens, the address gets typed, the page loads, the
 * phone is set down beside it from its own side, and then the caption says what you are looking at.
 */
const AT = { window: 0, address: 0.35, page: 0.8, phone: 0.95, caption: 1.2 };

const windowOpens: Variants = {
	hidden: { opacity: 0, scale: 0.94, y: 20, transition: INSTANT },
	shown: { opacity: 1, scale: 1, y: 0, transition: { delay: AT.window, duration: 0.55, ease: EASE } },
};

const addressTypes: Variants = {
	hidden: { clipPath: 'inset(0 100% 0 0)', transition: INSTANT },
	shown: { clipPath: 'inset(0 0% 0 0)', transition: { delay: AT.address, duration: 0.4, ease: 'linear' } },
};

const pageLoads: Variants = {
	hidden: { opacity: 0, transition: INSTANT },
	shown: { opacity: 1, transition: { delay: AT.page, duration: 0.45, ease: 'easeOut' } },
};

/** `custom` is the side the phone sits on: -1 for left, 1 for right. */
const phoneSetDown: Variants = {
	hidden: (side: number) => ({ opacity: 0, x: side * 56, rotate: side * 7, transition: INSTANT }),
	shown: {
		opacity: 1,
		x: 0,
		rotate: 0,
		transition: { delay: AT.phone, type: 'spring', stiffness: 170, damping: 19 },
	},
};

const captionFollows: Variants = {
	hidden: { transition: INSTANT },
	shown: { transition: { delayChildren: AT.caption, staggerChildren: 0.09 } },
};

const captionLine: Variants = {
	hidden: { opacity: 0, y: 10, transition: INSTANT },
	shown: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
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
			<motion.span
				variants={addressTypes}
				className="min-w-0 truncate font-mono text-[0.625rem] tracking-[0.04em] text-umber sm:text-xs dark:text-dim"
			>
				{screen.url}
			</motion.span>
		</div>
		<motion.div variants={pageLoads}>
			<Image
				src={screen.wide.src}
				alt={screen.wide.alt}
				width={WIDE.width}
				height={WIDE.height}
				sizes="(min-width: 1024px) 600px, 86vw"
				className="block h-auto w-full"
			/>
		</motion.div>
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
	const { ref, pose } = useReveal<HTMLLIElement>();
	/** Phone on the left for even rows, right for odd; on desktop the caption takes the other side. */
	const phoneLeft = index % 2 === 0;

	return (
		<li ref={ref} className={`border-b py-10 sm:py-14 ${rule}`}>
			<motion.figure initial={false} animate={pose} className="grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
				{/* Padding in % tracks the width, so the phone's overhang below the browser scales with it. */}
				<div className="relative pb-[14%] lg:col-span-8 lg:pb-[12%]">
					<motion.div
						variants={windowOpens}
						style={{ transformOrigin: '50% 100%' }}
						className={`w-[86%] ${phoneLeft ? 'ml-auto' : ''}`}
					>
						<BrowserFrame screen={screen} />
					</motion.div>
					<motion.div
						variants={phoneSetDown}
						custom={phoneLeft ? -1 : 1}
						className={`absolute bottom-0 w-[26%] sm:w-[22%] ${phoneLeft ? 'left-0' : 'right-0'}`}
					>
						<PhoneFrame screen={screen} />
					</motion.div>
				</div>

				<motion.figcaption
					variants={captionFollows}
					className={`lg:col-span-4 lg:pb-[3%] ${phoneLeft ? '' : 'lg:order-first'}`}
				>
					<motion.div variants={captionLine} className="flex items-baseline gap-4">
						<span className="font-mono text-xs text-stone" aria-hidden="true">
							{String(index + 1).padStart(2, '0')}
						</span>
						<h3 className="font-display text-3xl font-semibold">{screen.name}</h3>
					</motion.div>
					<motion.p variants={captionLine} className="mt-3 max-w-md leading-relaxed">
						{screen.blurb}
					</motion.p>
					{screen.href && (
						<motion.a
							variants={captionLine}
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
						</motion.a>
					)}
				</motion.figcaption>
			</motion.figure>
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
