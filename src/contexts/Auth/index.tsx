import React from 'react';

export type IAuthContextData = {
	user: any | null;
};

export const AuthContext = React.createContext<IAuthContextData>(
	{} as IAuthContextData
);

export const AuthContextProvider: IComponentWithChildren = ({ children }) => {
	return (
		<AuthContext.Provider value={{ user: null }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => React.useContext(AuthContext);
