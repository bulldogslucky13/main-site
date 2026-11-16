import React, { FC } from 'react';
import { projects, strengths } from '~/client/domains/portfolio/home-page/content';

const label = 'font-mono text-xs uppercase tracking-[0.22em] text-umber dark:text-dim';
const rule = 'border-ink/15 dark:border-parchment/15';

export const WorkSection: FC = () => (
	<>
		<section aria-labelledby="strengths-heading" className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-10 sm:py-24">
			<p className={label}>What I bring</p>
			<h2
				id="strengths-heading"
				className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl"
			>
				Typing got cheap. Care didn&rsquo;t.
			</h2>
			<ol className={`mt-12 grid gap-x-12 border-t md:grid-cols-2 ${rule}`}>
				{strengths.map((strength, index) => (
					<li key={strength.title} className={`border-b py-8 ${rule}`}>
						<div className="flex items-baseline gap-4">
							<span className="font-mono text-xs text-stone" aria-hidden="true">
								{String(index + 1).padStart(2, '0')}
							</span>
							<h3 className="font-display text-3xl font-semibold">{strength.title}</h3>
						</div>
						<p className="mt-3 leading-relaxed">{strength.body}</p>
						<p className="mt-4 font-mono text-xs leading-relaxed text-umber dark:text-dim">{strength.proof}</p>
					</li>
				))}
			</ol>
		</section>

		<section id="work" aria-labelledby="work-heading" className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-10 sm:pb-24">
			<p className={label}>Selected work</p>
			<h2 id="work-heading" className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
				Mostly built for people I know by name.
			</h2>
			<ul className={`mt-12 border-t ${rule}`}>
				{projects.map((project) => {
					const Row = project.href ? 'a' : 'div';
					return (
						<li key={project.name} className={`border-b ${rule}`}>
							<Row
								{...(project.href ? { href: project.href, target: '_blank', rel: 'noreferrer' } : {})}
								className="group grid gap-x-8 gap-y-2 py-7 transition-colors hover:bg-vellum/50 sm:px-3 md:grid-cols-[6rem_14rem_1fr] dark:hover:bg-umber/30"
							>
								<span className="pt-2 font-mono text-xs uppercase tracking-[0.15em] text-stone">{project.when}</span>
								<div>
									<h3 className="font-display text-3xl font-semibold">
										{project.name}
										{project.href && (
											<span
												className="ml-2 inline-block text-xl transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
												aria-hidden="true"
											>
												↗
											</span>
										)}
									</h3>
									<p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-umber dark:text-dim">
										{project.role}
									</p>
								</div>
								<div>
									<p className="max-w-xl leading-relaxed">{project.body}</p>
									<p className="mt-3 font-mono text-xs text-umber dark:text-dim">{project.tags.join(' · ')}</p>
								</div>
							</Row>
						</li>
					);
				})}
			</ul>
		</section>
	</>
);
