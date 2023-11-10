import React from 'react';

import { useWindowDimensions, TouchableOpacity } from 'react-native';
import { Box, FlatList, HStack, Image, Text, VStack } from 'native-base';

import Carousel from 'react-native-reanimated-carousel';

import ProductImageMock from '@assets/images/tenis.png';

const Mock = [
	ProductImageMock,
	ProductImageMock,
	ProductImageMock,
	ProductImageMock,
];

const GalleryCarrousel: Component = () => {
	const [imageActive, setImageActive] = React.useState<number>(0);

	const { width } = useWindowDimensions();

	return (
		<VStack position='relative'>
			<Carousel
				height={280}
				width={width}
				data={Mock}
				onSnapToItem={(active) => setImageActive(active)}
				scrollAnimationDuration={0}
				renderItem={({ item }) => (
					<Image
						width={width}
						h={80}
						resizeMode='cover'
						source={item}
						alt={`Imagem do produto anunciado`}
					/>
				)}
			/>

			<HStack w={width} h={2} position='absolute' bottom={2} space={1} px={1}>
				{Mock.map((_, index) => (
					<Box
						key={`gallery-button-${index}`}
						flex={1 / Mock.length}
						h={1}
						bg='gray.200'
						rounded='md'
						opacity={imageActive === index ? 1 : 0.6}
					/>
				))}
			</HStack>
		</VStack>
	);
};

export default GalleryCarrousel;
