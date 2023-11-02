import React from 'react';

import { Box, HStack, Text, useTheme } from 'native-base';

import Avatar from '@components/Avatar';
import Button from '@components/Button';
import { Plus } from 'phosphor-react-native';

const Header: Component = () => {
	const { colors } = useTheme();

	return (
		<HStack>
			<Avatar size={45} />

			<Box mx={4} flex={1}>
				<Text color='gray.700' fontFamily='body' fontSize='md'>
					Boas vindas,
				</Text>

				<Text
					color='gray.700'
					fontFamily='body'
					fontSize='md'
					fontWeight='bold'
				>
					Paulo
				</Text>
			</Box>

			<Button title='Criar anúncio' variant='secondary' size='small'>
				<Plus size={16} color={colors.white} />
			</Button>
		</HStack>
	);
};

export default Header;
