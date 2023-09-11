import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppRoutes = {
	home: undefined;
	products: undefined;
};

export type AuthRoutes = {
	signIn: undefined;
	signUp: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;
