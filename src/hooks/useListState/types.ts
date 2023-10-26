import { Dispatch, SetStateAction } from 'react';

export type addFn<T = {}> = (item: T | T[]) => void;
export type removeFn = (index: number | number[]) => void;

export type UseListStateReturn<T> = [
	list: T[],
	setList: Dispatch<SetStateAction<T[]>>,
	control: {
		add: addFn<T>;
		remove: removeFn;
	}
];

export type useListStateFn = <T>(initialState?: T[]) => UseListStateReturn<T>;
