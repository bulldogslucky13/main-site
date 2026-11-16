import React, { FC } from 'react';

/** Faith comes before the résumé, so it comes before the résumé on the page. */
export const FoundationSection: FC = () => (
	<section aria-labelledby="foundation-heading" className="border-y border-ink/15 dark:border-parchment/15">
		<div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
			<div>
				<p className="font-mono text-xs uppercase tracking-[0.22em] text-umber dark:text-dim">First things first</p>
				<h2 id="foundation-heading" className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
					I&rsquo;m a Christian before I&rsquo;m an engineer.
				</h2>
				<p className="mt-6 max-w-xl text-lg leading-relaxed">
					Jesus is the center of my life, and He is the reason I think small things are worth doing well. If even eating
					and drinking can be done for God&rsquo;s glory, so can a form field, a loading state, and a pull request.
				</p>
				<p className="mt-4 max-w-xl text-lg leading-relaxed text-umber dark:text-dim">
					So the standard isn&rsquo;t &ldquo;good enough to ship.&rdquo; It&rsquo;s whether the work honors Him.
				</p>
			</div>

			<figure className="self-center border-l-2 border-scripture pl-6 sm:pl-10 dark:border-scripture-light">
				<blockquote className="font-display text-3xl font-medium leading-[1.15] text-scripture sm:text-[2.75rem] dark:text-scripture-light">
					So, whether you eat or drink, or whatever you do, do all to the glory of God.
				</blockquote>
				<figcaption className="mt-5 font-mono text-xs uppercase tracking-[0.22em] text-scripture dark:text-scripture-light">
					1 Corinthians 10:31 <span className="opacity-70">· ESV</span>
				</figcaption>
			</figure>
		</div>
	</section>
);
