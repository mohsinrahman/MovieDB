import React from "react";
import { TextField, Typography } from "@mui/material";

function PasswordInputAtom({ value, onChange }) {
  return (
    <>
      <Typography fontWeight="bold">Password</Typography>
      <TextField
        /*         type={showPassword ? 'text' : 'password'}
         */ variant="outlined"
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={value}
        onChange={onChange}
        /*               error={Boolean(errors.password)}
              helperText={errors.password} */
      />
    </>
  );
}

export default PasswordInputAtom;
