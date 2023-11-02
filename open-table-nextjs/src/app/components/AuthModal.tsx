"use client";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState, useContext } from "react";
import AuthModalInputs from "./AuthModalInputs";
import useAuth from "../../../hooks/useAuth";
import { AuthenticationContext } from "@/app/context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
};

export default function AuthModal({ isSignin }: { isSignin: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { loading, data, error } = useContext(AuthenticationContext);
  const { signin, signup } = useAuth();

  const renderContent = (signInContent: string, signUpContent: string) => {
    return isSignin ? signInContent : signUpContent;
  };
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (isSignin) {
      if (inputs.email && inputs.password) {
        return setDisabled(false);
      }
    } else {
      if (
        inputs.email &&
        inputs.password &&
        inputs.firstName &&
        inputs.lastName &&
        inputs.city &&
        inputs.phone
      ) {
        return setDisabled(false);
      }
    }
    setDisabled(true);
  }, [inputs]);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (isSignin) {
      signin(inputs.email, inputs.password, handleClose);
      inputs.email = "";
      inputs.password = "";
    } else {
      signup(
        inputs.firstName,
        inputs.lastName,
        inputs.email,
        inputs.phone,
        inputs.city,
        inputs.password,
        handleClose
      );
    }
  };
  return (
    <div>
      <button
        className={renderContent(
          "bg-blue-900 border p-1 px-4 rounded text-white",
          "text-black border p-1 px-4 rounded"
        )}
        onClick={handleOpen}
      >
        {renderContent("Sign In", "Sign Up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          {loading ? (
            <div className='h-[500px] flex justify-center items-center gap-4'>
              <CircularProgress color='error' />
            </div>
          ) : (
            <div className='p-2 h-[500px]'>
              {error ? (
                <div className='mb-8'>
                  <Alert severity='error'>{error}</Alert>
                </div>
              ) : null}
              <div className='uppercase font-bold text-center pb-2 border-b mb-2'>
                <p className='text-sm'>
                  {data?.firstName}
                  {renderContent("Sign In", "Create A New Account")}
                </p>
              </div>
              <div className='m-auto flex flex-col justify-center'>
                <h2 className='text-2xl font-light text-center'>
                  {renderContent(
                    "Log Into Your Account",
                    "Create Your OpenTable Account"
                  )}
                </h2>
                <AuthModalInputs
                  inputs={inputs}
                  handleChangeInput={handleChangeInput}
                  isSignIn={isSignin}
                />
                <button
                  className='bg-red-600 border p-3 rounded text-white uppercase disabled:bg-gray-400'
                  disabled={disabled}
                  onClick={handleClick}
                >
                  {renderContent("Sign In", "Create Account")}
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
