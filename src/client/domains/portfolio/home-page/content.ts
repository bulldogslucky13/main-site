export const links = {
	github: 'https://github.com/bulldogslucky13',
	linkedin: 'https://linkedin.com/in/cameron-bristol-940264186',
	dogleg: 'https://playdogleg.com',
	teachings: 'https://teachings.cameronbristol.xyz',
	loaves: 'https://loaves-and-lists.cameronbristol.xyz',
	tailwind: 'https://www.tailwindapp.com',
};

export type Strength = {
	title: string;
	body: string;
	proof: string;
};

export const strengths: Strength[] = [
	{
		title: 'Taste',
		body: 'Building got cheap. Knowing what to build, and what to cut, did not. I start with who it is for and stop when it is good for them.',
		proof: 'Dogleg: one course a day, two minutes a round. The constraint is the product.',
	},
	{
		title: 'Frontend craft',
		body: 'Design systems, accessible components, motion that means something. I studied Human-Computer Interaction in grad school, I design in the browser, and I can tell when it is off by a pixel.',
		proof: 'Teachings runs on a design system I built on React Aria, in light and dark.',
	},
	{
		title: 'The whole stack',
		body: 'Schema, row-level security, edge functions, push notifications, then back up to the padding. Nothing gets lost in a handoff when there isn’t one.',
		proof:
			'Loaves & Lists: offline PWA with realtime sync. First version shipped in about two hours; 51 migrations since.',
	},
	{
		title: 'Working with agents',
		body: 'I brief an agent the way I prepare a lesson: plainly, with the hard rules stated as hard rules. Then I check its work against something that can’t be talked out of it.',
		proof: 'Dogleg: 280+ commits co-authored with Claude, every round replayed server-side by the real engine.',
	},
];

export type Project = {
	name: string;
	when: string;
	role: string;
	href?: string;
	body: string;
	tags: string[];
};

export const projects: Project[] = [
	{
		name: 'Tailwind',
		when: 'Now',
		role: 'Engineer',
		href: links.tailwind,
		body: 'My day job. Marketing tools for small businesses and creators.',
		tags: ['Product', 'Full-stack'],
	},
	{
		name: 'Teachings',
		when: '2025 –',
		role: 'Design & build',
		href: links.teachings,
		body: 'A calm, streaming-style home for the lessons I teach. Search by Scripture passage, pick up a video where you left off.',
		tags: ['Next.js', 'React Aria', 'Design system'],
	},
	{
		name: 'Loaves & Lists',
		when: '2026',
		role: 'Design & build',
		href: links.loaves,
		body: 'A grocery app for one marriage and two iPhones. Aisle-sorted lists, recipe import, and reminders that know a 6:00 dinner does not start at 6:00.',
		tags: ['React', 'Supabase', 'PWA'],
	},
	{
		name: 'Dogleg',
		when: '2026',
		role: 'Co-creator',
		href: links.dogleg,
		body: 'A daily golf strategy game I built with a friend. Honest odds on every shot, and a grade for your decisions that ignores your luck.',
		tags: ['React', 'TypeScript', 'Supabase'],
	},
];

export type Print = {
	src: string;
	alt: string;
	caption: string;
	width: number;
	height: number;
	/** Desktop desk placement: percentages of the desk, rotation in degrees, width in px. */
	desk: { left: string; top: string; rotate: number; size: number };
};

export const prints: Print[] = [
	{
		src: '/work/sola-scriptura-highlights.jpg',
		alt: 'Twelve slides from the Sola Scriptura deck laid out in a grid',
		caption: 'The deck, built from code',
		width: 1600,
		height: 1200,
		desk: { left: '54%', top: '2%', rotate: 2, size: 470 },
	},
	{
		src: '/work/romans-11.jpg',
		alt: 'Cover slide: Studying Romans 11, God’s future plan for Israel?',
		caption: 'Romans 11',
		width: 1536,
		height: 1024,
		desk: { left: '1%', top: '56%', rotate: -4, size: 300 },
	},
	{
		src: '/work/local-church.jpg',
		alt: 'Cover slide: The Importance of the Local Church, with a chapel silhouette at sunrise',
		caption: 'The Importance of the Local Church',
		width: 1500,
		height: 844,
		desk: { left: '33%', top: '58%', rotate: -2, size: 350 },
	},
	{
		src: '/work/sola-scriptura-cover.jpg',
		alt: 'Cover slide: Sola Scriptura Case Studies, parchment and red blocks beside a cathedral',
		caption: 'Sola Scriptura: Case Studies',
		width: 1600,
		height: 900,
		desk: { left: '0%', top: '0%', rotate: -1.5, size: 480 },
	},
	{
		src: '/work/truth-that-leads-to-godliness.jpg',
		alt: 'Cover slide: Truth That Leads to Godliness',
		caption: 'Truth That Leads to Godliness',
		width: 1600,
		height: 900,
		desk: { left: '68%', top: '57%', rotate: 3, size: 320 },
	},
];
