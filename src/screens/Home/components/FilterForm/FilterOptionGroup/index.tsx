import React from 'react';

import { VStack, Text } from 'native-base';

import { FilterOptionGroupProps } from './types';

const FilterOptionGroup: ComponentWithChildren<FilterOptionGroupProps> = ({
	label,
	children,
}) => {
	return (
		<VStack mt={6}>
			<Text
				color='gray.600'
				fontSize='sm'
				fontWeight='bold'
				fontFamily='body'
				letterSpacing={0.5}
				mb={2}
			>
				{label}
			</Text>

			{children}
		</VStack>
	);
};

export default FilterOptionGroup;
