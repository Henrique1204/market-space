import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Box, Center, HStack, Text, useTheme } from 'native-base';

import { X } from 'phosphor-react-native';

import { IFilterTagForConditionProps } from './types';
import Show from '@components/Show';

const FilterTagForCondition: Component<IFilterTagForConditionProps> = ({
	label,
	value,
	selected,
	handleToggleSelection,
}) => {
	const { colors } = useTheme();

	const handlePress = () => handleToggleSelection(value);

	return (
		<TouchableOpacity activeOpacity={1} onPress={handlePress}>
			<HStack
				bg={selected ? 'blue.300' : 'gray.200'}
				alignItems='center'
				justifyContent='center'
				py={2}
				pl={4}
				pr={selected ? 2 : 4}
				borderRadius='3xl'
			>
				<Text
					color={selected ? 'white' : 'gray.500'}
					fontSize='sm'
					fontWeight='bold'
					fontFamily='body'
				>
					{label}
				</Text>

				<Show show={selected}>
					<Center
						ml={2}
						bg='gray.200'
						borderRadius='full'
						width={13}
						height={13}
					>
						<X size={10} color={colors.blue[300]} weight='bold' />
					</Center>
				</Show>
			</HStack>
		</TouchableOpacity>
	);
};

export default FilterTagForCondition;
