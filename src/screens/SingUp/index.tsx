import React from 'react';

import { useNavigation } from '@react-navigation/native';

import {
	ScrollView,
	VStack,
	Text,
	Image,
	Center,
	Heading,
	useToast,
} from 'native-base';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import { AuthNavigatorRoutesProps } from '@types_/routes';

import LogoImg from '@images/logo.png';

import AppError from '@utils/AppError';
import { phone } from '@utils/regex';

import Input from '@components/Input';
import Button from '@components/Button';
import Avatar from '@components/Avatar';

type FormDataProps = {
	email: string;
	name: string;
	phone: string;
	password: string;
	passwordConfirm: string;
};

const signUpSchema = yup.object({
	name: yup.string().required('Informe o nome.'),
	email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
	phone: yup
		.string()
		.required('Informe o telefone.')
		.matches(phone, 'O telefone não é válido.'),
	password: yup
		.string()
		.required('Informe a senha.')
		.min(6, 'A senha deve ter pelo menos 6 dígitos.'),
	passwordConfirm: yup
		.string()
		.required('Informe a senha de confirmação.')
		.oneOf([yup.ref('password')], 'A confirmação de senha não confere.'),
});

const SingUp: React.FC = () => {
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [isPhotoLoading, setIsPhotoLoading] = React.useState<boolean>(false);

	const [userPhoto, setUserPhoto] = React.useState<string>('');

	const toast = useToast();

	const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormDataProps>({
		resolver: yupResolver(signUpSchema),
	});

	const goToSingIn = () => navigate('signIn');

	const handleAvatarEdit = async () => {
		try {
			setIsPhotoLoading(true);

			const photoSelected = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 1,
				aspect: [4, 4],
				allowsEditing: true,
			});

			const photoUri = photoSelected.assets?.[0].uri;

			if (photoSelected.canceled || !photoUri) return;

			const photoInfo = await FileSystem.getInfoAsync(photoUri);

			if (photoInfo.exists && photoInfo.size / 1024 / 1024 > 5) {
				return toast.show({
					title: 'Essa imagem é muito grande, escolha uma de até 5mb.',
					placement: 'top',
					bg: 'red.500',
					mx: 4,
				});
			}

			setUserPhoto(photoUri);
		} catch (e) {
			console.log(e);
		} finally {
			setIsPhotoLoading(false);
		}
	};

	const handleSignUp = handleSubmit(async (body) => {
		try {
			setIsLoading(true);
		} catch (e) {
			const isAppError = e instanceof AppError;

			toast.show({
				title: isAppError
					? e.message
					: 'Não foi possível entrar. Tente novamente mais tarde.',
				placement: 'top',
				bgColor: 'red.500',
			});

			setIsLoading(false);
		}
	});

	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1 }}
			showsVerticalScrollIndicator={false}
		>
			<VStack flex={1} px={12} pb={16} pt={8} background='gray.200'>
				<Center pt={8}>
					<Image
						source={LogoImg}
						defaultSource={LogoImg}
						alt='Logo da empresa, uma planeta com anéis igual saturno com um sacola no centro.'
						resizeMode='contain'
						w={60}
						maxHeight={40}
					/>
				</Center>

				<Center>
					<Heading color='gray.700' fontSize='lg' fontFamily='heading'>
						Boas vindas!
					</Heading>

					<Text
						color='gray.500'
						fontFamily='body'
						fontSize='sm'
						textAlign='center'
						mt={3}
					>
						Crie sua conta e use o espaço para comprar itens variados e vender
						seus produtos
					</Text>
				</Center>

				<Center mt={8}>
					<Avatar
						size={88}
						mb={4}
						onEdit={handleAvatarEdit}
						loading={isPhotoLoading}
						source={Boolean(userPhoto) ? { uri: userPhoto } : undefined}
					/>

					<Controller
						name='name'
						control={control}
						render={({ field: { value, onChange } }) => (
							<Input
								placeholder='Nome'
								value={value}
								onChangeText={onChange}
								errorMessage={errors.name?.message}
							/>
						)}
					/>

					<Controller
						name='email'
						control={control}
						render={({ field: { value, onChange } }) => (
							<Input
								placeholder='E-mail'
								keyboardType='email-address'
								autoCapitalize='none'
								value={value}
								onChangeText={onChange}
								errorMessage={errors.email?.message}
							/>
						)}
					/>

					<Controller
						name='phone'
						control={control}
						render={({ field: { value, onChange } }) => (
							<Input
								placeholder='Telefone'
								keyboardType='phone-pad'
								autoCapitalize='none'
								value={value}
								onChangeText={onChange}
								errorMessage={errors.phone?.message}
							/>
						)}
					/>

					<Controller
						name='password'
						control={control}
						render={({ field: { value, onChange } }) => (
							<Input
								placeholder='Senha'
								type='password'
								value={value}
								onChangeText={onChange}
								errorMessage={errors.password?.message}
							/>
						)}
					/>

					<Controller
						name='passwordConfirm'
						control={control}
						render={({ field: { value, onChange } }) => (
							<Input
								placeholder='Confirmar senha'
								type='password'
								value={value}
								onChangeText={onChange}
								errorMessage={errors.passwordConfirm?.message}
							/>
						)}
					/>
				</Center>

				<Button
					title='Criar'
					onPress={handleSignUp}
					disabled={isLoading}
					mt={2}
					variant='secondary'
				/>

				<Center mt={12}>
					<Text color='gray.600' mb={4} fontSize='sm' fontFamily='body'>
						Já tem uma conta?
					</Text>

					<Button
						title='Ir para o login'
						variant='terciary'
						onPress={goToSingIn}
						disabled={isLoading}
					/>
				</Center>
			</VStack>
		</ScrollView>
	);
};

export default SingUp;
