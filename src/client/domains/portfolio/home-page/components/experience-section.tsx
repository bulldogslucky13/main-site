import React, { FC } from 'react';

type ExperienceSectionProps = {};

export const ExperienceSection: FC<ExperienceSectionProps> = () => (
	<div className="flex w-full min-h-[50vh] px-5 sm:px-10">
		<div className="flex-1">
			<h3 className="font-bold text-2xl lg:text-4xl text-uppercase text-left lg:text-center text-slate-800 dark:text-slate-50">
				My Projects/Work
			</h3>
		</div>
	</div>
);
