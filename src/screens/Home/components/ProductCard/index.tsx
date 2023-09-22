import React from 'react';

import { Box, HStack, Image, Text, VStack } from 'native-base';

import ProductImageMock from '@assets/images/tenis.png';

import Avatar from '@components/Avatar';

import { ProductCardProps } from './types';

import * as CONSTANTS from './constants';

const ProductCard: Component<ProductCardProps> = ({ name, status, price }) => {
	return (
		<VStack flex={1}>
			<HStack flex={1} position='relative'>
				<Image
					flex={1}
					h={120}
					rounded={6}
					resizeMode='cover'
					source={ProductImageMock}
					alt={`Imagem do produto anunciado "${name}"`}
				/>

				<HStack
					position='absolute'
					top={0}
					left={0}
					w='full'
					p={2}
					justifyContent='space-between'
					alignItems='center'
				>
					<Avatar borderColor='white' size={6} />

					<Box
						rounded={10}
						px={3}
						py={1}
						bg={CONSTANTS.STATUS_TAG_BG_ENUM[status]}
					>
						<Text
							fontFamily='body'
							color='white'
							fontWeight='bold'
							fontSize={10}
							letterSpacing={0.5}
						>
							{CONSTANTS.STATUS_TAG_LABEL_ENUM[status]}
						</Text>
					</Box>
				</HStack>
			</HStack>

			<Text fontFamily='body' fontSize='sm' color='gray.600' mt={2}>
				{name}
			</Text>

			<HStack alignItems='center'>
				<Text
					fontFamily='body'
					fontWeight='bold'
					fontSize='xs'
					color='gray.700'
					mr={1}
				>
					R$
				</Text>

				<Text
					fontFamily='body'
					fontWeight='bold'
					fontSize='md'
					color='gray.700'
				>
					{price.toFixed(2).replace('.', ',')}
				</Text>
			</HStack>
		</VStack>
	);
};

export default ProductCard;
