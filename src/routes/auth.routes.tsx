import React from 'react';

import {
	createNativeStackNavigator,
	NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import SingIn from '@screens/SingIn';
import SingOut from '@screens/SingOut';

type IAuthRoutes = {
	signIn: undefined;
	signUp: undefined;
};

export type IAuthNavigatorRoutesProps = NativeStackNavigationProp<IAuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<IAuthRoutes>();

const AuthRoutes: React.FC = () => {
	return (
		<Navigator initialRouteName='signIn' screenOptions={{ headerShown: false }}>
			<Screen name='signIn' component={SingIn} />
			<Screen name='signUp' component={SingOut} />
		</Navigator>
	);
};

export default AuthRoutes;
