import { ICheckboxProps } from 'native-base';

export type CheckboxProps = {
	label: string;
} & Omit<ICheckboxProps, 'onChange'>;
