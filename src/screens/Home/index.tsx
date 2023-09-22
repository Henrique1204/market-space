import React from 'react';

import MainContainer from '@components/MainContainer';

import Header from './components/Header';
import MyAdCard from './components/MyAdCard';
import SearchField from './components/SearchField';

const Home: React.FC = () => {
	return (
		<MainContainer>
			<Header />

			<MyAdCard />

			<SearchField />
		</MainContainer>
	);
};

export default Home;
