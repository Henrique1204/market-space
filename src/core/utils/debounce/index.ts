const debounce = (callback: any, delay: number) => {
	let timer: number | null = null;

	const clearDebounce = () => {
		if (timer) {
			window.clearTimeout(timer);

			timer = null;
		}
	};

	const methodWithDebounce = (...args: any) => {
		if (timer) timer = null;

		timer = window.setTimeout(() => {
			callback(...args);

			timer = null;
		}, delay) as unknown as number;
	};

	return [methodWithDebounce, clearDebounce];
};

export default debounce;
