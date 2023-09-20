import React, { Children } from 'react';

import { Button as NativeBaseButton, HStack, Text } from 'native-base';

import { ButtonProps } from './types';

import * as CONSTANTS from './constants';

import Show from '../Show';

const Button: ComponentWithChildren<ButtonProps> = ({
	title,
	size = 'full',
	variant = 'primary',
	children,
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
			<HStack flex={1} alignItems='center'>
				{children}

				<Text
					ml={!children ? 0 : 1}
					color={CONSTANTS.TEXT_COLOR_VARIANT_ENUM[variant]}
					fontFamily='heading'
					fontSize='md'
				>
					{title}
				</Text>
			</HStack>
		</NativeBaseButton>
	);
};

export default Button;
