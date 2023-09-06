import React from 'react';
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import {
	useFonts,
	Karla_400Regular,
	Karla_700Bold,
} from '@expo-google-fonts/karla';

import { THEME } from '@assets/theme/index';

import Loader from '@components/Loader';

import Routes from './src/routes';

const App: React.FC = () => {
	const [fontsLoaded] = useFonts({
		Karla_400Regular,
		Karla_700Bold,
	});

	return (
		<NativeBaseProvider theme={THEME}>
			<StatusBar
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>

			<Loader
				loading={!fontsLoaded}
				accessibilityLabel='Animação de carregamento esperando arquivos carregarem.'
				aria-hidden={fontsLoaded}
			>
				<Routes />
			</Loader>
		</NativeBaseProvider>
	);
};

export default App;
