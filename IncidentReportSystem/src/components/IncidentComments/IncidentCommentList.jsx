import React from "react";
import { Box, Stack, Paper, Typography } from "@mui/material";
import styles from "./IncidentComments.module.css";

const IncidentCommentList = ({ comments }) => {
  return (
    <Box
      component="ul"
      sx={{ overflowY: "auto", maxHeight: "300px", padding: 0 }}
    >
      <Stack spacing={2}>
        {comments.map((item, id) => (
          <Paper key={id} sx={{ padding: 1, backgroundColor: "#f9f9f9" }}>
            <Typography
              variant="subtitle2"
              component="span"
              fontWeight="bold"
              color="primary"
            >
              {item.name}:
            </Typography>{" "}
            <Typography variant="body2" component="span">
              {item.message}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default IncidentCommentList;
