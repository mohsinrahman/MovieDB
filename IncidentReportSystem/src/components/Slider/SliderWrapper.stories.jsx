import React, { useState } from "react";
import SliderWrapper from "./SliderWrapper";
import { Typography } from "@mui/material";

export default {
  title: "Atoms/SliderWrapper",
  component: SliderWrapper,
};

export const Default = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <button onClick={handleOpen}>Open</button>
      <SliderWrapper
        anchor="right"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        <Typography variant="body1">
          <b>Admin:</b> Hi, Hown can we help you!
        </Typography>
        <Typography variant="body2">
          <b>User:</b> I have a broken mobile.
        </Typography>
      </SliderWrapper>
    </>
  );
};
