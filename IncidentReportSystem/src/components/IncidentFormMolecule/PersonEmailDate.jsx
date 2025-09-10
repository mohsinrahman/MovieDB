import React, { useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import EventIcon from "@mui/icons-material/Event";
import { formatCustomDate } from "@/utils/dateUtils";

const PersonEmailDate = ({ formValues, setFormValues }) => {
  useEffect(() => {
    setFormValues((prev) => ({
      ...prev,
      reportDate: formatCustomDate(),
    }));
  }, [setFormValues]);
  return (
    <Box sx={{ padding: 2, marginTop: 5 }}>
      <Grid container justifyContent="space-between">
        {/* Column 1 - Name */}
        <Grid item xs={12} sm={4}>
          <Box display="flex" alignItems="center" gap={1}>
            <PersonIcon color="action" />
            <Typography variant="subtitle1" color="primary.dark">
              Olivia Rhye Norman
            </Typography>
          </Box>
        </Grid>

        {/* Column 2 - Email */}
        <Grid item xs={12} sm={4}>
          <Box display="flex" alignItems="center" gap={1}>
            <EmailIcon color="action" />
            <Typography variant="subtitle1" color="primary.dark">
              olivia@untitledui.com
            </Typography>
          </Box>
        </Grid>

        {/* Column 3 - Date */}
        <Grid item xs={12} sm={4}>
          <Box display="flex" alignItems="center" gap={1}>
            <EventIcon color="action" />
            <Typography variant="subtitle1" color="primary.dark">
              {formValues.reportDate
                ? new Date(formValues.reportDate).toLocaleDateString()
                : "—"}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonEmailDate;
