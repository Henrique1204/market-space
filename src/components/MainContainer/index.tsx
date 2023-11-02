import React from 'react';

import { ScrollView, VStack } from 'native-base';

import { MainContainerProps } from './types';

const MainContainer: ComponentWithChildren<MainContainerProps> = ({
	children,
	pb = 16,
}) => {
	return (
		// <ScrollView
		// 	contentContainerStyle={{ flexGrow: 1 }}
		// 	showsVerticalScrollIndicator={false}
		// 	bg='gray.200'
		// >
		<VStack px={8} pt={4} pb={pb} flex={1} bg='gray.200'>
			{children}
		</VStack>
		// </ScrollView>
	);
};

export default MainContainer;
