import { Center, ColorMode, Flex, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';

export type BioSectionProps = {
	colorMode: ColorMode;
	toggleColorMode: () => void;
};

export const BioSection: FC<BioSectionProps> = () => (
	<Center h="50vh" px={10} mx={10}>
		<Flex flex={1} justifyContent={['flex-start', 'flex-start', 'center']}>
			<Heading as="h3" textTransform="uppercase">
				About Me
			</Heading>
		</Flex>
	</Center>
);
