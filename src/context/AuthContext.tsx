import React, { useState, useContext, useMemo } from "react";
import { ContextProps } from "../types/ContextType";
import { useLogin, useLogout, useAuthChanged } from "../utils/login";

const AuthContext = React.createContext<any>(null);
const AuthAction = React.createContext<any>(null);

export const AuthContextProvider = ({ children }: ContextProps) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const actions = useMemo(
    () => ({
      login: () => {
        useLogin();
      },
      logout: () => {
        useLogout();
      },
    }),
    []
  );

  useMemo(() => useAuthChanged(setCurrentUser), [currentUser]);

  return (
    <AuthAction.Provider value={actions}>
      <AuthContext.Provider value={currentUser}>
        {children}
      </AuthContext.Provider>
    </AuthAction.Provider>
  );
};

export function useAuth() {
  const currentUser = useContext(AuthContext);

  return currentUser;
}

export function useAuthAction() {
  const actions = useContext(AuthAction);

  return actions;
}
