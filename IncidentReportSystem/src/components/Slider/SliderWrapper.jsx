import React from "react";
import { Box, Drawer, Button, Typography } from "@mui/material";

function SliderWrapper({ children, open, anchor, onClose, onClick }) {
  return (
    <Drawer anchor={anchor} open={open} onClose={onClose}>
      <Box sx={{ width: 250, padding: 2 }}>
        <Button onClick={onClick}>Close</Button>
        <Typography variant="p" sx={{ display: "block", fontWeight: "600" }}>
          Comments
        </Typography>
        {React.Children.map(children, (child, index) => (
          <div key={index}>{child}</div>
        ))}
      </Box>
    </Drawer>
  );
}

export default SliderWrapper;
