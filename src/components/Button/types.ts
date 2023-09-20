import { IButtonProps as NativeBaseButtonProps } from 'native-base';

export type VariantEnum = 'primary' | 'secondary' | 'terciary';

export type ButtonProps = Omit<NativeBaseButtonProps, 'variant'> & {
	title: string;
	size?: 'small' | 'full';
	variant?: VariantEnum;
};
