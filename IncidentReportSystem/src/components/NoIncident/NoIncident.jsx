import React from "react";
import { Typography } from "@mui/material";
import { DescriptionOutlined } from "@mui/icons-material";

function NoIncident() {
  return (
    <>
      <DescriptionOutlined sx={{ fontSize: 60, color: "#1d4ed8" }} />
      <Typography mt={2} color="text.secondary">
        There is no Incidents to show
      </Typography>
    </>
  );
}

export default NoIncident;
