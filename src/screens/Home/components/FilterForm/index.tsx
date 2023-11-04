import React from 'react';

import { HStack, Switch, Checkbox as CheckboxGroup, VStack } from 'native-base';

import useListState from '@hooks/useListState';

import debounce from '@utils/debounce';

import Checkbox from '@components/Checkbox';

import FilterOptionGroup from './FilterOptionGroup';
import FilterTagForCondition from './FilterTagForCondition';
import { handleToggleSelectionFn } from './FilterTagForCondition/types';

const FilterForm: Component = () => {
	const [conditionSelected, _, conditionSelectedControl] = useListState<string>(
		[]
	);

	const [paymentMethods, setPaymentMethods] = React.useState<string[]>([]);

	const handleToggleConditionSelection: handleToggleSelectionFn = (value) => {
		if (conditionSelected.includes(value)) {
			const index = conditionSelected.findIndex((item) => item === value);

			return conditionSelectedControl.remove(index);
		}

		conditionSelectedControl.add(value);
	};

	const [handleToggleSelectionWithDebounce] = debounce(
		handleToggleConditionSelection,
		100
	);

	const handleChangeCheckbox = (values: string[]) => {
		setPaymentMethods(values || []);
	};

	return (
		<>
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
				<Switch size='md' offTrackColor='gray.200' onTrackColor='blue.300' />
			</FilterOptionGroup>

			<FilterOptionGroup label='Meios de pagamento aceitos'>
				<CheckboxGroup.Group
					defaultValue={paymentMethods}
					onChange={handleChangeCheckbox}
				>
					<VStack space={2}>
						<Checkbox value='ticket' label='Boleto' />
						<Checkbox value='pix' label='Pix' />
						<Checkbox value='money' label='Dinheiro' />
						<Checkbox value='credit-card' label='Cartão de Crédito' />
						<Checkbox value='bank-deposit' label='Depósito Bancário' />
					</VStack>
				</CheckboxGroup.Group>
			</FilterOptionGroup>
		</>
	);
};

export default FilterForm;
