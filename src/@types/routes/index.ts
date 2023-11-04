import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppBottomRoutes = {
	home: undefined;
	catalog: undefined;
};

export type AuthRoutes = {
	signIn: undefined;
	signUp: undefined;
};

export type AppStackRoutes = {
	appBottom: undefined;
	products: undefined;
	productDetails: { id: number };
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppBottomRoutes>;

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

export type HomehNavigatorRoutesProps =
	NativeStackNavigationProp<AppStackRoutes>;
