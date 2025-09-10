import React from "react";
import { Button } from "@mui/material";
import styles from "./LoginBtnAtom.module.css";

function LoginBtnAtom({ onClick, children }) {
  return (
    <Button
      className={styles.loginButton}
      variant="contained"
      fullWidth
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default LoginBtnAtom;
