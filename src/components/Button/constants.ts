import { VariantEnum } from './types';

export const BG_VARIANT_ENUM: Record<VariantEnum, string> = {
	primary: 'blue.300',
	secondary: 'gray.700',
	terciary: 'gray.300',
};

export const PRESSED_BG_VARIANT_ENUM: Record<VariantEnum, string> = {
	primary: 'blue.500',
	secondary: 'gray.600',
	terciary: 'gray.400',
};

export const TEXT_COLOR_VARIANT_ENUM: Record<VariantEnum, string> = {
	primary: 'white',
	secondary: 'white',
	terciary: 'gray.700',
};
