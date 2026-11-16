import { Cormorant_Garamond, IBM_Plex_Mono, Instrument_Sans } from 'next/font/google';
import React, { FC } from 'react';
import { FooterSection } from './components/footer-section';
import { FoundationSection } from './components/foundation-section';
import { HeroSection } from './components/hero-section';
import { SlidesSection } from './components/slides-section';
import { WorkSection } from './components/work-section';

const display = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	style: ['normal', 'italic'],
	variable: '--font-display',
});
const sans = Instrument_Sans({ subsets: ['latin'], variable: '--font-sans' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

export const HomePage: FC = () => (
	<div
		className={`${display.variable} ${sans.variable} ${mono.variable} min-h-screen overflow-x-clip bg-parchment font-sans text-ink antialiased dark:bg-charcoal dark:text-parchment`}
	>
		<HeroSection />
		<main>
			<FoundationSection />
			<WorkSection />
			<SlidesSection />
		</main>
		<FooterSection />
	</div>
);
