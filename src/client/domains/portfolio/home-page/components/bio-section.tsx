import React, { FC } from 'react';

type BioSectionProps = {};

export const BioSection: FC<BioSectionProps> = () => (
	<div className="flex w-full min-h-[50vh] px-5 sm:px-10">
		<div className="flex-1">
			<h3 className="font-bold text-2xl lg:text-4xl text-uppercase text-left lg:text-center text-slate-800 dark:text-slate-50">
				About Me
			</h3>
		</div>
	</div>
);
