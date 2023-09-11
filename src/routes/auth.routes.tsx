import React from 'react';

import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import SingIn from '@screens/SingIn';
import SingOut from '@screens/SingOut';

type AuthRoutes = {
	signIn: undefined;
	signUp: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

const AuthRoutes: React.FC = () => {
	return (
		<Navigator initialRouteName='signIn' screenOptions={{ headerShown: false }}>
			<Screen name='signIn' component={SingIn} />
			<Screen name='signUp' component={SingOut} />
		</Navigator>
	);
};

export default AuthRoutes;
