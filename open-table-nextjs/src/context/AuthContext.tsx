"use client";

import React, { useState, createContext } from "react";

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  password: string;
}

interface IState {
  loading: boolean;
  data: IUser | null;
  error: string | null;
}

interface IAuthState extends IState {
  setAuthState: React.Dispatch<React.SetStateAction<IState>>;
}

export const AuthenticationContext = createContext<IAuthState>({
  loading: false,
  data: null,
  error: null,
  setAuthState: () => {},
});

const AuthContext = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<IState>({
    loading: false,
    data: null,
    error: "Hello",
  });
  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthContext;
