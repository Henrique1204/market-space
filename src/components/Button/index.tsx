import React from 'react';

import {
	Button as NativeBaseButton,
	IButtonProps as NativeBaseButtonProps,
	Text,
} from 'native-base';

type variantEnum = 'primary' | 'secondary' | 'terciary';

type ButtonProps = Omit<NativeBaseButtonProps, 'variant'> & {
	title: string;
	variant?: variantEnum;
};

const BG_VARIANT_ENUM: Record<variantEnum, string> = {
	primary: 'blue.300',
	secondary: 'gray.600',
	terciary: 'gray.300',
};

const PRESSED_BG_VARIANT_ENUM: Record<variantEnum, string> = {
	primary: 'blue.500',
	secondary: 'gray.700',
	terciary: 'gray.400',
};

const TEXT_COLOR_VARIANT_ENUM: Record<variantEnum, string> = {
	primary: 'white',
	secondary: 'white',
	terciary: 'gray.700',
};

const Button: Component<ButtonProps> = ({
	title,
	variant = 'primary',
	...props
}) => {
	return (
		<NativeBaseButton
			width='full'
			h={14}
			bg={BG_VARIANT_ENUM[variant as variantEnum]}
			rounded='md'
			_pressed={{
				bg: PRESSED_BG_VARIANT_ENUM[variant],
			}}
			{...props}
		>
			<Text
				color={TEXT_COLOR_VARIANT_ENUM[variant]}
				fontFamily='heading'
				fontSize='md'
			>
				{title}
			</Text>
		</NativeBaseButton>
	);
};

export default Button;
