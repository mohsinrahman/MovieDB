import React from "react";
import {
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

const CONDITIONAL_CATEGORIES = [
  "Vehicle",
  "Patient",
  "Medical Technical equipment",
];

function SortingMolecule({
  labels,
  name,
  value,
  handleChange,
  fieldError,
  helperText,
  identifierValue = "",
  identifierName = "identifier",
}) {
  const showInputField = CONDITIONAL_CATEGORIES.includes(value);

  const getPlaceholder = () => {
    switch (value) {
      case "Vehicle":
        return "Enter Registration Number";
      case "Patient":
        return "Enter MTA ID / Personal Num";
      case "Medical Technical equipment":
        return "Enter equipment ID";
      default:
        return "";
    }
  };

  return (
    <>
      <Grid item xs={12} sx={{ paddingX: 2, paddingTop: 3 }}>
        <Typography variant="subtitle1" textAlign="left" fontWeight="600">
          Category
        </Typography>
      </Grid>

      <Box sx={{ padding: 2, width: "513px" }}>
        <FormControl fullWidth error={Boolean(fieldError)}>
          <InputLabel id={`${name}-label`}>Select Category</InputLabel>
          <Select
            labelId={`${name}-label`}
            id={`${name}-select`}
            name={name}
            value={value}
            label="Select Category"
            onChange={handleChange}
          >
            <MenuItem disabled value="">
              Please select
            </MenuItem>
            {labels.map((label, index) => (
              <MenuItem key={index} value={label}>
                {label}
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

      {showInputField && (
        <Box sx={{ paddingX: 2, paddingBottom: 2, width: "513px" }}>
          <TextField
            fullWidth
            name={identifierName}
            label={getPlaceholder()}
            placeholder={getPlaceholder()}
            value={identifierValue}
            onChange={handleChange}
          />
        </Box>
      )}
    </>
  );
}

export default SortingMolecule;

/* import React from "react";
import {
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function SortingMolecule({ labels, name, value, handleChange }) {
  return (
    <>
      <Grid item xs={12} sx={{ paddingX: 2 }}>
        <Typography variant="subtitle1" textAlign="left" fontWeight="600">
          Category{" "}
        </Typography>
      </Grid>

      <Box sx={{ padding: 2, width: "513px", height: "44px" }}>
        <FormControl fullWidth>
          <InputLabel id={`${name}-label`}>Select Category</InputLabel>
          <Select
            labelId={`${name}-label`}
            id={`${name}-select`}
            value={value}
            name={name}
            label="Select Category"
            onChange={handleChange} //
          >
            <MenuItem disabled value="">
              Please select
            </MenuItem>
            {labels.map((label, index) => (
              <MenuItem key={index} value={label}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}

export default SortingMolecule;
 */
