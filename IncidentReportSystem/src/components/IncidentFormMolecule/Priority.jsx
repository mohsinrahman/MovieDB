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
import PriorityTooltipIcon from "./../PriorityTooltipIcon";

function Priority({ name, value, handleChange, fieldError, helperText }) {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="subtitle1" fontWeight="600" mb={1}>
        Priority <PriorityTooltipIcon />
      </Typography>
      <FormControl
        fullWidth
        error={Boolean(fieldError)}
        sx={{ width: "513px", height: "44px" }}
      >
        <InputLabel id={`${name}-label`}>Select Priority</InputLabel>
        <Select
          labelId={`${name}-label`}
          id={`${name}-select`}
          name={name}
          value={value}
          label="Select Priority"
          onChange={handleChange}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <MenuItem key={i + 1} value={i + 1}>
              {i + 1}
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

export default Priority;
