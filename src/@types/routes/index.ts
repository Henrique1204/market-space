import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppRoutes = {
	home: undefined;
	catalog: undefined;
};

export type AuthRoutes = {
	signIn: undefined;
	signUp: undefined;
};

export type HomeRoutes = {
	products: undefined;
	productDetails: { id: number };
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export type HomehNavigatorRoutesProps = NativeStackNavigationProp<HomeRoutes>;
