import React from 'react';

import { AuthContextData } from './types';

export const AuthContext = React.createContext<AuthContextData>(
	{} as AuthContextData
);

export const AuthContextProvider: ComponentWithChildren = ({ children }) => {
	return (
		<AuthContext.Provider value={{ user: null }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => React.useContext(AuthContext);
