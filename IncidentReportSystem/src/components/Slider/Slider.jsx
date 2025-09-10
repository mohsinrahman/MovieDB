import React, { useState } from "react";
import { TextField } from "@mui/material";
import SliderSendBtn from "./SliderSendBtn";
import {
  sendMessage,
  useValidateSetComment,
  useLoadComments,
} from "./sliderUtils";
import CommentList from "./CommentList";
import SliderWrapper from "./SliderWrapper";

function Slider({ anchor, open, onClose, onClick, comment, setComment }) {
  useValidateSetComment(setComment);
  useLoadComments(setComment);
  const [val, setVal] = useState();
  return (
    <>
      <SliderWrapper
        anchor={anchor}
        open={open}
        onClose={onClose}
        onClick={onClick}
      >
        <CommentList comment={comment} />
        <TextField
          fullWidth
          multiline
          minRows={2}
          placeholder="Write a Comment"
          variant="outlined"
          size="small"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <SliderSendBtn
          sendMessage={() => {
            if (!val || val.trim() === "") return;
            sendMessage({
              sender: "user",
              name: "User",
              text: val,
              comment,
              setComment,
              setVal,
            });
          }}
          val={val}
        />
      </SliderWrapper>
    </>
  );
}

export default Slider;
