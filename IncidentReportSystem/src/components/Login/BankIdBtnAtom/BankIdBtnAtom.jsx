import React from "react";
import { Button } from "@mui/material";
import styles from "./BankIdBtnAtom.module.css";

function BankIdBtnAtom() {
  return (
    <Button variant="contained" fullWidth className={styles.btn}>
      Login with Bank ID
    </Button>
  );
}

export default BankIdBtnAtom;
