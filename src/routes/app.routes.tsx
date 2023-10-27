import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'native-base';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Types from '@types_/routes';

import Home from '@screens/Home';
import Products from '@screens/Products';

import HomeSvg from '@icons/home.svg';
import LogoutSvg from '@icons/logout.svg';
import ProductsSvg from '@icons/products.svg';

const { Navigator, Screen } = createBottomTabNavigator<Types.AppRoutes>();

const AppRoutes: React.FC = () => {
	const { sizes, colors } = useTheme();

	const iconsSize = sizes[6];

	return (
		<Navigator
			initialRouteName='home'
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: colors.gray[600],
				tabBarInactiveTintColor: colors.gray[400],
				tabBarStyle: {
					height: Platform.OS === 'android' ? 'auto' : 72,
					paddingBottom: sizes[2],
					paddingTop: sizes[6],
					borderTopWidth: 0,
					backgroundColor: colors.gray[100],
				},
			}}
		>
			<Screen
				name='home'
				component={Home}
				options={{
					tabBarIcon: ({ color }) => (
						<HomeSvg fill={color} width={iconsSize} height={iconsSize} />
					),
				}}
			/>

			<Screen
				name='products'
				component={Products}
				options={{
					tabBarIcon: ({ color }) => (
						<ProductsSvg fill={color} width={iconsSize} height={iconsSize} />
					),
				}}
			/>
		</Navigator>
	);
};

export default AppRoutes;
