import { useContext } from "react";
import axios from "axios";
import { getCookie, deleteCookie } from "cookies-next";
import { AuthenticationContext } from "../context/AuthContext";
import { instance } from "../utils/axiousCreate";

const useAuth = () => {
  const { data, loading, error, setAuthState } = useContext(
    AuthenticationContext
  );
  const signin = async (
    email: string,
    password: string,
    handleClose: () => void
  ) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const response = await instance.post("/api/auth/signin", {
        email,
        password,
      });
      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
      handleClose();
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };
  const signup = async (
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    city: string,
    password: string,
    handleClose: () => void
  ) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const response = await instance.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        phone,
        city,
        password,
      });
      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
      handleClose();
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };

  const fetchUser = async () => {
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
      const response = await instance.get("/api/auth/me", {
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
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };

  const singout = () => {
    deleteCookie("jwt");
    setAuthState({
      data: null,
      error: null,
      loading: false,
    });
  };

  return {
    signin,
    signup,
    fetchUser,
    singout,
  };
};

export default useAuth;
