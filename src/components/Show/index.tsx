import React from 'react';

import { ShowProps } from './types';

const Show: ComponentWithChildren<ShowProps> = ({ show, children }) => {
	if (Boolean(show)) return <>{children}</>;

	return <></>;
};

export default Show;
