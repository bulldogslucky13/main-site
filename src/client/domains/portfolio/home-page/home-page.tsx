import { Text, useColorMode } from '@chakra-ui/react';
import Head from 'next/head';
import React, { FC } from 'react';
import { BioSection } from './components/bio-section';
import { ExperienceSection } from './components/experience-section';
import { LandingSection } from './components/landing-section';

export const HomePage: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Head>
				<title>Cameron Bristol - Web Developer</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<LandingSection colorMode={colorMode} toggleColorMode={toggleColorMode} />
			<BioSection colorMode={colorMode} toggleColorMode={toggleColorMode} />
			<ExperienceSection colorMode={colorMode} toggleColorMode={toggleColorMode} />
		</>
	);
};
