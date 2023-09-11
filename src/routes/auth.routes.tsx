import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Types from '@types_/routes';

import SingIn from '@screens/SingIn';
import SingUp from '@screens/SingUp';

const { Navigator, Screen } = createNativeStackNavigator<Types.AuthRoutes>();

const AuthRoutes: React.FC = () => {
	return (
		<Navigator initialRouteName='signIn' screenOptions={{ headerShown: false }}>
			<Screen name='signIn' component={SingIn} />
			<Screen name='signUp' component={SingUp} />
		</Navigator>
	);
};

export default AuthRoutes;
