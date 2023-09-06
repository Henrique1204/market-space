import { AccessibilityProps } from 'react-native';

declare global {
	export type IDefaultProps = Partial<AccessibilityProps> & {
		testID?: string;
	};

	export type IDefaultPropsWithChildren = IDefaultProps & {
		children?: React.ReactNode;
	};

	export type IComponent<T = {}> = React.FC<IDefaultProps & T>;

	export type IComponentWithChildren<T = {}> = React.FC<
		IDefaultPropsWithChildren & T
	>;
}
