import React from "react";
import { Box } from "@mui/material";
import styles from "./Header.module.css";

const HeaderWrapper = ({ children }) => {
  return (
    <Box
      className={styles.headerContainer}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      minWidth="100vw"
    >
      {children}
    </Box>
  );
};

export default HeaderWrapper;
