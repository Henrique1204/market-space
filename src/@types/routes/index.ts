import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type IAppRoutes = {
	home: undefined;
	products: undefined;
};

export type IAppNavigatorRoutesProps = BottomTabNavigationProp<IAppRoutes>;
