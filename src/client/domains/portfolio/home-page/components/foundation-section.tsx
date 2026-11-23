import { motion, Variants } from 'framer-motion';
import React, { FC } from 'react';
import { EASE, INSTANT, useReveal } from '~/client/domains/portfolio/home-page/hooks/use-reveal';

/**
 * The thought is revealed in the order it runs. A margin line is ruled down beside the passage, the verse appears
 * beside it, then where it comes from, and last, after a longer beat, the conclusion drawn from it. Only fades and
 * small rises: it is Scripture, so nothing here performs.
 */
const AT = { rule: 0, verse: 0.3, citation: 0.75, standard: 1.15 };

const ruleDrawn: Variants = {
	hidden: { scaleY: 0, transition: INSTANT },
	shown: { scaleY: 1, transition: { delay: AT.rule, duration: 0.6, ease: EASE } },
};

const verseAppears: Variants = {
	hidden: { opacity: 0, y: 10, transition: INSTANT },
	shown: { opacity: 1, y: 0, transition: { delay: AT.verse, duration: 0.6, ease: EASE } },
};

const citationAppears: Variants = {
	hidden: { opacity: 0, y: 6, transition: INSTANT },
	shown: { opacity: 1, y: 0, transition: { delay: AT.citation, duration: 0.45, ease: EASE } },
};

const standardAppears: Variants = {
	hidden: { opacity: 0, y: 8, transition: INSTANT },
	shown: { opacity: 1, y: 0, transition: { delay: AT.standard, duration: 0.45, ease: EASE } },
};

/** Faith comes before the résumé, so it comes before the résumé on the page. */
export const FoundationSection: FC = () => {
	const { ref, pose } = useReveal<HTMLDivElement>();

	return (
		<section aria-labelledby="foundation-heading" className="border-y border-ink/15 dark:border-parchment/15">
			<div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
				<div>
					<p className="font-mono text-xs uppercase tracking-[0.22em] text-umber dark:text-dim">First things first</p>
					<h2 id="foundation-heading" className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
						I&rsquo;m a Christian before I&rsquo;m an engineer.
					</h2>
					<p className="mt-6 max-w-xl text-lg leading-relaxed">
						Jesus is the center of my life, and He is the reason I think small things are worth doing well. If even
						eating and drinking can be done for God&rsquo;s glory, so can a form field, a loading state, and a pull
						request.
					</p>
				</div>

				<motion.div ref={ref} initial={false} animate={pose} className="self-center">
					{/* The rule is its own element so it can be drawn. Padding is the old 1.5rem / 2.5rem plus its 2px width. */}
					<figure className="relative pl-[calc(1.5rem+2px)] sm:pl-[calc(2.5rem+2px)]">
						<motion.span
							aria-hidden="true"
							variants={ruleDrawn}
							style={{ transformOrigin: '50% 0%' }}
							className="absolute inset-y-0 left-0 w-0.5 bg-scripture dark:bg-scripture-light"
						/>
						<motion.blockquote
							variants={verseAppears}
							className="font-display text-3xl font-medium leading-[1.15] text-scripture sm:text-[2.75rem] dark:text-scripture-light"
						>
							So, whether you eat or drink, or whatever you do, do all to the glory of God.
						</motion.blockquote>
						<motion.figcaption
							variants={citationAppears}
							className="mt-5 font-mono text-xs uppercase tracking-[0.22em] text-scripture dark:text-scripture-light"
						>
							1 Corinthians 10:31 <span className="opacity-70">· ESV</span>
						</motion.figcaption>
					</figure>
					<motion.p
						variants={standardAppears}
						className="mt-8 max-w-xl text-lg leading-relaxed text-umber dark:text-dim"
					>
						So the standard isn&rsquo;t &ldquo;good enough to ship.&rdquo; It&rsquo;s whether the work honors Him.
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
};
