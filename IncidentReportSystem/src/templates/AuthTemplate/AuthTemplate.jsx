import React from "react";
import { Box } from "@mui/material";
import styles from "./AuthTemplate.module.css";

function AuthTemplate({ children }) {
  return (
    <Box className={styles.container}>
      <Box className={styles.boxContainer}>{children}</Box>
    </Box>
  );
}

export default AuthTemplate;
