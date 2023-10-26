import React from 'react';

import { useActiveClickFn } from './types';

/**
 * Hook para simular o evento de "active" do css do navegador.
 */
const useActiveClick: useActiveClickFn = (delay) => {
	const [active, setActive] = React.useState<boolean>(false);

	const delayTimer = React.useRef<number>(null);

	const onPressIn = () => setActive(true);

	const onPressOut = () => {
		// @ts-ignore
		delayTimer.current = setTimeout(() => setActive(false), delay || 0);
	};

	React.useEffect(() => {
		return () => {
			delayTimer.current && clearTimeout(delayTimer.current);
		};
	}, []);

	return {
		active,
		onPressIn,
		onPressOut,
	};
};

export default useActiveClick;
