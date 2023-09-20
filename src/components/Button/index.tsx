import React from 'react';

import { Button as NativeBaseButton, Text } from 'native-base';

import { ButtonProps } from './types';

import * as CONSTANTS from './constants';

const Button: Component<ButtonProps> = ({
	title,
	size = 'full',
	variant = 'primary',
	...props
}) => {
	return (
		<NativeBaseButton
			width={size === 'full' ? size : undefined}
			h={12}
			bg={CONSTANTS.BG_VARIANT_ENUM[variant]}
			rounded='md'
			_pressed={{
				bg: CONSTANTS.PRESSED_BG_VARIANT_ENUM[variant],
			}}
			{...props}
		>
			<Text
				color={CONSTANTS.TEXT_COLOR_VARIANT_ENUM[variant]}
				fontFamily='heading'
				fontSize='md'
			>
				{title}
			</Text>
		</NativeBaseButton>
	);
};

export default Button;
