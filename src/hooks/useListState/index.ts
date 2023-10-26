import React from 'react';

import { addFn, removeFn, useListStateFn } from './types';

/**
 * Hook para controlar listas e encapsular ações de adicionar e remover.
 */
const useListState: useListStateFn = (initialState = []) => {
	const [list, setList] = React.useState(initialState);

	const add: addFn<any> = (item) => {
		setList((prevList) => {
			if (Array.isArray(item)) {
				return [...prevList, ...item];
			}

			return [...prevList, item];
		});
	};

	const remove: removeFn = (toRemove) => {
		setList((prevList) => {
			if (Array.isArray(toRemove)) {
				return prevList.filter((_, index) => !toRemove.includes(index));
			}

			return prevList.filter((_, index) => index !== toRemove);
		});
	};

	return [list, setList, { add, remove }];
};

export default useListState;
