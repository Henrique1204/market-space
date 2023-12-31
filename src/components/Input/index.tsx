import React from 'react';

import { TouchableOpacity } from 'react-native';

import {
	Input as NativeBaseInput,
	FormControl,
	Center,
	Icon,
} from 'native-base';

import { Eye, EyeSlash } from 'phosphor-react-native';

import { InputProps } from './types';

import Show from '../Show';

const Input: Component<InputProps> = ({
	errorMessage = null,
	isInvalid,
	type,
	h = 14,
	...props
}) => {
	const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false);

	const toggleShowPassword = () => setIsShowPassword((prev) => !prev);

	const invalid = !!errorMessage || isInvalid;

	return (
		<FormControl h={h} isInvalid={invalid} mb={4} position='relative'>
			<Center flex={1}>
				<NativeBaseInput
					h={h}
					px={4}
					borderRadius={6}
					borderWidth={0}
					fontSize='md'
					fontFamily='body'
					color='gray.600'
					bg='gray.100'
					placeholderTextColor='gray.400'
					isInvalid={invalid}
					_invalid={{
						borderWidth: 1,
						borderColor: 'red.500',
					}}
					_focus={{
						bg: 'gray.100',
						borderWidth: 1,
						borderColor: 'gray.500',
					}}
					secureTextEntry={type === 'password' && !isShowPassword}
					type='text'
					{...props}
				/>

				<Show show={type === 'password'}>
					<TouchableOpacity
						style={{ position: 'absolute', right: 4 }}
						onPress={toggleShowPassword}
					>
						<Icon
							as={isShowPassword ? EyeSlash : Eye}
							w={24}
							h={24}
							right={4}
						/>
					</TouchableOpacity>
				</Show>
			</Center>

			<FormControl.ErrorMessage _text={{ color: 'red.500' }}>
				{errorMessage}
			</FormControl.ErrorMessage>
		</FormControl>
	);
};

export default Input;
