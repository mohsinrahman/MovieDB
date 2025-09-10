import React from "react";
import PageWrapper from "./PageWrapper";
import { Box, Typography } from "@mui/material";

export default {
  title: "Layout/PageWrapper",
  component: PageWrapper,
  tags: ["autodocs"],
};

export const Default = () => (
  <PageWrapper>
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Wrapped Content</Typography>
      <Typography>
        This box is inside the custom <strong>PageWrapper</strong> container.
      </Typography>
    </Box>
  </PageWrapper>
);
