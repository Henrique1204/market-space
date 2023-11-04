import React from 'react';

import { TouchableOpacity } from 'react-native';

import { useTheme, Box, HStack, Heading } from 'native-base';

import { X } from 'phosphor-react-native';

import {
	BottomSheetModal,
	BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import Button from '@components/Button';

import FilterForm from '../FilterForm';

let open = () => {};
let close = () => {};

const BottomSheetFilter: Component = () => {
	const { colors } = useTheme();

	const bottomSheetFilterRef = React.useRef<BottomSheetModal>(null);

	const snapPoints = React.useMemo(() => ['75%', '75%'], []);

	const handleClose = () => bottomSheetFilterRef?.current?.dismiss();

	open = () => bottomSheetFilterRef?.current?.present();
	close = handleClose;

	return (
		<BottomSheetModalProvider>
			<BottomSheetModal
				ref={bottomSheetFilterRef}
				index={1}
				snapPoints={snapPoints}
				enablePanDownToClose
				containerStyle={{
					backgroundColor: '#0009',
				}}
				handleIndicatorStyle={{
					width: 56,
					height: 4,
					backgroundColor: colors.gray[300],
				}}
			>
				<Box px={6} pt={4} flex={1}>
					<HStack justifyContent='space-between' alignItems='center'>
						<Heading
							color='gray.700'
							fontSize='lg'
							fontWeight='bold'
							fontFamily='heading'
							letterSpacing={1}
						>
							Filtrar anúncios
						</Heading>

						<TouchableOpacity onPress={handleClose}>
							<X size={28} color={colors.gray[300]} weight='bold' />
						</TouchableOpacity>
					</HStack>

					<FilterForm />

					<HStack space={4} position='absolute' bottom={16} left={6}>
						<Button flex={1 / 2} title='Resetar filtros' variant='terciary' />
						<Button flex={1 / 2} title='Aplicar filtros' variant='secondary' />
					</HStack>
				</Box>
			</BottomSheetModal>
		</BottomSheetModalProvider>
	);
};

export default {
	Provider: BottomSheetFilter,
	open: () => open(),
	close: () => close(),
};
