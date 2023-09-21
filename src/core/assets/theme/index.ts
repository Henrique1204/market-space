import { extendTheme } from 'native-base';

export const colors = {
	blue: {
		300: '#647AC7',
		100: '#E0E1EB',
		500: '#364D9D',
	},
	gray: {
		700: '#1A181B',
		600: '#3E3A40',
		500: '#5F5B62',
		400: '#9F9BA1',
		300: '#D9D8DA',
		200: '#EDECEE',
		100: '#F7F7F8',
	},
	white: '#FFFFFF',
	red: {
		500: '#EE7979',
	},
};

export const fontFamily = {
	heading: 'Karla_700Bold',
	body: 'Karla_400Regular',
};

export const fontSize = {
	xs: 12,
	sm: 14,
	md: 16,
	lg: 20,
	xl: 24,
};

export const sizes = {
	14: 56,
	33: 148,
};

export const THEME = extendTheme({
	colors,
	fontFamily,
	fontSize,
	sizes,
});
