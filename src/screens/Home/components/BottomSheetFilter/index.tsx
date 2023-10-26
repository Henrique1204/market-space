import React from 'react';

import { TouchableOpacity } from 'react-native';

import {
	useTheme,
	Box,
	HStack,
	Heading,
	Switch,
	Checkbox as NativeBaseChackbox,
	VStack,
} from 'native-base';

import { X } from 'phosphor-react-native';

import {
	BottomSheetModal,
	BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import useListState from '@hooks/useListState';

import debounce from '@utils/debounce';

import Checkbox from '@components/Checkbox';

import FilterOptionGroup from '../FilterOptionGroup';
import FilterTagForCondition from '../FilterTagForCondition';
import { handleToggleSelectionFn } from '../FilterTagForCondition/types';

let open = () => {};
let close = () => {};

const BottomSheetFilter: Component = () => {
	const [conditionSelected, _, conditionSelectedControl] = useListState<string>(
		[]
	);

	const [paymentMethods, __, paymentMethodsControl] = useListState<string>([]);

	const { colors } = useTheme();

	const bottomSheetFilterRef = React.useRef<BottomSheetModal>(null);

	const snapPoints = React.useMemo(() => ['75%', '75%'], []);

	const handleClose = () => bottomSheetFilterRef?.current?.dismiss();

	open = () => bottomSheetFilterRef?.current?.present();
	close = handleClose;

	const handleToggleConditionSelection: handleToggleSelectionFn = (value) => {
		if (conditionSelected.includes(value)) {
			const index = conditionSelected.findIndex((item) => item === value);

			return conditionSelectedControl.remove(index);
		}

		conditionSelectedControl.add(value);
	};

	const handleTogglePaymentsSelection: handleToggleSelectionFn = (value) => {
		if (paymentMethods.includes(value)) {
			const index = conditionSelected.findIndex((item) => item === value);

			return paymentMethodsControl.remove(index);
		}

		paymentMethodsControl.add(value);
	};

	const [handleToggleSelectionWithDebounce] = debounce(
		handleToggleConditionSelection,
		100
	);

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
				<Box px={6} pt={4}>
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

					<FilterOptionGroup label='Condição'>
						<HStack space={2}>
							<FilterTagForCondition
								label='NOVO'
								value='new'
								selected={conditionSelected.includes('new')}
								handleToggleSelection={handleToggleSelectionWithDebounce}
							/>

							<FilterTagForCondition
								label='USADO'
								value='old'
								selected={conditionSelected.includes('old')}
								handleToggleSelection={handleToggleSelectionWithDebounce}
							/>
						</HStack>
					</FilterOptionGroup>

					<FilterOptionGroup label='Aceita troca?'>
						<Switch
							size='md'
							offTrackColor='gray.200'
							onTrackColor='blue.300'
						/>
					</FilterOptionGroup>

					<FilterOptionGroup label='Meios de pagamento aceitos'>
						<NativeBaseChackbox.Group>
							<VStack space={2}>
								<Checkbox value='ticket' label='Boleto' />
								<Checkbox value='pix' label='Pix' />
								<Checkbox value='money' label='Dinheiro' />
								<Checkbox value='credit-card' label='Cartão de Crédito' />
								<Checkbox value='bank-deposit' label='Depósito Bancário' />
							</VStack>
						</NativeBaseChackbox.Group>
					</FilterOptionGroup>
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
