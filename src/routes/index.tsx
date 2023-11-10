import React from 'react';

import { Box, useTheme } from 'native-base';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { useAuth } from '@contexts/Auth';

import Loader from '@components/Loader';

import AuthRoutes from './auth.routes';
import AppStack from './appStack.routes';

const Routes: React.FC = () => {
	const { colors } = useTheme();

	const theme = DefaultTheme;
	theme.colors.background = colors.gray[100];

	const { user } = useAuth();

	return (
		<Loader loading={false}>
			<NavigationContainer theme={theme}>
				{!user ? <AppStack /> : <AuthRoutes />}
			</NavigationContainer>
		</Loader>
	);
};

export default Routes;
