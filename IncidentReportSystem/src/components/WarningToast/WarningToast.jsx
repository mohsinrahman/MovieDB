import React from "react";
import { Snackbar, Alert } from "@mui/material";

function WarningToast({ open, onClose }) {
  return (
    <Snackbar
      open={open}
      onClose={onClose}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity="warning" onClose={onClose} sx={{ width: "100%" }}>
        Please fill out all required fields.
      </Alert>
    </Snackbar>
  );
}

export default WarningToast;
