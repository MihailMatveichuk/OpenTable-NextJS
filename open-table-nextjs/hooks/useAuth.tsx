import React from "react";
import axios from "axios";

const useAuth = () => {
  const signin = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email,
          password,
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
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
