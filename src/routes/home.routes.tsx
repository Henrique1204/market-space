import React from 'react';

import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import * as Types from '@types_/routes';

import Products from '@screens/Products';
import ProductDetails from '@screens/ProductDetails';

const { Navigator, Screen } = createNativeStackNavigator<Types.HomeRoutes>();

const HomehRoutes: React.FC = () => {
	return (
		<Navigator
			initialRouteName='products'
			screenOptions={{ headerShown: false }}
		>
			<Screen name='products' component={Products} />
			<Screen name='productDetails' component={ProductDetails} />
		</Navigator>
	);
};

export default HomehRoutes;
