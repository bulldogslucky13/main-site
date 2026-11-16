import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react';
import { Print, prints } from '../content';

const Tape: FC = () => (
	<span
		aria-hidden="true"
		className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 -rotate-2 bg-vellum/80 shadow-sm dark:bg-dim/70"
	/>
);

const PrintCard: FC<{ print: Print }> = ({ print }) => (
	<figure className="relative bg-white p-2 pb-1 shadow-[0_10px_30px_-10px_rgba(22,18,15,0.45)] dark:bg-[#EDE5D6]">
		<Tape />
		<Image
			src={print.src}
			alt={print.alt}
			width={print.width}
			height={print.height}
			sizes="(min-width: 1024px) 480px, 100vw"
			draggable={false}
			className="pointer-events-none block h-auto w-full select-none"
		/>
		<figcaption className="px-1 py-2 font-display text-lg italic leading-none text-umber">{print.caption}</figcaption>
	</figure>
);

/** Drag only where there is room and a fine pointer; touch screens get a plain stack. */
const useDesk = () => {
	const [desk, setDesk] = useState(false);
	useEffect(() => {
		const query = window.matchMedia('(min-width: 1024px) and (pointer: fine)');
		const update = () => setDesk(query.matches);
		update();
		query.addEventListener('change', update);
		return () => query.removeEventListener('change', update);
	}, []);
	return desk;
};

const DESK_HEIGHT = 780;

/** Reading order for the stacked layout; the desk order is z-order instead. */
const STACK_ORDER = ['cover', 'highlights', 'local-church', 'romans', 'truth'];
const rank = (print: Print) => STACK_ORDER.findIndex((key) => print.src.includes(key));
const stacked = [...prints].sort((a, b) => rank(a) - rank(b));

export const SlidesSection: FC = () => {
	const desk = useDesk();
	const bounds = useRef<HTMLDivElement>(null);
	const [deskWidth, setDeskWidth] = useState(0);
	const [order, setOrder] = useState<string[]>(() => prints.map((print) => print.src));

	useEffect(() => {
		const element = bounds.current;
		if (!desk || !element) return;
		const observer = new ResizeObserver(() => setDeskWidth(element.clientWidth));
		observer.observe(element);
		return () => observer.disconnect();
	}, [desk]);

	/** Keep each print on the desk. Computed by hand: measured constraints drift while images load. */
	const constraintsFor = (print: Print) => {
		const left = (parseFloat(print.desk.left) / 100) * deskWidth;
		const top = (parseFloat(print.desk.top) / 100) * DESK_HEIGHT;
		const height = (print.desk.size * print.height) / print.width + 52;
		return {
			left: -left,
			top: -top,
			right: Math.max(0, deskWidth - left - print.desk.size),
			bottom: Math.max(0, DESK_HEIGHT - top - height),
		};
	};

	const lift = (src: string) => setOrder((current) => [...current.filter((item) => item !== src), src]);

	return (
		<section aria-labelledby="slides-heading" className="bg-vellum/60 dark:bg-ink/60">
			<div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-10 sm:py-24">
				<div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
					<div>
						<p className="font-mono text-xs uppercase tracking-[0.22em] text-umber dark:text-dim">
							Design, off the clock
						</p>
						<h2 id="slides-heading" className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
							I teach the Bible. I design the slides, too.
						</h2>
					</div>
					<div className="space-y-4 text-lg leading-relaxed">
						<p>
							I&rsquo;m a student at Midwestern Baptist Theological Seminary and serve part-time with the college
							ministry at my church. When I get to teach, I like to design the slides myself. A careless slide tells the
							room the content is careless too.
						</p>
						<p className="text-umber dark:text-dim">
							<em>Sola Scriptura</em> is the one I&rsquo;m proudest of: a whole deck system written in code. Seventeen
							slide types, one theme file, built straight to Keynote. Because the design lives in the system, an agent
							can turn my teaching transcript into slides and they come out right: Scripture always in red, creeds and
							councils quieter beneath it. The hierarchy is the argument.
						</p>
					</div>
				</div>

				{desk ? (
					<>
						<div ref={bounds} className="relative mt-14" style={{ height: DESK_HEIGHT }}>
							{prints.map((print) => (
								<motion.div
									key={print.src}
									drag
									dragConstraints={constraintsFor(print)}
									dragElastic={0.15}
									dragMomentum={false}
									onPointerDown={() => lift(print.src)}
									whileHover={{ scale: 1.02 }}
									whileDrag={{ scale: 1.05, rotate: 0 }}
									initial={{ rotate: print.desk.rotate }}
									style={{
										left: print.desk.left,
										top: print.desk.top,
										width: print.desk.size,
										zIndex: order.indexOf(print.src) + 1,
									}}
									className="absolute cursor-grab active:cursor-grabbing"
								>
									<PrintCard print={print} />
								</motion.div>
							))}
						</div>
						<p className="mt-4 text-center font-mono text-xs uppercase tracking-[0.22em] text-umber dark:text-dim">
							Go ahead, move them around.
						</p>
					</>
				) : (
					<div className="mt-12 grid gap-10 sm:grid-cols-2">
						{stacked.map((print, index) => (
							<div key={print.src} style={{ transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)` }}>
								<PrintCard print={print} />
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
};
