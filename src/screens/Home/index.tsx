import React from 'react';

import { FlatList, View, VStack } from 'native-base';

import Header from './components/Header';
import MyAdCard from './components/MyAdCard';
import SearchField from './components/SearchField';

import ProductCard from './components/ProductCard';

import { ProductStatusEnum } from './components/ProductCard/types';

const PRODUCT_MOCK = [
	{ id: 1, name: 'Tênis vermelho', status: 'new', price: 59.9 },
	{ id: 2, name: 'Tênis vermelho', status: 'new', price: 59.9 },
	{ id: 3, name: 'Tênis vermelho', status: 'new', price: 59.9 },
	{ id: 4, name: 'Tênis vermelho', status: 'new', price: 59.9 },
	{ id: 5, name: 'Tênis vermelho', status: 'new', price: 59.9 },
	{ id: 6, name: 'Tênis vermelho', status: 'new', price: 59.9 },
];

const Home: React.FC = () => {
	return (
		<VStack px={8} pt={4} pb={4} flex={1} bg='gray.200'>
			<Header />

			<MyAdCard />

			<SearchField />

			<FlatList
				data={PRODUCT_MOCK}
				keyExtractor={({ id }) => id.toString()}
				numColumns={2}
				flex={1}
				initialNumToRender={6}
				maxToRenderPerBatch={6}
				columnWrapperStyle={{
					gap: 16,
				}}
				renderItem={({ item }) => (
					<View flex={1 / 2} mb={4}>
						<ProductCard
							id={item.id}
							name={item.name}
							status={item.status as ProductStatusEnum}
							price={item.price}
						/>
					</View>
				)}
			/>
		</VStack>
	);
};

export default Home;
