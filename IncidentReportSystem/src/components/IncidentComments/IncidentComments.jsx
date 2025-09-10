import React, { useState, useEffect } from "react";
import { Typography, Divider } from "@mui/material";
import IncidentCommentInput from "./IncidentCommentInput";
import IncidentCommentList from "./IncidentCommentList";
import {
  sendMessageUtil,
  loadCommentsFromStorage,
} from "./incidentCommentsUtils";
import styles from "./IncidentComments.module.css";

function IncidentComments({ comment, setComment }) {
  const [val, setVal] = useState();
  const sendMessage = (sender, name, text) => {
    const updated = sendMessageUtil(sender, name, text, comment);
    setComment(updated);
    setVal("");
  };
  useEffect(() => {
    const initialComments = loadCommentsFromStorage();
    setComment(initialComments);
  }, []);
  return (
    <>
      <Typography variant="p" className={styles.title}>
        Comments
      </Typography>
      <Divider />
      <IncidentCommentList comments={comment} />
      <IncidentCommentInput
        val={val}
        setVal={setVal}
        sendMessage={sendMessage}
      />
    </>
  );
}

export default IncidentComments;
