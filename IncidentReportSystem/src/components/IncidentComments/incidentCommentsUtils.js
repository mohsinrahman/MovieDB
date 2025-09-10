export const loadCommentsFromStorage = () => {
  const stored = localStorage.getItem("comments");
  return stored ? JSON.parse(stored) : [];
};

export const sendMessageUtil = (sender, name, text, commentList) => {
  const newMessage = {
    id: commentList.length + 1,
    sender,
    name,
    message: text,
    timestamp: new Date().toISOString(),
  };

  const updatedComments = [...commentList, newMessage];

  // Save to localStorage
  localStorage.setItem("comments", JSON.stringify(updatedComments));

  return updatedComments;
};
