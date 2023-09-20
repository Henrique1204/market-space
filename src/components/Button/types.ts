import { IButtonProps as NativeBaseButtonProps } from 'native-base';

export type variantEnum = 'primary' | 'secondary' | 'terciary';

export type ButtonProps = Omit<NativeBaseButtonProps, 'variant'> & {
	title: string;
	size?: 'small' | 'full';
	variant?: variantEnum;
};
