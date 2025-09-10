import React from "react";
import Slider from "../Slider/Slider";

const CommentSliderPanel = ({ role, open, comment, setComment, setOpen }) => {
  if (role !== "user") return null;

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <Slider
      anchor="right"
      open={open}
      comment={comment}
      setComment={setComment}
      onClose={handleClose}
      onClick={handleClose}
    />
  );
};

export default CommentSliderPanel;
