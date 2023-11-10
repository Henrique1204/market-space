import React from 'react';

import { TouchableOpacity } from 'react-native';
import { Box, Heading, HStack } from 'native-base';

import { ArrowLeft, PencilSimpleLine, Plus } from 'phosphor-react-native';

import { HeaderProps } from './types';
import Show from '@components/Show';

const Header: Component<HeaderProps> = ({
	title,
	onGoBack,
	onAdd,
	onEdit,
	...props
}) => {
	return (
		<HStack
			pt={2}
			pb={4}
			px={4}
			justifyContent='center'
			alignItems='center'
			{...props}
		>
			<Show show={!!onGoBack}>
				<TouchableOpacity onPress={onGoBack}>
					<ArrowLeft />
				</TouchableOpacity>
			</Show>

			<Box flex={1}>
				<Show show={!!title}>
					<Heading
						fontSize='lg'
						fontFamily='body'
						fontWeight='bold'
						color='gray.700'
						textAlign='center'
					>
						{title}
					</Heading>
				</Show>
			</Box>

			<Show show={!!onAdd || !!onEdit}>
				<HStack space={4}>
					<Show show={!!onEdit}>
						<TouchableOpacity onPress={onEdit}>
							<PencilSimpleLine />
						</TouchableOpacity>
					</Show>

					<Show show={!!onAdd}>
						<TouchableOpacity onPress={onAdd}>
							<Plus />
						</TouchableOpacity>
					</Show>
				</HStack>
			</Show>
		</HStack>
	);
};

export default Header;
