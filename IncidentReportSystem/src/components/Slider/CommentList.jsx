import React from "react";
import { Box, Stack, Paper, Typography } from "@mui/material";

function CommentList({ comment }) {
  return (
    <Box component="ul" sx={{ listStyle: "none", padding: 0, margin: 0 }}>
      <Stack spacing={2}>
        {comment?.map((item, id) => (
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
}

export default CommentList;
