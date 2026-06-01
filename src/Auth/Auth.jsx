import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { Button } from "@mui/material";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-[95vh]">
      <div className="shadow-lg p-5 border rounded-lg w-full max-w-md">
        {location.pathname === "/register" ? (
         <> 
            <SignupForm />
            <div className="text-center mt-4">
              <p>Already have an account? <Button onClick={() => navigate("/login")} className="text-blue-500 hover:underline">Login</Button></p>
            </div>
         </>
        ) : (
          <>
            <LoginForm />
            <div className="text-center mt-4">
                <p>Don't have an account? <Button onClick={() => navigate("/register")} className="text-blue-500 hover:underline">Signup</Button></p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
