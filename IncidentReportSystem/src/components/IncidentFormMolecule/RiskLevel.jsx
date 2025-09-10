import React from "react";
import {
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function RiskLevel({ name, value, handleChange, fieldError, helperText }) {
  const options = [
    "No damage",
    "Minor damage",
    "Moderate damage",
    "Serious injury",
    "Death",
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="subtitle1" fontWeight="600" mb={1}>
        Risk Level
      </Typography>
      <FormControl
        fullWidth
        display="flex"
        error={Boolean(fieldError)}
        sx={{ width: "300px", height: "44px" }}
      >
        <InputLabel id={`${name}-label`}>Select Risk Level</InputLabel>
        <Select
          labelId={`${name}-label`}
          id={`${name}-select`}
          name={name}
          value={value}
          label="Select Risk Level"
          onChange={handleChange}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
        {fieldError && (
          <Typography variant="caption" color="error" mt={0.5}>
            {helperText}
          </Typography>
        )}
      </FormControl>
    </Box>
  );
}

export default RiskLevel;
