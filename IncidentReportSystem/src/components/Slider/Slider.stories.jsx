import React, { useState } from "react";
import Slider from "./Slider";
import {
  useValidateSetComment,
  useLoadComments,
  sendMessage,
} from "./sliderUtils";

export default {
  title: "Organisms/Slider",
  component: Slider,
};

export const Default = () => {
  const [comment, setComment] = useState([]);
  const [open, setOpen] = useState(true);

  useValidateSetComment(setComment);
  useLoadComments(setComment);

  const handleToggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Slider
      anchor="right"
      open={open}
      onClose={handleToggleDrawer}
      onClick={handleToggleDrawer}
      comment={comment}
      setComment={setComment}
    />
  );
};
