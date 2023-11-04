import React from 'react';

import { Text } from 'react-native';

import MainContainer from '@components/MainContainer';
import Header from '@components/Header';

const ProductDetails: React.FC = () => {
	return (
		<MainContainer>
			<Header />
			<Text>ProductDetails</Text>
		</MainContainer>
	);
};

export default ProductDetails;
