import React from 'react';
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import {
	useFonts,
	Karla_400Regular,
	Karla_700Bold,
} from '@expo-google-fonts/karla';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { THEME } from '@assets/theme/index';

import BottomSheetFilter from '@screens/Home/components/BottomSheetFilter';

import Loader from '@components/Loader';

import Routes from './src/routes';

const App: React.FC = () => {
	const [fontsLoaded] = useFonts({
		Karla_400Regular,
		Karla_700Bold,
	});

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<NativeBaseProvider theme={THEME}>
				<StatusBar
					barStyle='dark-content'
					backgroundColor='transparent'
					translucent
				/>

				<Loader
					loading={!fontsLoaded}
					accessibilityLabel='Animação de carregamento esperando arquivos carregarem.'
					aria-hidden={fontsLoaded}
				>
					<Routes />

					<BottomSheetFilter.Provider />
				</Loader>
			</NativeBaseProvider>
		</GestureHandlerRootView>
	);
};

export default App;
