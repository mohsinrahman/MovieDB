import React from "react";
import { Box, TextField, Grid, Typography } from "@mui/material";

function SymtomsCausesSolutions({ formValues, errors, handleChange }) {
  return (
    <>
      {["Symptoms", "Causes", "Solutions"].map((section, index) => (
        <Grid item xs={12} key={index} padding={2}>
          <Typography variant="subtitle1" textAlign="left" fontWeight="600">
            {section}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {section.toLowerCase() === "symptoms" && "What happened?"}
            {section.toLowerCase() === "causes" && "Why did it happen?"}
            {section.toLowerCase() === "solutions" && "How can we fix it?"}
          </Typography>
          <Box mt={1}>
            <TextField
              fullWidth
              multiline
              rows={3}
              placeholder="Write a text"
              sx={{ mt: 1 }}
              name={section.toLowerCase()}
              value={formValues[section.toLowerCase()]}
              onChange={handleChange}
              error={!!errors[section.toLowerCase()]}
              helperText={errors[section.toLowerCase()]}
            />
          </Box>
        </Grid>
      ))}
    </>
  );
}

export default SymtomsCausesSolutions;
