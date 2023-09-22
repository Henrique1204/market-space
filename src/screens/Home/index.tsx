import React from 'react';

import MainContainer from '@components/MainContainer';

import Header from './components/Header';
import MyAdCard from './components/MyAdCard';
import SearchField from './components/SearchField';
import ProductCard from './components/ProductCard';
import { HStack } from 'native-base';

const Home: React.FC = () => {
	return (
		<MainContainer>
			<Header />

			<MyAdCard />

			<SearchField />

			<ProductCard name='Tênis vermelho' status='new' price={59.9} />
		</MainContainer>
	);
};

export default Home;
