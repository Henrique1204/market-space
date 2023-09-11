import React from 'react';
import { Center, Spinner } from 'native-base';

type LoaderProps = {
	loading: boolean;
};

const Loader: ComponentWithChildren<LoaderProps> = ({
	children,
	loading,
	...props
}) => {
	if (!loading) return <>{children}</>;

	return (
		<Center flex={1} bg='gray.100' {...props}>
			<Spinner color='green.500' />
		</Center>
	);
};

export default Loader;
