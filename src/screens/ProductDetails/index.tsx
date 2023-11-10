import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { VStack } from 'native-base';

import { AppStackNavigatorRoutesProps } from '@types_/routes';

import MainContainer from '@components/MainContainer';
import Header from '@components/Header';

import GalleryCarrousel from './components/GalleryCarrousel';

const ProductDetails: React.FC = () => {
	const { navigate } = useNavigation<AppStackNavigatorRoutesProps>();

	const goToAppTabs = () => navigate('appTabsRoutes');

	return (
		<VStack flex={1}>
			<Header bg='gray.200' onGoBack={goToAppTabs} />

			<GalleryCarrousel />

			<MainContainer></MainContainer>
		</VStack>
	);
};

export default ProductDetails;
