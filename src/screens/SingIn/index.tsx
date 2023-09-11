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

import { AuthNavigatorRoutesProps } from '@types_/routes';

import LogoImg from '@images/logo.png';

import AppError from '@utils/AppError';

import Input from '@components/Input';
import Button from '@components/Button';

type FormDataProps = {
	email: string;
	password: string;
};

const SingIn: React.FC = () => {
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const toast = useToast();

	const { navigate } = useNavigation<AuthNavigatorRoutesProps>();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormDataProps>();

	const goToSingUp = () => navigate('signUp');

	const handleSignIn = handleSubmit(async (body) => {
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
			<VStack px={12} py={12} background='gray.200' borderBottomRadius='3xl'>
				<Center mt={16}>
					<Image
						source={LogoImg}
						defaultSource={LogoImg}
						alt='Logo da empresa, uma planeta com anéis igual saturno com um sacola no centro.'
						resizeMode='cover'
					/>
				</Center>

				<Center mt={6}>
					<Heading color='gray.700' fontSize='4xl' fontFamily='heading'>
						marketspace
					</Heading>

					<Text color='gray.500' fontFamily='body' fontSize='sm'>
						Seu espaço de compra e venda
					</Text>
				</Center>

				<Center mt={16}>
					<Text color='gray.600' mb={4} fontSize='sm' fontFamily='body'>
						Acesse sua conta
					</Text>

					<Controller
						name='email'
						control={control}
						rules={{ required: 'Informa o e-mail.' }}
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
						name='password'
						control={control}
						rules={{ required: 'Informa a senha.' }}
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
				</Center>

				<Button
					title='Entrar'
					onPress={handleSignIn}
					disabled={isLoading}
					mt={4}
				/>
			</VStack>

			<Center px={12} pb={16} pt={12}>
				<Text color='gray.600' mb={4} fontSize='sm' fontFamily='body'>
					Ainda não tem acesso?
				</Text>

				<Button
					title='Criar uma conta'
					variant='terciary'
					onPress={goToSingUp}
					disabled={isLoading}
				/>
			</Center>
		</ScrollView>
	);
};

export default SingIn;
