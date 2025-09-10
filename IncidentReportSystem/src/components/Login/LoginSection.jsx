import React from "react";
import { Box } from "@mui/material";
import LoginTextAtom from "./LoginTextAtom/LoginTextAtom";
import LoginForm from "./LoginForm";
import BankIdBtnAtom from "./BankIdBtnAtom/BankIdBtnAtom";

function LoginSection({
  email,
  password,
  errors,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}) {
  return (
    <Box>
      <LoginTextAtom />
      <LoginForm
        email={email}
        password={password}
        errors={errors}
        onChangeEmail={onChangeEmail}
        onChangePassword={onChangePassword}
        onSubmit={onSubmit}
      />
      <BankIdBtnAtom />
    </Box>
  );
}

export default LoginSection;
