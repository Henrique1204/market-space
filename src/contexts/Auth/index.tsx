import React from 'react';

export type AuthContextData = {
	user: any | null;
};

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
