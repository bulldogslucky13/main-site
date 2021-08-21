import {
	Avatar,
	Box,
	Center,
	Heading,
	Stack,
	VStack,
	Text,
	Switch,
	useColorMode,
	Flex,
	IconButton,
	HStack,
	ButtonGroup,
} from '@chakra-ui/react';
import Head from 'next/head';
import React, { FC } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const HomePage: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Head>
				<title>Cameron Bristol - Web Developer</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Center h="100vh" px={10} position="relative">
				<Flex flexDir="row" position="absolute" top={10} right={10}>
					<Box as="label" htmlFor="color-mode" pe={2}>
						Mode: {colorMode.valueOf().charAt(0).toUpperCase() + colorMode.valueOf().slice(1)}
					</Box>
					<Switch size="lg" onChange={toggleColorMode} id="color-mode" />
				</Flex>
				<Stack direction={['column', 'column', 'row', 'row']} align="center" spacing={10}>
					<Avatar src="/headshot.jpeg" name="headshot" boxSize={['16rem', '16rem', '24rem', '24rem']}></Avatar>
					<VStack align="left" spacing={3}>
						<Box as="span" fontSize="xl" textTransform="uppercase">
							Hi! My name is
						</Box>
						<Heading as="h1" fontSize="4xl" textTransform="uppercase">
							Cameron Bristol
						</Heading>
						<Box as="span" fontSize="lg" maxW="26rem">
							I&apos;m a <b>Full-Stack Web Developer</b> with a passion for user experience
						</Box>
						<HStack justifyContent="flex-end">
							<ButtonGroup variant="ghost" spacing={1}>
								<IconButton
									as="a"
									href="https://github.com/bulldogslucky13"
									target="_blank"
									size="md"
									aria-label="My Github"
									icon={<FaGithub size="1.75rem" />}
								/>
								<IconButton
									as="a"
									href="https://linkedin.com/in/cameron-bristol-940264186"
									target="_blank"
									size="md"
									aria-label="My LinkedIn"
									icon={<FaLinkedin size="1.75rem" />}
								/>
							</ButtonGroup>
						</HStack>
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
