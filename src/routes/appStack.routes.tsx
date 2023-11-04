import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Types from '@types_/routes';

import AppTabsRoutes from './appTabs.routes';
import ProductDetails from '@screens/ProductDetails';

const { Navigator, Screen } =
	createNativeStackNavigator<Types.AppStackRoutes>();

const appStack: React.FC = () => {
	return (
		<Navigator
			initialRouteName='appTabsRoutes'
			screenOptions={{ headerShown: false }}
		>
			<Screen name='appTabsRoutes' component={AppTabsRoutes} />
			<Screen name='productDetails' component={ProductDetails} />
		</Navigator>
	);
};

export default appStack;
