"use client";

import React, { useState, createContext, useEffect } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";

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

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState<IState>({
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const jwt = getCookie("jwt");

      if (!jwt) {
        return setAuthState({
          data: null,
          error: null,
          loading: false,
        });
      }
      const response = await axios.get("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
      console.log(authState.data);
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  }

  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
