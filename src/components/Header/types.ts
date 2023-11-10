import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack';

export type HeaderProps = {
	title?: string;

	onGoBack?: () => void;
	onEdit?: () => void;
	onAdd?: () => void;
} & IHStackProps;
