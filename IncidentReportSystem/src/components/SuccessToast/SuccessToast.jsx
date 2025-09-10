import React from "react";
import { Snackbar, Alert, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./SuccessToast.module.css";

const SuccessToast = ({
  open,
  handleClose,
  message = "Incident has been sent successfully",
  severity = "success",
  autoHideDuration = 4000,
  showIcon = false,
  className = "",
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        severity={severity}
        className={`${styles.toast} ${className}`}
        icon={showIcon ? undefined : false}
        action={
          <IconButton
            size="small"
            onClick={handleClose}
            className={styles.closeButton}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        {typeof message === "string" ? <span>{message}</span> : message}
      </Alert>
    </Snackbar>
  );
};

export default SuccessToast;
