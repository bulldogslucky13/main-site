import React, { FC } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

type LandingSectionProps = {};

export const LandingSection: FC<LandingSectionProps> = () => (
	<div className="relative flex w-full min-h-[100vh] px-5 sm:px-10">
		<div className="flex flex-col sm:flex-row w-full justify-center lg:flex-row items-center space-y-4 sm:space-x-10">
			<div className="relative flex-shrink-0 w-64 h-64 lg:w-96 lg:h-96">
				<Image src="/headshot.jpeg" alt="cameron-bristol-headshot" layout="fill" className="rounded-full" />
			</div>
			<div className="flex flex-col space-y-2">
				<h1 className="flex flex-col space-y-2 text-slate-800 dark:text-slate-50">
					<span className="text-xl uppercase">Hi! My name is</span>
					<span className="text-4xl font-semibold uppercase">Cameron Bristol</span>
				</h1>
				<p className="text-lg max-w-md text-slate-800 dark:text-slate-50">
					I&apos;m a <b>Full-Stack Web Developer</b> with a passion for user experience
				</p>
				<div className="flex flex-row justify-end space-x-1">
					<a
						href="https://github.com/bulldogslucky13"
						target="_blank"
						className="text-md text-slate-800 dark:text-slate-50"
						aria-label="My Github"
					>
						<FaGithub className="w-7 h-7" />
					</a>
					<a
						href="https://linkedin.com/in/cameron-bristol-940264186"
						target="_blank"
						className="text-md text-slate-800 dark:text-slate-50"
						aria-label="My LinkedIn"
					>
						<FaLinkedin className="w-7 h-7" />
					</a>
				</div>
			</div>
		</div>
	</div>
);
