import React from "react";
import { TextField, Typography } from "@mui/material";

function InputAtom({
  value,
  onChange,
  label = "Email",
  type = "email",
  ...props
}) {
  return (
    <>
      <Typography fontWeight="bold">{label}</Typography>
      <TextField
        autoComplete="off"
        variant="outlined"
        fullWidth
        required
        id={label.toLowerCase()}
        label={`Enter your ${label.toLowerCase()}`}
        name={label.toLowerCase()}
        autoFocus={label === "Email"}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  );
}

export default InputAtom;
