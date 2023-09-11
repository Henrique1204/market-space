import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type AppRoutes = {
	home: undefined;
	products: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;
