import { useEffect } from "react";

export const sendMessage = ({
  sender,
  name,
  text,
  comment,
  setComment,
  setVal,
}) => {
  const newMessage = {
    id: comment.length + 1,
    sender,
    name,
    message: text,
    timestamp: new Date().toISOString(),
  };

  const updated = [...comment, newMessage];

  localStorage.setItem("comments", JSON.stringify(updated));
  setComment(updated);
  setVal("");
};
export const useValidateSetComment = (setComment) => {
  useEffect(() => {
    if (typeof setComment !== "function") {
      console.log("setComment is missing or not a function", setComment);
    }
  }, [setComment]);
};

export const useLoadComments = (setComment) => {
  useEffect(() => {
    const stored = localStorage.getItem("comments");
    if (stored) {
      setComment(JSON.parse(stored));
    }
  }, [setComment]);
};
