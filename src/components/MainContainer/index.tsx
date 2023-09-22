import React from 'react';

import { ScrollView, VStack } from 'native-base';

const MainContainer: ComponentWithChildren = ({ children }) => {
	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			showsVerticalScrollIndicator={false}
			bg='gray.200'
		>
			<VStack px={8} py={16}>
				{children}
			</VStack>
		</ScrollView>
	);
};

export default MainContainer;
