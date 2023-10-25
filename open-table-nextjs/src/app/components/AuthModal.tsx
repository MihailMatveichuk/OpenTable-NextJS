"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import AuthModalInputs from "./AuthModalInputs";

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

  const renderContent = (signInContent: string, signUpContent: string) => {
    return isSignin ? signInContent : signUpContent;
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
          <div className='p-2 h-[500px]'>
            <div className='uppercase font-bold text-center pb-2 border-b mb-2'>
              <p className='text-sm'>
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
              <AuthModalInputs />
              <button className='bg-red-600 border p-3 rounded text-white uppercase disabled:bg-gray-400'>
                {renderContent("Sign In", "Create Account")}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
