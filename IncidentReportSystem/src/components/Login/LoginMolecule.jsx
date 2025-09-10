import { Box, Typography } from "@mui/material";

import React, { useState } from "react";

/* import loginbg from "../../assets/loginbg.png";
 */
import { useNavigate } from "react-router";
import { handleLogin } from "./handleLogin";
import AuthTemplate from "../../templates/AuthTemplate/AuthTemplate";
import LoginSection from "./LoginSection";

function Login({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if (onSubmit) {
      onSubmit(e);
    } else {
      handleLogin(e, email, password, setErrors, navigate);
    }
  };

  return (
    <>
      <AuthTemplate>
        <LoginSection
          email={email}
          password={password}
          errors={errors}
          onChangeEmail={(e) => setEmail(e.target.value)}
          onChangePassword={(e) => {
            setPassword(e.target.value);
          }}
          onSubmit={handleSubmit}
        />
      </AuthTemplate>
    </>
  );
}

export default Login;
