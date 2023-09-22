import React from 'react';

import { Box, HStack, Text, useTheme, VStack } from 'native-base';

import { MagnifyingGlass, Sliders } from 'phosphor-react-native';

import Input from '@components/Input';

const SearchField: Component = () => {
	const { colors } = useTheme();

	return (
		<VStack mt={8}>
			<Text color='gray.500' fontFamily='body' fontSize='sm' mb={3}>
				Compre produtos variados
			</Text>

			<HStack alignItems='center' position='relative'>
				<Input h={12} pr={20} placeholder='Buscar anúncio' />

				<HStack
					h={12}
					alignItems='center'
					position='absolute'
					top={0}
					right={0}
					pr={4}
				>
					<MagnifyingGlass size={20} color={colors.gray[700]} weight='bold' />

					<Box h={4} w={0.5} bg='gray.400' mx={2} />

					<Sliders size={20} color={colors.gray[700]} weight='bold' />
				</HStack>
			</HStack>
		</VStack>
	);
};

export default SearchField;
