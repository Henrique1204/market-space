import React from 'react';

import { TouchableOpacity } from 'react-native';

import { Box, HStack, Text, useTheme, VStack } from 'native-base';

import { ArrowRight, Tag } from 'phosphor-react-native';

const MyAdCard: Component = () => {
	const { colors } = useTheme();

	return (
		<VStack mt={8}>
			<Text color='gray.500' fontFamily='body' fontSize='sm' mb={3}>
				Seus produtos anunciados para venda
			</Text>

			<HStack bg='blue.100' p={4} rounded={6} alignItems='center'>
				<Tag size={22} color={colors.blue[500]} weight='bold' />

				<Box flex={1} mx={4}>
					<Text
						fontFamily='body'
						fontWeight='bold'
						color='gray.500'
						fontSize='lg'
					>
						4
					</Text>

					<Text fontFamily='body' color='gray.600' fontSize='xs'>
						anúncios ativos
					</Text>
				</Box>

				<TouchableOpacity>
					<HStack alignItems='center'>
						<Text
							fontFamily='body'
							fontWeight='bold'
							color='blue.500'
							fontSize='xs'
							mr={2}
						>
							Meus anúncios
						</Text>

						<ArrowRight size={16} color={colors.blue[500]} weight='bold' />
					</HStack>
				</TouchableOpacity>
			</HStack>
		</VStack>
	);
};

export default MyAdCard;
