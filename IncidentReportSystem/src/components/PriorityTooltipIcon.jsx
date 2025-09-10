import React from "react";
import { Tooltip, Box, Typography } from "@mui/material";

const priorityDescription = (
  <Box sx={{ maxWidth: 300 }}>
    <Typography fontWeight="bold">Choose priority based on urgency</Typography>
    <ul style={{ paddingLeft: "1rem", margin: "0.5rem 0", color: "#000" }}>
      <li>
        <strong>1 = Very Low</strong>
        <br />
        No urgency; can be addressed later.
      </li>
      <li>
        <strong>2 = Low</strong>
        <br />
        Minor issue not urgent but should be tracked.
      </li>
      <li>
        <strong>3 = Medium</strong>
        <br />
        Normal issue needs attention in a reasonable time.
      </li>
      <li>
        <strong>4 = High</strong>
        <br />
        Important; should be resolved soon to avoid escalation.
      </li>
      <li>
        <strong>5 = Critical</strong>
        <br />
        Urgent issue; requires immediate action.
      </li>
    </ul>
  </Box>
);

export default function PriorityTooltipIcon() {
  return (
    <Tooltip
      title={priorityDescription}
      placement="right"
      arrow
      enterTouchDelay={0}
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: "#fff",
            color: "#000",
            boxShadow: 1,
            fontSize: 13,
            borderRadius: 1,
            padding: 1.5,
          },
        },
        arrow: {
          sx: {
            color: "#fff",
          },
        },
      }}
    >
      <Box
        component="span"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 15,
          height: 15,
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "50%",
          border: "1px solid #000",
          fontSize: "10px",
          marginLeft: 1,
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        !
      </Box>
    </Tooltip>
  );
}
