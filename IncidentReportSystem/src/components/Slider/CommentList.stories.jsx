import React from "react";
import CommentList from "./CommentList";

export default {
  title: "Atoms/CommentList",
  component: CommentList,
};

export const Default = () => {
  const mockComments = [
    { name: "User", message: "Hey! This looks great." },
    { name: "Admin", message: "I agree, well done." },
    { name: "User", message: "Can we improve this section?" },
  ];

  return <CommentList comment={mockComments} />;
};
