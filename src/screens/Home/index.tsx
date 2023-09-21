import React from 'react';

import MainContainer from '@components/MainContainer';

import Header from './components/Header';
import MyAdCard from './components/MyAdCard';

const Home: React.FC = () => {
	return (
		<MainContainer>
			<Header />

			<MyAdCard />
		</MainContainer>
	);
};

export default Home;
