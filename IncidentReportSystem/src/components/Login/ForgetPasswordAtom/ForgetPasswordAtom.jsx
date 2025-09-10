import React from "react";
import { Box, FormControlLabel, Checkbox, Link } from "@mui/material";
import styles from "./ForgetPasswordAtom.module.css";

function ForgetPasswordAtom() {
  return (
    <>
      <Box className={styles.rowBetweenCenter}>
        <FormControlLabel control={<Checkbox />} label="Remember me" />
        <Link href="#" underline="hover" className={styles.linkBlue}>
          Forgot password?
        </Link>
      </Box>
    </>
  );
}

export default ForgetPasswordAtom;
