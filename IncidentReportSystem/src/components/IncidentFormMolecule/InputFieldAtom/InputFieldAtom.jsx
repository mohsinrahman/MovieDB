import React from "react";
import { TextField } from "@mui/material";

function InputFieldAtom({
  label,
  name,
  value,
  handleChange,
  fieldError,
  HelperTxt,
}) {
  return (
    <>
      <TextField
        fullWidth
        label={label}
        name={name}
        value={value}
        onChange={handleChange}
        error={Boolean(fieldError)} // ✅ Ensure it's a boolean
        helperText={fieldError ? HelperTxt : ""}
      />
    </>
  );
}

export default InputFieldAtom;
