import React from "react";
import { Box } from "@mui/material";
import styles from "./LoginTextAtom.module.css";

function LoginTextAtom({
  title = "Login",
  subtitle = "Welcome",
  description = "Please Select how you want to login",
}) {
  return (
    <>
      <Box component="p" className={styles.loginTitle}>
        {title}
      </Box>
      <Box component="h5">{subtitle}</Box>
      {description && (
        <Box component="p" className={styles.subText}>
          {description}
        </Box>
      )}
    </>
  );
}

export default LoginTextAtom;
