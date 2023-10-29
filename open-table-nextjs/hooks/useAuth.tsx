import React, { useContext } from "react";
import axios from "axios";
import { AuthenticationContext } from "@/context/AuthContext";

const useAuth = () => {
  const { data, error, loading, setAuthState } = useContext(
    AuthenticationContext
  );
  const signin = async (email: string, password: string) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email,
          password,
        }
      );
      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.responce.data.errorMessage,
        loading: true,
      });
    }
  };
  const signup = async (
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    city: string,
    password: string
  ) => {
    setAuthState({
      data,
      error,
      loading: true,
    });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {}
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return {
    signin,
    signup,
  };
};

export default useAuth;
