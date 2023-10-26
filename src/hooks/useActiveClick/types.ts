export type UseActiveClickReturn = {
	active: boolean;

	onPressIn: () => void;
	onPressOut: () => void;
};

export type useActiveClickFn = (delay?: number) => UseActiveClickReturn;
