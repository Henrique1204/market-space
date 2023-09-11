import { AccessibilityProps } from 'react-native';

declare global {
	export type DefaultProps = Partial<AccessibilityProps> & {
		testID?: string;
	};

	export type DefaultPropsWithChildren = DefaultProps & {
		children?: React.ReactNode;
	};

	export type Component<T = {}> = React.FC<DefaultProps & T>;

	export type ComponentWithChildren<T = {}> = React.FC<
		DefaultPropsWithChildren & T
	>;
}
