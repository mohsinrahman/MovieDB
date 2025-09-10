import React from "react";
import { Box, Grid, Typography, TextField } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { format } from "date-fns";

function DateForm({ formValues, setFormValues }) {
  const handleDateChange = (newDate) => {
    const formattedDate = newDate ? format(newDate, "yyyy-MM-dd") : "";
    setFormValues((prev) => ({
      ...prev,
      date: formattedDate, // Save as string for API or form
    }));
  };

  return (
    <>
      <Grid item xs={12} sx={{ paddingX: 2 }}>
        <Typography variant="subtitle1" textAlign="left" fontWeight="600">
          Incident Date
        </Typography>
      </Grid>
      <Box
        display="flex"
        gap={2}
        sx={{ padding: 2, width: "513px", height: "44px" }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label=""
            value={formValues.date ? new Date(formValues.date) : null}
            onChange={handleDateChange}
            renderInput={(params) => (
              <TextField {...params} fullWidth size="small" />
            )}
          />
        </LocalizationProvider>
      </Box>
    </>
  );
}

export default DateForm;

/* import React from "react";
import InputFieldAtom from "./InputFieldAtom/InputFieldAtom";
import { Box, Grid, Typography } from "@mui/material";

function DateForm({ formValues, handleChange, setFormValues }) {
  return (
    <>
      <Grid item xs={12} sx={{ paddingX: 2 }}>
        <Typography variant="subtitle1" textAlign="left" fontWeight="600">
          Incident Date
        </Typography>
      </Grid>
      <Box
        display="flex"
        gap={2}
        sx={{ padding: 2, width: "513px", height: "44px" }}
      >
        <InputFieldAtom
          label=""
          name="date"
          type="date"
          value={formValues.date}
          handleChange={handleChange(setFormValues)}
        />
      </Box>
    </>
  );
}

export default DateForm;
 */
