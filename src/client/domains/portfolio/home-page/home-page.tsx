import Head from 'next/head';
import React, { FC } from 'react';
// import { BioSection } from './components/bio-section';
// import { ExperienceSection } from './components/experience-section';
import { LandingSection } from './components/landing-section';

export const HomePage: FC = () => {
	return (
		<>
			<Head>
				<title>Cameron Bristol - Product & Software Engineer</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<LandingSection />
			{/* <BioSection />
			<ExperienceSection /> */}
		</>
	);
};
