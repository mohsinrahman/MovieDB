import React from "react";
import InputAtom from "./InputAtom/InputAtom";
import PasswordInputAtom from "./PasswordInputAtom/PasswordInputAtom";
import ForgetPasswordAtom from "./ForgetPasswordAtom/ForgetPasswordAtom";
import LoginBtnAtom from "./LoginBtnAtom/LoginBtnAtom";
import { Typography, Box } from "@mui/material";
/* Module css   */
import styles from "./Login.module.css";

function LoginForm({
  email,
  password,
  errors,
  onChangeEmail,
  onChangePassword,
  onSubmit,
}) {
  return (
    <>
      <Box component="div" className={styles.flexColumnContainer}>
        {errors.form && (
          <Typography color="error" variant="body2">
            {errors.form}
          </Typography>
        )}
        <InputAtom value={email} onChange={onChangeEmail} />
        <PasswordInputAtom value={password} onChange={onChangePassword} />
        <ForgetPasswordAtom />
        <LoginBtnAtom onClick={onSubmit}> Login</LoginBtnAtom>
      </Box>
    </>
  );
}

export default LoginForm;
