import React from 'react';

import { Box, useTheme } from 'native-base';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { useAuth } from '@contexts/Auth';

import Loader from '@components/Loader';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
	const { colors } = useTheme();

	const theme = DefaultTheme;
	theme.colors.background = colors.gray[100];

	const { user } = useAuth();

	return (
		<Loader loading={false}>
			<Box flex={1}>
				<NavigationContainer theme={theme}>
					{user ? <AppRoutes /> : <AuthRoutes />}
				</NavigationContainer>
			</Box>
		</Loader>
	);
};

export default Routes;
