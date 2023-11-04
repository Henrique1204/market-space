import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppTabsRoutes = {
	home: undefined;
	catalog: undefined;
};

export type AuthRoutes = {
	signIn: undefined;
	signUp: undefined;
};

export type AppStackRoutes = {
	appTabsRoutes: undefined;
	productDetails: { id: number };
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppTabsRoutes>;

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export type HomehNavigatorRoutesProps =
	NativeStackNavigationProp<AppStackRoutes>;
