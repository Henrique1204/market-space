import React from 'react';

import {
	IBoxProps,
	Image,
	IImageProps,
	Skeleton,
	Box,
	Button,
} from 'native-base';
import { PencilSimpleLine } from 'phosphor-react-native';

import AvatarDefault from '@assets/images/avatarDefault.png';

import Show from '../Show';

type AvatarProps = IBoxProps &
	Pick<IImageProps, 'source' | 'alt'> & {
		size: number;
		loading?: boolean;
		onEdit?: () => void;
	};

const Avatar: Component<AvatarProps> = ({
	testID = 'user-photo',
	size,
	loading,
	onEdit,
	source,
	alt,
	...props
}) => {
	return (
		<Box
			rounded='full'
			borderWidth={3}
			borderColor='blue.300'
			position='relative'
			{...props}
		>
			<Show show={loading}>
				<Skeleton
					w={size}
					height={size}
					rounded='full'
					startColor='gray.500'
					endColor='gray.400'
				/>
			</Show>

			<Show show={!loading}>
				<Image
					testID={testID}
					w={size}
					h={size}
					rounded='full'
					source={source || AvatarDefault}
					alt={source ? alt : 'Imagem padrão de usuário.'}
				/>
			</Show>

			<Show show={onEdit}>
				<Button
					bg='blue.300'
					rounded='full'
					_pressed={{
						bg: 'blue.500',
					}}
					w={10}
					h={10}
					position='absolute'
					right={-5}
					bottom={0}
					onPress={onEdit}
				>
					<PencilSimpleLine color='white' size={16} />
				</Button>
			</Show>
		</Box>
	);
};

export default Avatar;
