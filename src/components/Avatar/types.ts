import { IBoxProps, IImageProps } from 'native-base';

export type AvatarProps = IBoxProps &
	Pick<IImageProps, 'source' | 'alt'> & {
		size: number;
		loading?: boolean;
		onEdit?: () => void;
	};
