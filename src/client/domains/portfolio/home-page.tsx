import { Avatar, Box, Center, Heading, Stack, VStack, Text, Switch, useColorMode, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React, { FC } from 'react';

export const HomePage: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	console.log(colorMode);
	return (
		<>
			<Head>
				<title>Cameron Bristol - Web Developer</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Center h="100vh" px={10} position="relative">
				<Flex flexDir="row" position="absolute" top={10} right={10}>
					<Box as="span" pe={2}>
						Mode: {colorMode.valueOf().charAt(0).toUpperCase() + colorMode.valueOf().slice(1)}
					</Box>
					<Switch size="lg" onChange={toggleColorMode} id="color-mode" />
				</Flex>
				<Stack direction={['column', 'column', 'row', 'row']} align="center" spacing={10}>
					<Avatar src="/headshot.jpeg" boxSize={['16rem', '16rem', '24rem', '24rem']}></Avatar>
					<VStack align="left">
						<Box as="span" fontSize="xl" textTransform="uppercase">
							Hi! My name is
						</Box>
						<Heading as="h1" fontSize="4xl" textTransform="uppercase">
							Cameron Bristol
						</Heading>
						<Box as="span" fontSize="lg" maxW="26rem">
							I&apos;m a <b>Full-Stack Web Developer</b> with specialities in awesome user interface, design, and
							functionality.
						</Box>
					</VStack>
				</Stack>
				<Text position="absolute" fontSize="lg" bottom={10}>
					Keep scrolling... I know you want to
				</Text>
			</Center>
			<Center h="50vh" px={10}>
				<Box as="span">About Me (Coming Soon)</Box>
			</Center>
			<Center h="50vh" px={10}>
				<Box as="span">Look at what I've done! (Coming Soon)</Box>
			</Center>
			<Center h="50vh" px={10}>
				<Box as="span">Contact Me (Coming Soon)</Box>
			</Center>
		</>
	);
};
