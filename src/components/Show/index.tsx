import React from 'react';

type ShowProps = {
	show?: any;
};

const Show: ComponentWithChildren<ShowProps> = ({ show, children }) => {
	if (Boolean(show)) return <>{children}</>;

	return <></>;
};

export default Show;
