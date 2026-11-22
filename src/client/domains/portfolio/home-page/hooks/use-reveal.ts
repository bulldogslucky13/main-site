import { useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const EASE = [0.22, 1, 0.36, 1] as const;

/** Snap back to the hidden pose; only the way in is animated. */
export const INSTANT = { duration: 0 } as const;

/**
 * Content renders in its final pose on the server and without JS. Once mounted, an element that starts below the fold
 * is hidden instantly, then plays its entrance when it scrolls into view. Reduced motion never hides anything.
 */
export const useReveal = <T extends HTMLElement>() => {
	const ref = useRef<T>(null);
	const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
	const reduce = useReducedMotion();
	const [armed, setArmed] = useState(false);

	useEffect(() => {
		const element = ref.current;
		if (!element || reduce) return;
		if (element.getBoundingClientRect().top > window.innerHeight) setArmed(true);
	}, [reduce]);

	const hidden = armed && !inView && !reduce;
	return { ref, pose: hidden ? ('hidden' as const) : ('shown' as const) };
};
