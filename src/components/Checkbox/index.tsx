import React from 'react';

import { Checkbox as NativeBaseCheckbox, Text } from 'native-base';

import { CheckboxProps } from './types';

const Checkbox: Component<CheckboxProps> = ({ label, value, ...props }) => {
	return (
		<NativeBaseCheckbox {...props} value={value} colorScheme='blue'>
			<Text ml={2} color='gray.600' fontSize='md' fontFamily='body'>
				{label}
			</Text>
		</NativeBaseCheckbox>
	);
};

export default Checkbox;
